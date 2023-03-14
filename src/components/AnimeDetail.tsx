import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useAnilist } from "../context/AnimeContext";
import { SearchContext } from "../context/SearchContext";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";

const AnimeCard = () => {
  const paramIds = useParams();
  const id = Number(paramIds.id);
  const anime = useAnilist();

  console.log(anime);

  console.log(id);
  return (
    <div>
      {anime?.data.AnimeSearch.media.map((a) =>
        a.id === id ? <div>{a.title.userPreferred}</div> : ""
      )}
    </div>
  );
};

export default AnimeCard;
