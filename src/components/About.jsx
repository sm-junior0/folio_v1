import React from 'react';
import project1 from '../assets/project1.png';
import project3 from '../assets/project7.png';
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap
} from 'react-icons/di';

const About = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 grid grid-cols-2 gap-8 place-items-center md:py-52 transition-colors duration-300' id="about">
        <div className='p-6'>
            <h2 className='text-gray-900 dark:text-gray-200 text-3xl font-bold mb-4 transition-colors duration-300'>Skills</h2>
            <p className='text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300'>
                I am a passionate software development student at Rwanda Coding Academy
                with over 1 year of experience in web front-end development. I specialize
                in building visually appealing and responsive websites using modern
                technologies.
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className="text-orange-600" />
                <DiCss3 className="text-blue-600" />
                <DiSass className="text-pink-600" />
                <DiBootstrap className="text-purple-600" />
                <DiJavascript1 className="text-yellow-500" />
                <DiReact className="text-blue-500" />
                <DiNodejsSmall className="text-green-500" />
            </div>
        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-100 to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white dark:bg-gray-800 bg-opacity-10 backdrop-blur-lg rounded-lg transition-colors duration-300'>
                <img src={project1} alt="Frontend Project" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-900 dark:text-gray-200 text-3xl font-bold mb-4 transition-colors duration-300'>Frontend Experience</h2>
            <p className='text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300'>
                I have hands-on experience in creating responsive and user-friendly web
                applications using tools and technologies such as React, JavaScript, HTML5,
                CSS3, and Bootstrap. My focus is on writing clean, maintainable code while
                ensuring great user experiences.
            </p>
        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-100 to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative w-full p-4 bg-white dark:bg-gray-800 bg-opacity-10 backdrop-blur-lg rounded-lg transition-colors duration-300'>
                <img src={project3} alt="React Project" className='rounded-lg md:max-w-[500px]' />
            </div>
        </div>
    </div>
  );
};

export default About;
