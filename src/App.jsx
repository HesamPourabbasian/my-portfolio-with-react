import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { MouseTrackerProvider } from "./components/MouseTrackerProvider.jsx";
export default function App() {
  return (
    <>
      <MouseTrackerProvider />
      <div className="app bg-[#d6d5d1e6] max-w-[1480px] mx-auto scroll-smooth">
        <Navbar />
        <Info />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
