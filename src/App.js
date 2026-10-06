
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  function increase() {
    setCount(count + 1);
    setHistory([...history, count + 1]);
  }

  function decrease() {
    setCount(count - 1);
    setHistory([...history, count - 1]);
  }

  function reset() {
    setCount(0);
    setHistory([...history, 0]);
  }

  function clearHistory() {
    setHistory([]);
  }

  return (
    <div className="app">

      <div className="counter">

        <h1>Counter</h1>

        <p>Current Count</p>

        <h2>{count}</h2>

        <div className="buttons">

          <button onClick={decrease}>
            -
          </button>

          <button onClick={reset}>
            Reset
          </button>

          <button onClick={increase}>
            +
          </button>

        </div>

        <div className="history">

          <div className="history-title">
            <h3>Count History</h3>

            <button onClick={clearHistory}>
              Clear
            </button>
          </div>

          {history.length === 0 ? (
            <p>No history yet</p>
          ) : (
            history.map((value, index) => (
              <div className="history-item" key={index}>
                <span>
                  Change {index + 1}
                </span>

                <b>{value}</b>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default App;

