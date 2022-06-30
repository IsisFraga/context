import { createContext, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

export const CountContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <div className="App">
        <header className="App-header">
          <Card
            type="two"
            name="cachorro"
            setCount={(newCount) => setCount(newCount)}
          />
          <p>Contextos</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
        </header>
      </div>
    </CountContext.Provider>
  );
}

export default App;
