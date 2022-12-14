import "./App.css";
import { useContext } from "react";
import { buttonContext } from "./contexts/buttonContext";

function App() {
  const { active, handleClick } = useContext(buttonContext);

  return (
    <div className="App mt-5">
      <p className="cursor" onClick={handleClick}>
        Click Here
      </p>

      <button className={active ? "red-btn" : "green-btn"}>Sign Up</button>
    </div>
  );
}

export default App;
