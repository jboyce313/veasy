import recipes from "../recipes";

export function RecipesList() {
  console.log(recipes);
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <h3>{recipe.name}</h3>
          <h4>Regular</h4>
          <h5>Ingredients</h5>
          {recipe.regular.ingredients.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
          <h5>Instructions</h5>
          {recipe.regular.instructions}
          <h4>Vegan</h4>
          <h5>Ingredients</h5>
          {recipe.vegan.ingredients.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
          <h5>Instructions</h5>
          {recipe.vegan.instructions}
        </div>
      ))}
    </div>
  );
}
