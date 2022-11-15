import { Route, Routes } from "react-router-dom";
import CardDetails from "@components/CardDetails";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/cards/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
