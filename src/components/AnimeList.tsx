/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";
import "../services/anilist";
import { Link } from "react-router-dom";
import Search from "./Search";
import { SearchContext, SearchProps } from "../contexts/SearchContext";
import { BiArrowToTop } from "react-icons/bi";

const AnimeList = () => {
  const { result, handleResult } = useContext<SearchProps>(SearchContext);
  const [isScrool, setIsScrool] = useState(false);

  const { data: anilist } = useQuery<AnimeData>({
    queryKey: ["anilist", result],
    queryFn: () => getAnimeInfo(result),
  });

  const handleScrool = () => {
    window.onscroll = () => {
      setIsScrool(window.scrollY > 500 ? true : false);
    };
  };

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    handleScrool();
    return () => {};
  }, [window.scrollY]);

  console.log(isScrool);
  console.log(anilist);

  return (
    <div className="flex flex-col gap-6">
      <div className="ml-4 flex justify-center items-center mt-4 gap-2">
        <h3 className="font-semibold">Search Anime: </h3>
        <Search animeName={result} setAnimeName={handleResult}></Search>
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
                alt="Anime"
              />
              <div className="flex justify-between">
                <div className="font-semibold text-1xl">
                  {i?.title?.userPreferred}
                </div>
                <Link to={`/anime/${i?.id}`}>
                  <button className="bg-green-400 px-4 py-2 rounded-md text-white hover:bg-green-600">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {isScrool && (
        <div
          className="w-16 h-16 rounded-full bg-green-400 fixed bottom-5 right-5 border-4 border-x-fuchsia-900 border-fuchsia-600 flex justify-center items-center cursor-pointer"
          onClick={handleMoveToTop}
        >
          <BiArrowToTop size={30} color={"white"}></BiArrowToTop>
        </div>
      )}
    </div>
  );
};

export default AnimeList;
