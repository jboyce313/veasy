import { useState } from "react";
import { Header } from "./components/Header";
import { RecipesList } from "./components/RecipesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
