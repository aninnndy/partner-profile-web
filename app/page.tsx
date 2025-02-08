import Navbar from "./Components/Navbar";
import Hero from "./pages/Home/Hero";
import About from "./pages/Home/About";
// import Project from "./pages/Home/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Project /> */}
    </>
  );
}
