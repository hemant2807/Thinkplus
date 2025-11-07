import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseSection from "./components/CourseSection";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#05010f] text-white">
      <Navbar />
      
      <Hero />
      <CourseSection />
      <Stats />
      <Reviews />
      <Faculty />
      <CTASection />
      <Footer />
    </main>
  );
}
