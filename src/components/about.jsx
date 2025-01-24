import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// You can define some data to iterate over for multiple sections
const aboutData = [
  {
    title: "Hesam's Skills",
    description:
      "I am a dedicated front-end developer with over a year of hands-on experience, primarily focused on learning and university projects. Currently pursuing a degree in Computer Science in Tabriz, Iran, I have developed a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS, which I utilize to create responsive and user-friendly web applications. My passion for the computer world drives me to explore and experiment with new technologies, constantly improving my skills. I enjoy working in team environments, collaborating to solve challenges, and delivering meaningful results. While I have not yet had professional experience, I am eager to apply my knowledge and seek opportunities to grow further in web programming.",
    imgSrc: "/7118755_3411110.svg",
  },
  // Add more objects as needed for additional sections
];

const About = () => {
  useEffect(() => {
    aboutData.forEach((_, index) => {
      gsap.fromTo(
        `.about-${index}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: `.about-${index}`,
            start: "top 100%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="about text-center text-black text-[40px] p-[50px]">
      <h2
        id="about"
        className="text-center pb-[10px] text-black text-[40px] sm:text-[30px] xs:text-[20px]"
      >
        About me
      </h2>
      {aboutData.map((about, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-2 p-4 about-${index}`}
        >
          {/* First Div */}
          <div className="first-div flex-1  text-white text-center rounded-lg">
            <p className="text-[17px] text-left text-gray-900  mobile:text-center mobile:w-[100%] mobile:text-[15px]">
              {about.description}
            </p>
          </div>

          {/* Second Div */}
          <div className="second-div mobile:h-[900px] flex-1 text-white rounded-lg flex justify-center items-center">
            <img
              className="w-[400px] mobile:[100px]"
              src={about.imgSrc}
              alt="About Illustration"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
