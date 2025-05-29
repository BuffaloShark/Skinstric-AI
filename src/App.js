import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce";
import Location from "./pages/Location";
import StartAnalysis from "./pages/StartAnalysis";
import LoadingResults from "./components/LoadingResults";
import Results from "./pages/Results";
import Demographics from "./pages/Demographics";
import LoadingCamera from "./components/LoadingCamera";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/location" element={<Location />} />
        <Route path="/startAnalysis" element={<StartAnalysis />} />
        <Route path="/loadingcamera" element={<LoadingCamera />} />
        <Route path="/loadingresults" element={<LoadingResults />} />
        <Route path="/results" element={<Results />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
    </Router>
  );
}

export default App;
