import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SmoothDetails({ summary, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300">
      {/* Summary */}
      {!isOpen && summary && (
        <div
          onClick={toggleDetails}
          className="cursor-pointer text-black flex justify-between items-center transition duration-300"
        >
          <span>{summary}</span>
          <span className="text-blue-600">
            {isOpen ? "read less..." : "read more..."}
          </span>
        </div>
      )}

      {/* Description */}
      <div
        className={`text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pt-2" : "max-h-0"
        }`}
      >
        {description}
      </div>
    </div>
  );
}

const Projects = () => {
  const projects = [
    {
      img: "/port.jpg",
      title: "Portfolio",
      description:
        "The portfolio project is a visually stunning and interactive website built with React.js, showcasing creativity and technical expertise. It incorporates GSAP (GreenSock Animation Platform) to deliver smooth, engaging animations, enhancing the user experience with dynamic transitions and effects. The design is crafted using Tailwind CSS alongside the DaisyUI component library, ensuring a modern, responsive, and user-friendly interface. The portfolio highlights personal and professional achievements, with sections for skills, projects, testimonials, and contact details. Its polished design and seamless interactivity make it a compelling platform to present one’s work and leave a lasting impression on visitors.",
      summary:
        "The portfolio project is a visually stunning and interactive website built with React.js",
      link: "",
    },
    {
      img: "/txxxx.jpg",
      title: "Football Quiz",
      description:
        "This Soccer Player Guessing Quiz is a fun and interactive web application designed to test users' knowledge of famous soccer players. Built using React for the frontend, the app allows users to guess the names of soccer players based on their images and hints. The project utilizes Tailwind CSS to provide a modern and responsive user interface, with a clean design that ensures a smooth and enjoyable user experience. The app's functionality includes dynamically shuffling player data, handling user input, and displaying results at the end of the quiz. To manage player data, a JSON file is used to store information about each player, which is fetched and displayed randomly. The app also features a welcoming modal, and users can choose the number of players they want to guess, ranging from 5 to 50. With real-time feedback and a scoring system, this quiz offers an engaging and educational experience for soccer fans.",
      summary:
        "This Soccer Player Guessing Quiz is a fun and interactive web application designed to...",
      link: "https://football-quiz-livid.vercel.app/",
    },

    {
      img: "/news.jpg",
      title: "News Website",
      description:
        "The project is a sleek and responsive news website developed using React.js, designed to keep users updated with the latest headlines. It utilizes Tailwind CSS for its visually appealing and mobile-friendly design. The website integrates the News API to fetch real-time articles, categorizing them into specific sections like Politics, Technology, and Science. This allows users to effortlessly navigate and explore news based on their interests. With efficient API handling and a focus on performance, the platform provides a seamless browsing experience, delivering up-to-date and reliable information in a well-organized format.",
      summary:
        "The project is a sleek and responsive news website developed using React.js",
      link: "https://news-api-xi-six.vercel.app/",
    },
    {
      img: "/xxxx.jpg",
      title: "E-commerce",
      description:
        "This is a full-featured e-commerce web application built with React, Tailwind CSS, and DaisyUI, offering a modern and responsive design. The application enables users to browse products, add them to a shopping cart, view their cart contents, and manage their shopping experience smoothly.",
      summary:
        "This is a full-featured e-commerce web application built with React",
      link: "https://e-commerce-jade-ten-27.vercel.app/",
    },
    {
      img: "/record.jpg",
      title: "Project manager",
      description:
        "This project is a student information management system built using React. The main goal of this project is to allow users to easily input, search, edit, or delete student records. In this system, users can add new student information, ensuring that each student ID is unique. This feature prevents duplicate records from being entered. Additionally, the system enables users to search records based on name or student ID.Moreover, it offers the ability to sort records by various criteria, such as student ID, name, or GPA. If needed, users can edit student information or delete records that are no longer required. The system can also calculate and display the average GPA of students.This project is designed to simplify the management and access of student information in educational environments, providing a straightforward user interface for interacting with the data.This project is built using React.js, styled with Tailwind CSS and the DaisyUI component library, which together ensure a modern, responsive, and visually appealing user interface, enhancing the overall user experience.",
      summary:
        "This project is a student information management system built using React...",
      link: "https://uni-project-theta.vercel.app/",
    },
  ];

  useEffect(() => {
    projects.forEach((_, index) => {
      gsap.fromTo(
        `.project-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: `.project-${index}`,
            start: "top 100%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, [projects]);

  return (
    <div className="container mx-auto p-[20px]">
      <h1
        id="pro"
        className="text-center text-black mobile:text-[20px] pb-[20px] text-[40px]"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-${index} flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center gap-4`}
          >
            {/* Div 1: Image */}
            {project.img && (
              <div className="w-full sm:w-1/2">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-auto rounded-[10px] filter grayscale hover:filter-none"
                />
              </div>
            )}

            {/* Div 2: Title and Description */}
            {project.title && (
              <div className="w-full sm:w-1/2 p-4 text-center sm:text-left">
                <h2 className="text-lg font-bold text-black">
                  {project.title}
                </h2>
                <SmoothDetails
                  summary={project.summary}
                  description={project.description}
                />
                <a
                  target="blank"
                  href={project.link}
                  className="inline-block px-4 py-2 mt-[10px] border-black text-black border-[2px] rounded hover:bg-gray-600 transition"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
