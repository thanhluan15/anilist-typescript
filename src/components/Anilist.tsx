import React, { useEffect, useState } from "react";
import { basicQuery } from "../services/queries";

function Anilist() {
  const [anilist, setAnilist] = useState([]);

  const url = "https://graphql.anilist.co";

  const variables = { id: 15125 };

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: basicQuery,
      variables: variables,
    }),
  };

  const getData = async () => {
    const data: any = await fetch(url, options)
      .then((res) => res.json())
      .then((res) => setAnilist(res));
  };

  console.log(anilist)

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* {anilist?.map((i) => (
        <div>i</div>
      ))} */}
    </div>
  );
}

export default Anilist;
