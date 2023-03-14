import React, { createContext, ReactNode, useContext, useState } from "react";

export interface SearchProps {
  result: string;
  handleResult: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<SearchProps>(null!);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState("");

  const handleResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ result, handleResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
