import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";
import "../services/anilist";

const AnimeList = () => {
  const [animeName, setAnimeName] = useState("");

  const { data: anilist } = useQuery<AnimeData | undefined>({
    queryKey: ["anilist", animeName],
    queryFn: () => getAnimeInfo(animeName),
  });

  console.log(anilist);

  return (
    <div className="flex flex-col gap-6">
      <div className="ml-4 flex justify-center items-center mt-4 gap-2">
        <h3 className="font-semibold">Search Anime: </h3>
        <input
          className="px-4 py-2"
          placeholder="Anime"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
        />
      </div>
      <div className="flex gap-4 flex-wrap px-10">
        {anilist?.data?.AnimeSearch?.media?.map((i: any) => {
          return (
            <div
              key={i?.id}
              className="w-60 flex justify-center flex-col items-center gap-5"
            >
              <img
                className="w-60 h-80 object-cover object-center"
                src={i?.coverImage?.large}
                alt=""
              />
              <div className="font-semibold text-1xl">
                {i?.title?.userPreferred}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
