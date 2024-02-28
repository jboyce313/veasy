import { Recipe } from "./Recipe";
import { Link } from "react-router-dom";

export function RecipesList({ recipes }) {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <h3>{recipe.name}</h3>
        </Link>
      ))}
    </div>
  );
}
