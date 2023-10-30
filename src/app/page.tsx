import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="screen-width">

        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  )
}
