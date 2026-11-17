
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <Experience />

      <Work />

     <Services />

      <About />

      <Testimonial />

       <Contact />

    </main>
  );
}
