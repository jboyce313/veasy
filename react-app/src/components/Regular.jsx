export function Regular({ recipe }) {
  return (
    <div className="regular">
      <div className="ingredients">
        <h5>Ingredients</h5>
        {recipe.regular.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))}
      </div>
      <div className="instructions">
        <h5>Instructions</h5>
        {recipe.regular.instructions.map((instruction) => (
          <p key={instruction}>{instruction}</p>
        ))}
      </div>
    </div>
  );
}
