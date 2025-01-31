import React from "react";
import profilepic from "../assets/ppic.png";
import profile from "../assets/pprofile.png"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiPython,
  DiJava,
  DiPhp,
  DiMysql,
  DiGit,
} from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40"
      id="home"
    >
      {/* Profile Section */}
      <div className="grid grid-cols-2 md:col-span-5 glass p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <div className="my-auto">
          <img
            className="w-[800px] mx-auto h-auto hover:scale-105 transition-all duration-300"
            src={profile}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8">
          <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-300">
            Hi! I am <br /> Manene Junior <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Mobile Dev",
                1000,
                "Backend Dev",
                1000,
                "CyberSec Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-300">
            with 1+ years of experience
          </p>

          {/* Download Button */}
          <a
            href="/SHEJA_MANENE_Junior_Resume.pdf" // Correct path for files in the public folder
            title="Download CV"
            className="mt-4 px-6 py-3 inline-block text-lg font-bold text-white bg-primary-color rounded-xl 
               cursor-pointer hover:bg-primary-color/80 hover:scale-110 transition-all duration-300 
               hover:shadow-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="grid grid-cols-1 md:col-span-3 gap-6">
        {/* Tech Stack Section */}
        <div className="text-5xl p-12 glass hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <p className="text-gray-800 dark:text-gray-300 text-xl font-bold mb-4 text-center hover:text-primary-color transition-colors duration-300">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiCss3 className="text-blue-600 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiSass className="text-pink-600 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiBootstrap className="text-purple-600 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiJavascript1 className="text-yellow-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiReact className="text-blue-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiNodejsSmall className="text-green-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiPython className="text-green-500 cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiJava className="text-red-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiPhp className="text-purple-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiMysql className="text-blue-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <DiGit className="text-orange-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <RiNextjsFill className="text-gray-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
            <RiTailwindCssFill className="text-gray-500 tech-icon cursor-pointer hover:-translate-y-2 hover:scale-125 transition-all duration-300" />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center items-center flex-col glass hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <div className="text-5xl flex justify-start gap-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 cursor-pointer hover:-translate-y-2 hover:scale-110 hover:text-blue-500 transition-all duration-300"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/sm-junior0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 cursor-pointer hover:-translate-y-2 hover:scale-110 hover:text-gray-800 transition-all duration-300"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/sm_juni01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 cursor-pointer hover:-translate-y-2 hover:scale-110 hover:text-pink-500 transition-all duration-300"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        {/* Shiny Effect */}
        <div className=""> {/*absolute inset-0 overflow-hidden md:overflow-visible*/}
          <div className="">
            <ShinyEffect left={550} top={100} size={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
