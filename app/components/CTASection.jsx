export default function CTASection() {
  return (
    <section className="w-full py-20 bg-[#070115]text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-700/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-700/20 blur-[180px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Start Your Competitive Exam Journey Today
        </h2>

        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Join thousands of students learning smarter with live classes,
          structured batches, expert faculty and full mock tests designed to
          boost your performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <button
            className="
              px-10 py-4 text-lg font-semibold rounded-xl
              bg-linear-to-r from-orange-500 to-orange-600
              shadow-[0_0_20px_rgba(255,120,40,0.8)]
              hover:shadow-[0_0_30px_rgba(255,120,40,1)]
              transition
            "
          >
            Start Learning
          </button>

          <button
            className="
              px-10 py-4 text-lg font-semibold rounded-xl 
              border border-white/20 backdrop-blur-xl
              hover:bg-white/10 transition
            "
          >
            Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
