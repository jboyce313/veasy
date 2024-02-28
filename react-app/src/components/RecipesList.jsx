import recipes from "../recipes";
import { Recipe } from "./Recipe";

export function RecipesList() {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <h3 key={recipe.id}>{recipe.name}</h3>
      ))}
    </div>
  );
}
