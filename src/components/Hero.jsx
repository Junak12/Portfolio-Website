import React from "react";
import profileImg from "../assets/logo_512.png";
import { FaGitAlt, FaFigma, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiPostman } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { MdCode, MdWorkspacePremium } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const tools = [
    { icon: <BiLogoVisualStudio />, name: "VS Code", color: "text-blue-500" },
    { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-400" },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-500" },
    { icon: <FaFigma />, name: "Figma", color: "text-pink-500" },
    { icon: <FaDatabase />, name: "MongoDB", color: "text-green-600" },
  ];

  return (
    <div className="px-4 sm:px-10 md:px-20" id="home">
      {/* Profile Image */}
      <div className="flex justify-center mt-10">
        <img
          src={profileImg}
          alt="Junak"
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover border-4 border-gray-300 dark:border-gray-600 shadow-md"
        />
      </div>

      {/* Hero Intro */}
      <div className="mt-4 text-center px-2 sm:px-6 md:px-0">
        <h1 className="text-black/80 dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold">
          Hi! I'm Junak
        </h1>
        <p className="mt-2 text-black/70 dark:text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] font-medium">
          Full Stack Developer | MERN Stack | Competitive Programmer
        </p>
        <div
          className="flex justify-center mt-6 cursor-pointer"
          onClick={() => handleScroll("contact")}
        >
          <button
            className="
              flex items-center gap-2
              bg-gray-700 dark:bg-[#0F172A]/70
              text-white/80 dark:text-gray-300
              px-4 sm:px-6 py-2 rounded-2xl
              shadow-[0_6px_20px_rgba(0,0,0,0.08)]
              dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
              hover:scale-105 hover:text-gray-100
              dark:hover:text-gray-400
              transition
            "
          >
            Connect with me
            <BsArrowRight className="w-4 h-4 mt-1" />
          </button>
        </div>
      </div>

      {/* About & Cards */}
      <div className="mt-14 flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black/80 dark:text-gray-300">
          About Me
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[16px] text-black/80 dark:text-gray-400 font-medium max-w-3xl">
          Final semester CSE student at Metropolitan University Sylhet. Full
          Stack Developer experienced in the MERN stack and competitive
          programming. Codeforces rating: 1283 | CodeChef: 3⭐. Passionate about
          building efficient web apps and solving algorithmic problems.
        </p>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full">
          {[
            {
              icon: <MdCode className="w-6 h-6 mx-auto text-blue-500" />,
              title: "Tech Skills",
              content: "React, Node.js, Express, MongoDB\nC++, Python, Java",
            },
            {
              icon: (
                <GiGraduateCap className="w-6 h-6 mx-auto text-green-500" />
              ),
              title: "Education",
              content: "B.Sc. in CSE",
            },
            {
              icon: (
                <MdWorkspacePremium className="w-6 h-6 mx-auto text-purple-500" />
              ),
              title: "Projects",
              content: "3+ MERN projects: E-commerce, Portfolio, Social App",
            },
            {
              icon: <MdCode className="w-6 h-6 mx-auto text-cyan-500" />,
              title: "Competitive Coding",
              content: "Codeforces: 1283\nCodeChef: 3⭐",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="
                flex-1 flex flex-col gap-2
                border-2 border-white dark:border-gray-700/50
                rounded-xl px-4 sm:px-6 py-4
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                dark:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                text-center hover:scale-105 transition
                min-w-[150px] sm:min-w-[180px] md:min-w-[200px]
              "
            >
              {card.icon}
              <p className="text-[16px] sm:text-[18px] font-semibold text-black/75 dark:text-gray-200">
                {card.title}
              </p>
              <p className="text-[12px] sm:text-[14px] md:text-[14px] font-medium text-black/55 dark:text-gray-300 whitespace-pre-line">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="flex flex-col gap-4 mt-8 w-full">
          <h1 className="text-xl font-bold sm:text-3xl md:text-3xl  text-black/80 dark:text-gray-300 text-center mb-4">
            Tools I Use
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-4 w-full">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="
                  flex flex-col items-center justify-center gap-2
                  border-2 border-white dark:border-gray-700/50
                  rounded-xl p-4 shadow hover:scale-105 transition
                "
              >
                <div className={`w-10 h-10 ${tool.color} text-[28px]`}>
                  {tool.icon}
                </div>
                <span className="text-black dark:text-gray-300 text-sm font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
