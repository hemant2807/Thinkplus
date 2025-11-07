"use client";

import { useState } from "react";

export default function Reviews() {
  const allReviews = [
    {
      name: "Aarav Mehta",
      role: "CAT Aspirant",
      text: `ThinkPlus completely changed the way I prepared. Their structured classes, regular mock tests, 
      and doubt-solving sessions helped me increase my score significantly. The neon-themed platform keeps me motivated 
      and the analytics dashboard gives real insights into my weak areas. Highly recommended for serious aspirants.`,
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Riya Sharma",
      role: "SSC CGL Aspirant",
      text: `The flow of classes and test series is extremely well designed. I was able to track my daily progress, 
      solve doubts instantly and stay consistent. The faculty explains concepts in the simplest way possible, 
      making even tough topics easy to grasp. A premium learning experience!`,
      img: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Kabir Singh",
      role: "Banking Aspirant",
      text: `ThinkPlus mock tests match real exam difficulty. I gained confidence after understanding 
      the exact pattern and type of questions to expect. The reasoning shortcuts are gold, 
      and live mentoring sessions help a lot. Worth every minute spent here.`,
      img: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Sana Patel",
      role: "CUET Candidate",
      text: `I loved how organized the entire course is. Recorded lectures helped me revise anytime. 
      The study materials are crisp, to-the-point and exam oriented. The interface feels modern 
      and motivates you to study more. One of the best CUET platforms out there.`,
      img: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Vikram Rao",
      role: "Working Professional",
      text: `Balancing studies with work seemed impossible until I joined ThinkPlus. 
      Flexible classes and structured modules made my preparation smooth. 
      Their analytics showed my strengths clearly and helped plan a focused strategy.`,
      img: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Jiya Khurana",
      role: "SSC CHSL Aspirant",
      text: `The concepts are explained step-by-step, and the daily practice sets are extremely helpful. 
      I improved my accuracy and speed in just a month. The faculty is very supportive 
      and always available for doubt clarification.`,
      img: "https://i.pravatar.cc/150?img=16",
    },

    {
      name: "Manish Verma",
      role: "RBI Assistant Aspirant",
      text: `Their quant shortcuts and reasoning strategy sessions are extremely powerful. 
      The entire learning experience feels premium and motivating.`,
      img: "https://i.pravatar.cc/150?img=17",
    },
    {
      name: "Priya Nair",
      role: "CAT Aspirant",
      text: `The LRDI approach taught here is unique and helped me cut down solving time drastically. 
      The interface + content = unbeatable combo.`,
      img: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Aditya Raj",
      role: "SSC MTS Aspirant",
      text: `Amazing platform. The notes, quizzes and live doubt-solving are extremely helpful 
      for beginners who feel lost.`,
      img: "https://i.pravatar.cc/150?img=19",
    },
    {
      name: "Harsh Gupta",
      role: "IBPS PO Aspirant",
      text: `The mocks and analysis helped me identify small mistakes I repeatedly made. 
      The improvements were quick and measurable.`,
      img: "https://i.pravatar.cc/150?img=20",
    },
    {
      name: "Sneha Rathi",
      role: "CUET Candidate",
      text: `Their recorded and live classes combo makes preparation flexible and effective. 
      The teachers explain concepts beautifully.`,
      img: "https://i.pravatar.cc/150?img=21",
    },
    {
      name: "Rahul Das",
      role: "Banking Aspirant",
      text: `Best banking prep platform I’ve used. The interface, tests, and doubt sessions 
      create an amazing learning environment.`,
      img: "https://i.pravatar.cc/150?img=22",
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allReviews : allReviews.slice(0, 6);

  return (
    <section className="w-full py-20 bg-[#070115] text-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-purple-800/10 blur-[160px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-blue-700/10 blur-[160px] rounded-full"></div>

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Student Reviews
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visible.map((item, idx) => (
          <div
            key={idx}
            className="
              p-8 rounded-3xl bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-[0_0_25px_rgba(90,40,180,0.25)] 
              hover:bg-white/10 hover:shadow-[0_0_35px_rgba(90,40,200,0.4)]
              transition
            "
          >
            <img
              src={item.img}
              className="w-16 h-16 rounded-full mx-auto mb-4 border border-white/20"
            />

            <h3 className="text-lg font-semibold text-center">{item.name}</h3>
            <p className="text-purple-300 text-sm text-center mb-4">
              {item.role}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed text-center">
              "{item.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setExpanded(!expanded)}
          className="
            px-8 py-3 rounded-xl 
            bg-linear-to-r from-orange-500 to-orange-600
            text-white font-semibold
            shadow-[0_0_15px_rgba(255,120,40,0.7)]
            hover:shadow-[0_0_25px_rgba(255,120,40,0.9)]
            transition
          "
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
