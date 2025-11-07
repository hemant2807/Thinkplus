export default function Faculty() {
  const faculty = [
    {
      name: "Rahul Verma",
      role: "Quant & DI Expert",
      exp: "12+ Years Experience",
      img: "https://i.pravatar.cc/150?img=31",
    },
    {
      name: "Shalini Gupta",
      role: "English & Verbal Mentor",
      exp: "10+ Years Experience",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Amit Sharma",
      role: "Logical Reasoning Specialist",
      exp: "8+ Years Experience",
      img: "https://i.pravatar.cc/150?img=33",
    },
    {
      name: "Neha Rathi",
      role: "General Awareness Expert",
      exp: "7+ Years Experience",
      img: "https://i.pravatar.cc/150?img=34",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#070115] text-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-purple-800/10 blur-[160px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-700/10 blur-[160px] rounded-full"></div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Meet Our Expert Faculty
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {faculty.map((f, i) => (
          <div
            key={i}
            className="
              p-8 rounded-3xl bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-[0_0_25px_rgba(90,40,180,0.25)] 
              hover:bg-white/10 hover:shadow-[0_0_35px_rgba(90,40,200,0.4)]
              transition text-center
            "
          >
            <img
              src={f.img}
              className="w-24 h-24 rounded-full mx-auto mb-5 border border-white/20 shadow-[0_0_15px_rgba(100,60,220,0.4)]"
            />
            <h3 className="text-xl font-semibold">{f.name}</h3>
            <p className="text-purple-300 text-sm mt-1">{f.role}</p>
            <p className="text-gray-300 text-xs mt-2">{f.exp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
