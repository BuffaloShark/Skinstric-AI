import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce";
import Location from "./pages/Location";
import StartAnalysis from "./pages/StartAnalysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/location" element={<Location />} />
        <Route path="/startAnalysis" element={<StartAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
