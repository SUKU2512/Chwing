import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Animate from "./Components/Animate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Animate/>
      </BrowserRouter>
    </div>
  );
}

export default App;
