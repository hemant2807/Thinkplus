import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#05010f] text-white">
      <Navbar />

      <div className="pt-32"></div>

      <Hero />
    </main>
  );
}
