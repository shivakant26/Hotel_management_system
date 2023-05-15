import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";
const App = () => {
  return (
    <div className="App">
      <Router>
        <MainRoute/>
      </Router>
    </div>
  );
};

export default App;
