import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./NavBar";
import SecondPage from "./SecondPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ButtonAppBar />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
