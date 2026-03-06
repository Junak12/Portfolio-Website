// src/components/Hobbies.jsx
import React from "react";
import {
  FaChess,
  FaLaptopCode,
  FaBrain,
  FaBook,
  FaFutbol,
} from "react-icons/fa";

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaLaptopCode />,
      title: "Algorithm Practice",
      description:
        "Solving coding challenges on Codeforces, LeetCode & CodeChef",
      color: "text-blue-500",
    },
    {
      icon: <FaChess />,
      title: "Chess",
      description:
        "Playing chess to improve strategy and problem-solving skills",
      color: "text-purple-500",
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description: "Participating in programming contests and hackathons",
      color: "text-green-500",
    },
    {
      icon: <FaBook />,
      title: "Tech Reading",
      description: "Reading tech blogs and tutorials to learn new technologies",
      color: "text-yellow-500",
    },
    {
      icon: <FaFutbol />,
      title: "Football",
      description: "Playing football to enhance teamwork and discipline",
      color: "text-red-500",
    },
  ];

  return (
    <div className="px-4 md:px-20 mt-16" id="hobbies">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/80 dark:text-gray-300 text-center mb-8">
        Hobbies & Interests
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {hobbies.map((hobby, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center justify-center gap-3
              border-2 border-white dark:border-gray-700/50
              rounded-xl p-4 sm:p-6 shadow hover:scale-105 transition
              bg-gradient-to-br from-[#FFF7E8] via-[#F6E6FF] to-[#E6ECFF]
              dark:from-[#0B0E14] dark:via-[#111827] dark:to-[#1F2933]
              w-full sm:w-56 md:w-60 lg:w-64
              h-64
              text-center
            "
          >
            <div
              className={`text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] ${hobby.color}`}
            >
              {hobby.icon}
            </div>
            <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] font-semibold text-black/75 dark:text-gray-200">
              {hobby.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] text-black/60 dark:text-gray-300 font-medium whitespace-pre-line">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
