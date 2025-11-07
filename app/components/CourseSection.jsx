export default function CourseSection() {
  return (
    <section className="w-full py-28 bg-[#070115] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-800/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-700/10 blur-[160px] rounded-full"></div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Popular Courses
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Banking Foundation",
            desc: "Complete IBPS, SBI & RBI prep with full syllabus coverage.",
          },
          {
            title: "SSC Complete Prep",
            desc: "CGL, CHSL & CPO targeted batches with mocks & doubts.",
          },
          {
            title: "CAT Quant Booster",
            desc: "Advanced Quant + DI/LR for high percentile improvement.",
          },
          {
            title: "CUET UG Full Course",
            desc: "Boards + CUET prep with trackable module system.",
          },
          {
            title: "State PSC Prep",
            desc: "General studies, aptitude & mock interviews.",
          },
          {
            title: "Reasoning Advanced Batch",
            desc: "High-level reasoning for Banking + SSC exams.",
          },
        ].map((course, index) => (
          <div
            key={index}
            className="
              bg-linear-to-br from-white/10 to-white/5 
              backdrop-blur-xl 
              border border-white/10 
              p-8 rounded-3xl 
              shadow-[0_0_25px_rgba(90,40,180,0.25)]
              hover:bg-white/15 transition 
              hover:shadow-[0_0_35px_rgba(90,40,200,0.4)]
            "
          >
            <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {course.desc}
            </p>

            <button
              className="
              mt-5 px-4 py-2 
              bg-linear-to-r from-orange-500 to-orange-600
              rounded-xl text-sm 
              shadow-[0_0_10px_rgba(255,120,40,0.6)]
              hover:shadow-[0_0_18px_rgba(255,120,40,0.9)]
              transition
            "
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
