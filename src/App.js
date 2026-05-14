import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

// Lazy load the components — loader shows only while the chunk is actually fetching
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="size text-white text-center"><Loader/></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project width="large"  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
