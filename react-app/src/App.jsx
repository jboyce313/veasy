import recipes from "./recipes";
import { Header } from "./components/Header";
import { RecipesList } from "./components/RecipesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Recipe } from "./components/Recipe";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesList recipes={recipes} />}></Route>
        <Route
          path="/recipes/:id"
          element={<Recipe recipes={recipes} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
