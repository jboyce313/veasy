import "../styles/Instructions.css";

export function Instructions({ instructions }) {
  return (
    <>
      {instructions.map((instruction, index) => (
        <div key={index} className="instruction">
          <p className="number">{`${index + 1}.`}</p>
          <p className="words">{instruction}</p>
        </div>
      ))}
    </>
  );
}
