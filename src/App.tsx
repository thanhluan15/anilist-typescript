import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Anilist from "./components/Anilist";
import AnimeCard from "./components/AnimeCard";
import AnimeList from "./components/AnimeList";
import Type from "./components/Type";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Anilist />}></Route>
      </Routes>
      <Routes>
        <Route path="/:id" element={<AnimeCard />}></Route>
      </Routes>
      <Routes>
        <Route path="/type" element={<Type />}></Route>
      </Routes>
      <Routes>
        <Route path="/anime" element={<AnimeList />}></Route>
      </Routes>
      {/* <Anilist /> */}
    </div>
  );
}

export default App;
