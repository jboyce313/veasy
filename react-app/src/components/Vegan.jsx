export function Vegan({ recipe }) {
  return (
    <div className="vegan">
      <h5>Ingredients</h5>
      {recipe.vegan.ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
      <h5>Instructions</h5>
      {recipe.vegan.instructions.map((instruction) => (
        <p key={instruction}>{instruction}</p>
      ))}
    </div>
  );
}
