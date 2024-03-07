import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/Recipe.css";
import { Regular } from "./Regular";
import { Vegan } from "./Vegan";

export function Recipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes[id - 1];

  const [version, setVersion] = useState("regular");

  return (
    <div className="recipePage">
      <h3>{recipe.name}</h3>
      <button
        onClick={() => setVersion("regular")}
        className={version == "regular" ? "button highlighted" : "button"}
      >
        Regular
      </button>
      <button
        onClick={() => setVersion("vegan")}
        className={version == "vegan" ? "button highlighted" : "button"}
      >
        Vegan
      </button>

      {version == "regular" ? (
        <Regular recipe={recipe} />
      ) : (
        <Vegan recipe={recipe} />
      )}
    </div>
  );
}