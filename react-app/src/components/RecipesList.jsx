import { Link } from "react-router-dom";
import "../styles/RecipesList.css";

export function RecipesList({ recipes }) {
  return (
    <div className="recipesListContainer">
      <h2>Choose a Recipe to Get Started!</h2>
      <div className="recipesList">
        {recipes.map((recipe) => (
          <Link className="recipe" to={`/recipes/${recipe.id}`} key={recipe.id}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.image} />
          </Link>
        ))}
      </div>
    </div>
  );
}
