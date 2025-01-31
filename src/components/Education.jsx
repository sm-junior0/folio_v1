import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const educationData = [
  {
    title: "Primary Education",
    institution: "IRERERO ACADEMY",
    year: "2014 - 2019",
    description: "Completed primary education with a focus on foundational skills.",
  },
  {
    title: "Ordinary Level",
    institution: "GSO Butare",
    year: "2020 - 2023",
    description: "Studied various subjects, excelling in sciences and mathematics.",
  },
  {
    title: "Advanced Level",
    institution: "Rwanda Coding Academy",
    year: "2023 - 2026",
    description: "Valedictorian, specialized in software development and embedded systems.",
  },
];

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + educationData.length) % educationData.length
    );
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Educational Journey</h2>
      <p className="education-description">
        My educational path has been a journey of continuous learning and growth,
        shaping my skills and passion for technology.
      </p>

      <div className="education-card">
        <h3 className="education-card-title">{educationData[currentIndex].title}</h3>
        <h4 className="education-card-institution">{educationData[currentIndex].institution}</h4>
        <p className="education-card-year">{educationData[currentIndex].year}</p>
        <p className="education-card-description">{educationData[currentIndex].description}</p>
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-button">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="carousel-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Education;
