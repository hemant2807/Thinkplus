import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />

      <div className="pt-20"></div>

      <h1 className="text-center text-4xl font-bold text-blue-900">
        ThinkPlus Home Page
      </h1>
    </main>
  );
}
