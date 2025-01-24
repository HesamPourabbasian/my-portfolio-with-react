import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // Store image URLs and corresponding tooltips in an array
  const skills = [
    { src: "/HTML5_logo_and_wordmark.svg", name: "HTML5" },
    { src: "/CSS3_logo.svg", name: "CSS3" },
    { src: "/Unofficial_JavaScript_logo_2.svg", name: "JavaScript" },
    { src: "/Tailwind_CSS_Logo.svg", name: "Tailwind CSS" },
    { src: "/react.svg", name: "React" },
    { src: "/Git-Icon-Black.svg", name: "Git" },
  ];

  useEffect(() => {
    // Add GSAP ScrollTrigger animations for each skill item
    skills.forEach((_, index) => {
      gsap.fromTo(
        `.skill-${index}`,
        { opacity: 0, y: 10 }, // Starting properties
        {
          opacity: 1,
          y: 0,
          duration: 2, // animation duration
          scrollTrigger: {
            trigger: `.skill-${index}`,
            start: "top 90%", // When the skill item enters 80% of the viewport
            end: "bottom 20%", // End when 20% of the item is visible
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="head p-4 pb-12">
      <h2 className="text-center pb-[10px] text-black text-[40px] sm:text-[30px] xs:text-[20px]">
        Skills
      </h2>
      <div className="overflow-hidden p-4 pb-12 pt-12">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-4 xs:gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 group skill-${index} w-24 h-24 sm:w-20 sm:h-20 xs:w-16 xs:h-16`}
            >
              <img
                src={skill.src}
                alt={skill.name}
                className=" mobile:w-full mobile:h-full w-[80px] h-[80px] rounded-lg shadow-lg p-[10px] object-contain transition duration-300 border-black border-[2px] ease-in-out hover:bg-gray-500 hover:-translate-y-1"
              />
              {/* Tooltip */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 bg-[#D6D5D1] text-black text-xs sm:text-[10px] xs:text-[8px] rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-100 mobile:hidden">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
