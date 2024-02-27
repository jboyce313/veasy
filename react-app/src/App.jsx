import { useState } from "react";
import { Header } from "./components/Header";
import { RecipesList } from "./components/RecipesList";

function App() {
  return (
    <>
      <Header />
      <RecipesList />
    </>
  );
}

export default App;
