import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handlePreviousCount() {
    setCount((s) => s - step);
  }

  function handleNextCount() {
    setCount((s) => s + step);
  }

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>
            <p> step : {step}</p>
          </span>
        </div>

        <div style={{ display: "flex" }}>
          <button onClick={handlePreviousCount}> - </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleNextCount}> + </button>
        </div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <p>{date.toDateString()}</p>
      </div>

      {count !== 0 && step !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
