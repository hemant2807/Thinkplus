export default function Stars() {
  const stars = Array.from({ length: 60 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/40 rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.8 + 0.2,
          }}
        ></div>
      ))}
    </div>
  );
}
