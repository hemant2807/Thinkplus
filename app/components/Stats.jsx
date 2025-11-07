import { Star, BookOpen, Users, MessageSquare } from "lucide-react";

export default function ThinkPlusStats() {
  return (
    <section className="w-full py-28 bg-[#070115] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-800/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-700/10 blur-[150px] rounded-full"></div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Start your prep the{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF4D8D] to-[#FF2563]">
          THINKPLUS
        </span>{" "}
        way
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="
            bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 shadow-[0_0_20px_rgba(80,40,200,0.25)]
            hover:bg-white/10 transition
        "
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Star className="text-purple-300" size={32} />
          </div>
          <h3 className="text-center text-3xl font-bold">700+</h3>
          <p className="text-center text-gray-300 mt-1 text-sm">
            Results Delivered
          </p>
        </div>

        <div
          className="
            bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 shadow-[0_0_20px_rgba(80,40,200,0.25)]
            hover:bg-white/10 transition
        "
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-blue-300" size={32} />
          </div>
          <h3 className="text-center text-3xl font-bold">600 Hrs</h3>
          <p className="text-center text-gray-300 mt-1 text-sm">
            Dedicated Lectures
          </p>
        </div>

        <div
          className="
            bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 shadow-[0_0_20px_rgba(80,40,200,0.25)]
            hover:bg-white/10 transition
        "
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Users className="text-green-300" size={32} />
          </div>
          <h3 className="text-center text-3xl font-bold">10+ Yrs</h3>
          <p className="text-center text-gray-300 mt-1 text-sm">
            Experienced Faculty
          </p>
        </div>

        <div
          className="
            bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-3xl p-8 shadow-[0_0_20px_rgba(80,40,200,0.25)]
            hover:bg-white/10 transition
        "
        >
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="text-pink-300" size={32} />
          </div>
          <h3 className="text-center text-3xl font-bold">47</h3>
          <p className="text-center text-gray-300 mt-1 text-sm">
            IIM Admissions
          </p>
        </div>
      </div>
    </section>
  );
}
