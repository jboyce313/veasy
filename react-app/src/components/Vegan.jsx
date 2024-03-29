import { Instructions } from "./Instructions";

export function Vegan({ recipe }) {
  return (
    <div className="vegan">
      <div className="ingredients">
        <h5>Ingredients</h5>
        {recipe.vegan.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))}
      </div>
      <div className="instructions">
        <h5>Instructions</h5>
        <Instructions instructions={recipe.vegan.instructions} />
      </div>
    </div>
  );
}
