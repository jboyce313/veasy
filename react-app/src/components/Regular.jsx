export function Regular({ recipe }) {
  return (
    <div className="regular">
      <h4>Regular</h4>
      <h5>Ingredients</h5>
      {recipe.regular.ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
      <h5>Instructions</h5>
      {recipe.regular.instructions}
    </div>
  );
}
