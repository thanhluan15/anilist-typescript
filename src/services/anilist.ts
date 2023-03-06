import "../index.css";
import { animeQuery } from "./queries";

type Media = {
  id: number;
  coverImage: { large: string };
  title: { userPreferred: string };
};

export interface AnimeData {
  data: {
    AnimeSearch: {
      media: [Media];
    };
  };
}

const url = "https://graphql.anilist.co";

export const getAnimeInfo = async (animeName: string) => {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      query: animeQuery(`${animeName}`),
    }),
  };

  const data = await fetch(url, options)
    .then((res) => res.json())
  return data;
};

type AnimeFetchData = Awaited<ReturnType<typeof getAnimeInfo>>

const data = getAnimeInfo("Fate")

console.log(data)


