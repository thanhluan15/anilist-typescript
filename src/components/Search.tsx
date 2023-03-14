import React, { useState } from "react";

export interface AnimeProps {
  animeName: string;
  setAnimeName: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ animeName, setAnimeName }: AnimeProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="anime"
        value={animeName}
        onChange={setAnimeName}
      />
    </div>
  );
};

export default Search;
