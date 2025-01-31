import React, { useState } from "react";
import project1 from "../assets/mcoffee.png"
import project2 from "../assets/burger.png";
import project3 from "../assets/logbook.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";

const projects = [
  {
    img: project1,
    title: "# Project 1",
    description: "Coffee Shop App, An intuitive app for ordering coffee, built with React and styled-components.",
    links: {
      site: "https://m-coffee.vercel.app/",
      github: "https://github.com/sm-junior0/M-coffee",
    },
  },
  {
    img: project2,
    title: "# Project 2",
    description: "Burger House, A modern and responsive restaurant website showcasing delicious burgers.",
    links: {
      site: "https://talle-burgers.vercel.app/",
      github: "#", 
    },
  },
  {
    img: project3,
    title: "# Project 3",
    description: "RCA Logbook, An activity logging system for students to track and organize their tasks.",
    links: {
      site: "#", 
      github: "https://github.com/sm-junior0/Activity-Logger",
    },
  },
  {
    img: project4,
    title: "# Project 4",
    description: "An e-commerce platform with various features.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project5,
    title: "# Project 5",
    description: "A mobile-friendly application using React Native.",
    links: {
      site: "#",
      github: "#",
    },
  },
  // {
  //   img: project6,
  //   title: "Pr",
  //   description: "A data visualization project using D3.js and other libraries.",
  //   links: {
  //     site: "#",
  //     github: "#",
  //   },
  // },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-8 gap-6 md:py-40"
      id="portfolio"
    >
      <div className="z-10 col-span-3 grid place-items-center grid-cols-1 relative">
        <p className="text-gray-800 dark:text-gray-300 font-bold text-4xl -skew-y-6 "> {/* Changed text color for better visibility */}
          Select Project
        </p>
        <img src={arrow} className="absolute w-[50px] top-10 right-12" />

        <ul
          className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1
   space-y-2 md:space-y-4 text-2xl"
        >
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-800 dark:text-gray-300 rounded-lg px-2 hover:bg-slate-50
         transition duration-300 ${
           currentProject === index ? "active-project" : ""
         }`} // Changed text color for better visibility
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 glass w-full border-2 col-span-5 bg-white dark:text-gray-300"> {/* Added background color for better visibility */}
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <div className="p-6">
          <p className="text-gray-800 my-4 dark:text-gray-300"> {/* Changed text color for better visibility */}
            {projects[currentProject].description}
          </p>
          <div className="flex space-x-4">
            <a
              href={projects[currentProject].links.site}
              className="px-4 py-2 bg-slate-300
                   text-gray-800 rounded-lg hover:bg-slate-400 transition duration-300" // Changed background color for better visibility
            >
              View Site
            </a>
            <a
              href={projects[currentProject].links.github}
              className="px-4 py-2 bg-gray-800
                   text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;