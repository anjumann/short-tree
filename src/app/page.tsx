import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="">

        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  )
}
