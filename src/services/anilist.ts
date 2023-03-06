import "../index.css";
import { AnimeData } from "../types/anilist";
import { animeQuery } from "./queries";

const url = "https://graphql.anilist.co";

export const getAnimeInfo = async (animeName: string): Promise<AnimeData> => {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: animeQuery(`${animeName}`),
    }),
  };

  const data: Awaited<ReturnType<typeof getAnimeInfo>> = await fetch(
    url,
    options
  ).then((res) => res.json());

  return data;
};
