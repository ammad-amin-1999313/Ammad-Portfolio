import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
