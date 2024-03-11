import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/Recipe.css";
import { Regular } from "./Regular";
import { Vegan } from "./Vegan";
import { CiTimer } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export function Recipe({ recipes }) {
  const { id } = useParams();
  const recipe = recipes[id - 1];
  console.log(recipes.length);

  const [version, setVersion] = useState("regular");

  return (
    <div className="recipeContainer">
      <div className="arrows">
        <div>
          {id == 1 ? (
            ""
          ) : (
            <div className="arrow">
              <FaArrowLeft />
              <Link to={`/veasy/recipes/${parseInt(id) - 1}`}>Back</Link>
            </div>
          )}
        </div>
        <div>
          {recipes.length == id ? (
            ""
          ) : (
            <div className="arrow">
              <Link to={`/veasy/recipes/${parseInt(id) + 1}`}>Next</Link>
              <FaArrowRight />
            </div>
          )}
        </div>
      </div>
      <div className="recipePage">
        <div className="info">
          <div>
            <p>{recipe.difficulty}</p>
          </div>
          <div className="infoTime">
            <CiTimer />
            <p>{recipe.time}</p>
          </div>
        </div>

        <h3 className="recipeName">{recipe.name}</h3>

        <div className="buttons">
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
        </div>

        <div className="imageContainer">
          <img src={recipe.image} alt={recipe.name} className="foodPic"></img>
        </div>

        {version == "regular" ? (
          <Regular recipe={recipe} />
        ) : (
          <Vegan recipe={recipe} />
        )}
      </div>
    </div>
  );
}
