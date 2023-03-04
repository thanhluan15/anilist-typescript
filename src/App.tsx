import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Anilist from "./components/Anilist";
import Type from "./components/Type";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/type" element={<Type />}></Route>
      </Routes>
      <Anilist />
    </div>
  );
}

export default App;
