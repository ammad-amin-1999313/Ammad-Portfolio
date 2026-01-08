import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { lazyDelay } from "./utils/lazyDelay";

// Lazy load the components
const Home = lazy(() => lazyDelay(() => import("./pages/Home"), 2000));
const Project = lazy(() => lazyDelay(() => import("./pages/Project"), 2000));
const Contact = lazy(() => lazyDelay(() => import("./pages/Contact"), 2000));
const About = lazy(() => lazyDelay(() => import("./pages/About"), 2000));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="size text-white text-center"><Loader/></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
