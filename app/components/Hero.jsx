import { Play } from "lucide-react";
import Stars from "./Stars";

export default function Hero() {
  return (
    <section
      className="
        w-full min-h-[95vh]
        bg-linear-to-b from-[#050114] via-[#0a0120] to-[#050114]
        text-white relative overflow-hidden
        pt-24 pb-24 flex flex-col items-center justify-start
    "
    >
      <Stars />

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-[150px] rounded-full"></div>

      <h1 className="text-[2.8rem] md:text-[4.2rem] font-extrabold text-center leading-tight mb-2 tracking-tight">
        Ultimate Learning Platform For <br />
        <span
          className="
            bg-linear-to-r 
            from-[#4AB3FF] via-[#8553FF] to-[#C057FF] 
            bg-clip-text text-transparent 
            font-extrabold
            tracking-tight
            "
        >
          Competitive Exams
        </span>
      </h1>

      <p className="text-center text-gray-300 max-w-2xl text-lg md:text-xl mt-3 mb-8 leading-relaxed">
        Prepare smarter with structured batches, live classes, full mock tests
        and personalized performance tracking.
      </p>

      <div className="mt-4 mb-14 flex justify-center">
        <div
          className="
          flex items-center gap-4 
          bg-linear-to-r from-[#160531] via-[#0a0122] to-[#160531]
          px-7 py-3 rounded-full 
          border border-white/10 
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(80,40,200,0.35)]
        "
        >
          <div className="flex -space-x-3">
            <img
              src="https://i.pravatar.cc/150?img=7"
              className="w-10 h-10 rounded-full border border-[#0f0125]"
            />
            <img
              src="https://i.pravatar.cc/150?img=2"
              className="w-10 h-10 rounded-full border border-[#0f0125]"
            />
            <img
              src="https://i.pravatar.cc/150?img=3"
              className="w-10 h-10 rounded-full border border-[#0f0125]"
            />
            <img
              src="https://i.pravatar.cc/150?img=4"
              className="w-10 h-10 rounded-full border border-[#0f0125]"
            />
            <img
              src="https://i.pravatar.cc/150?img=5"
              className="w-10 h-10 rounded-full border border-[#0f0125]"
            />
          </div>

          <p className="text-gray-200 text-sm md:text-base">
            <span className="font-bold text-white">12,577+</span> Students satisfied
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-14">
        <button
          className="
            px-7 py-3 rounded-full font-semibold 
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

      <div
        className="
          w-[92%] md:w-[70%] lg:w-[55%]
          bg-white/5 backdrop-blur-xl
          border border-white/10 
          rounded-3xl p-6 md:p-10
          shadow-[0_0_60px_rgba(80,40,200,0.4)]
          relative
        "
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4">
          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Live Classes</p>
            <p className="text-gray-300 text-sm mt-2">Daily interactive</p>
          </div>

          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Test Series</p>
            <p className="text-gray-300 text-sm mt-2">Mock & chapter tests</p>
          </div>

          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Rank Predictor</p>
            <p className="text-gray-300 text-sm mt-2">Performance analytics</p>
          </div>

          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Doubt Solving</p>
            <p className="text-gray-300 text-sm mt-2">Instant help</p>
          </div>

          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Study Material</p>
            <p className="text-gray-300 text-sm mt-2">200+ PDFs</p>
          </div>

          <div className="
            bg-white/10 
            p-5 rounded-xl 
            border border-white/10 
            text-center 
            hover:bg-white/15 transition
          ">
            <p className="text-xl font-bold">Learning Path</p>
            <p className="text-gray-300 text-sm mt-2">Guided roadmap</p>
          </div>
        </div>
      </div>
    </section>
  );
}
