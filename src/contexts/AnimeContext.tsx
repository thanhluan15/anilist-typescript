/** @format */

import React, { createContext, ReactNode, useContext, useState } from "react";
import { getAnimeInfo } from "../services/anilist";
import { AnimeData } from "../types/anilist";
import { useQuery } from "@tanstack/react-query";
import { SearchContext, SearchProps } from "./SearchContext";

const AnimeContext = createContext<AnimeData | undefined>(null!);

const AnimeProvider = ({ children }: { children: ReactNode }) => {
  const { result } = useContext<SearchProps>(SearchContext);

  const { data: anilist } = useQuery<AnimeData>({
    queryKey: ["anilist", result],
    queryFn: () => getAnimeInfo(result),
  });
  return (
    <AnimeContext.Provider value={anilist}>{children}</AnimeContext.Provider>
  );
};

export default AnimeProvider;

export const useAnilist = () => {
  return useContext(AnimeContext);
};
