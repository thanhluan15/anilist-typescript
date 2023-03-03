import React, { useEffect, useState } from "react";
import { animeQuery, basicQuery, pageInfoQuery } from "../services/queries";

function Anilist() {
  const [anilist, setAnilist] = useState([]);
  const [animeName, setAnimeName] = useState("");

  const url = "https://graphql.anilist.co";

  // const variables = { id: 15125 };
  // const variables = { query: "Fate/Zero" };
  // var variables = {
  //   search: "Fate/Zero",
  //   page: 1,
  //   perPage: 3,
  // };
  console.log(animeQuery(`${animeName}`));

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
    const data: any = await fetch(url, options)
      .then((res) => res.json())
      .then((res) => setAnilist(res));
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
          placeholder="anime"
          value={animeName}
          onChange={(e) => setAnimeName(e.target.value)}
        />
      </div>
      <div className="flex gap-4 flex-wrap px-10">
        {anilist?.data?.AnimeSearch?.media?.map((i) => {
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
        })}{" "}
      </div>
    </div>
  );
}

export default Anilist;
