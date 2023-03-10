/** @format */

import React, { createContext, ReactNode, useContext, useState } from "react";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";
import { useQuery } from "@tanstack/react-query";

const AnimeContext = createContext<AnimeData | undefined>(null!);

const AnimeProvider = ({children}: {children: ReactNode}) => {
  const [animeName, setAnimeName] = useState("");

  const { data: anilist } = useQuery<AnimeData>({
    queryKey: ["anilist", animeName],
    queryFn: () => getAnimeInfo(animeName),
  });
  return (
    <AnimeContext.Provider value={anilist}>{children}</AnimeContext.Provider>
  );
};

export default AnimeProvider;

export const useAnilist = () => {
  return useContext(AnimeContext);
};
