import { Link } from "react-router-dom";
import "../styles/RecipesList.css";
import { CiTimer } from "react-icons/ci";

export function RecipesList({ recipes }) {
  return (
    <div className="recipesListContainer">
      <h2>Choose a Recipe to Get Started!</h2>
      <div className="recipesList">
        {recipes.map((recipe) => (
          <Link
            className="recipe"
            to={`/veasy/recipes/${recipe.id}`}
            key={recipe.id}
          >
            <h3>{recipe.name}</h3>
            <div className="imageContainer">
              <img src={recipe.image} alt={recipe.image} />
            </div>
            <div className="details">
              <p>{recipe.difficulty}</p>
              <div className="time">
                <CiTimer />
                <p>{recipe.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
