import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Footer from "@/components/layout/Footer";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-background text-text">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
