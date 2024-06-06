import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
