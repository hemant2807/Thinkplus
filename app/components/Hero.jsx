// import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        w-full min-h-[90vh] 
        bg-linear-to-b from-[#0a0018] via-[#0f0125] to-[#0a0018]
        text-white 
        flex flex-col items-center justify-center 
        relative overflow-hidden
        pt-32 pb-20
      "
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-4">
        Ultimate Learning Platform for <br />

        {/* NEON TEXT EFFECT LIKE “AI Web Analyzer” */}
        <span className="
          bg-linear-to-r 
          from-[#4AB3FF] via-[#8553FF] to-[#C057FF] 
          bg-clip-text text-transparent
        ">
          Competitive Exams
        </span>
      </h1>

      <p className="text-center text-gray-300 max-w-2xl text-lg md:text-xl mb-10">
        Prepare with top educators using structured batches, live classes,
        full-length mock tests and AI-powered performance tracking.
      </p>

      {/* CLIENTS SATISFIED STAT */}
      <div className="mt-6 mb-10 flex justify-center">
        <div className="
          flex items-center gap-3 
          bg-linear-to-r from-[#2d0a52] via-[#0c0220] to-transparent 
          px-6 py-3 rounded-full 
          border border-white/10 
          backdrop-blur-xl
          shadow-[0_0_20px_rgba(80,40,200,0.4)]
        ">
          {/* Overlapping Profile Images */}
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/150?img=7" className="w-9 h-9 rounded-full border border-[#0f0125]" />
            <img src="https://i.pravatar.cc/150?img=2" className="w-9 h-9 rounded-full border border-[#0f0125]" />
            <img src="https://i.pravatar.cc/150?img=3" className="w-9 h-9 rounded-full border border-[#0f0125]" />
            <img src="https://i.pravatar.cc/150?img=4" className="w-9 h-9 rounded-full border border-[#0f0125]" />
            <img src="https://i.pravatar.cc/150?img=5" className="w-9 h-9 rounded-full border border-[#0f0125]" />
          </div>

          {/* Text */}
          <p className="text-gray-200 text-sm md:text-base">
            <span className="font-bold">12,577+</span> Students satisfied
          </p>
        </div>
      </div>
      
      {/* CTA Buttons */}
      <div className="flex gap-4 mb-14">
        <button
          className="
            px-7 py-3 rounded-xl font-semibold 
            bg-linear-to-r from-orange-500 to-orange-600
            shadow-[0_0_15px_rgba(255,120,40,0.7)]
            hover:shadow-[0_0_25px_rgba(255,120,40,0.9)]
            transition
          "
        >
          Explore Courses
        </button>

        <button
          className="
            px-7 py-3 rounded-xl font-semibold 
            border border-white/20 backdrop-blur-xl
            hover:bg-white/10 transition
          "
        >
          Book Free Demo
        </button>
      </div>

      {/* GLOWING GLASS DASHBOARD BOX */}
      <div
        className="
          w-[92%] md:w-[70%] lg:w-[55%]
          bg-white/5 backdrop-blur-xl
          border border-white/10 
          rounded-3xl p-6 md:p-10
          shadow-[0_0_40px_rgba(99,50,200,0.5)]
          relative
        "
      >
        {/* 6 GRID BOXES (no play button) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Live Classes</p>
            <p className="text-gray-300 text-sm mt-2">Daily interactive</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Test Series</p>
            <p className="text-gray-300 text-sm mt-2">Mock & chapter tests</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Rank Predictor</p>
            <p className="text-gray-300 text-sm mt-2">Performance analytics</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Doubt Solving</p>
            <p className="text-gray-300 text-sm mt-2">Instant help</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Study Material</p>
            <p className="text-gray-300 text-sm mt-2">200+ PDFs</p>
          </div>

          {/* ✅ 6th NEW BOX */}
          <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
            <p className="text-xl font-bold">Learning Path</p>
            <p className="text-gray-300 text-sm mt-2">Guided roadmap</p>
          </div>

        </div>
      </div>
    </section>
  );
}
