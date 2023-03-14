/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";
import "../services/anilist";
import { Link } from "react-router-dom";
import Search from "./Search";
import { SearchContext, SearchProps } from "../context/SearchContext";

const AnimeList = () => {
  const { result, handleResult } = useContext<SearchProps>(SearchContext);

  const { data: anilist } = useQuery<AnimeData>({
    queryKey: ["anilist", result],
    queryFn: () => getAnimeInfo(result),
  });

  console.log(anilist);

  return (
    <div className="flex flex-col gap-6">
      <div className="ml-4 flex justify-center items-center mt-4 gap-2">
        <h3 className="font-semibold">Search Anime: </h3>
        <Search
          animeName={result}
          setAnimeName={handleResult}
        ></Search>
      </div>
      <div className="flex gap-4 flex-wrap px-10">
        {anilist?.data?.AnimeSearch?.media?.map((i) => {
          return (
            <div
              key={i?.id}
              className="w-60 flex justify-center flex-col items-center gap-5 cursor-pointer"
            >
              <img
                className="w-60 h-80 object-cover object-center"
                src={i?.coverImage?.large}
                alt=""
              />
              <div className="flex">
                <div className="font-semibold text-1xl">
                  {i?.title?.userPreferred}
                </div>
                <Link to={`/anime/${i?.id}`}>
                  <button className="bg-green-400">Watch</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
