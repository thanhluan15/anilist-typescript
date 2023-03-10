import React, { useEffect, useState } from "react";
import { AnimeData } from "../types/anilist";
import { animeQuery, basicQuery, pageInfoQuery } from "../services/queries";
import { Link } from "react-router-dom";

function Anilist() {
  const [anilist, setAnilist] = useState<AnimeData>(null!);
  const [animeName, setAnimeName] = useState("");

  const url = "https://graphql.anilist.co";

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

  const getData = async () => {
    const data = await fetch(url, options)
      .then((res) => res.json())
      .then((res) => setAnilist(res));

      console.log(data)
  };

  console.log(anilist);

  useEffect(() => {
    getData();
  }, [animeName]);

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
              <Link to = {`/${i?.id}`}><button className="bg-green-400">Watch</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Anilist;
