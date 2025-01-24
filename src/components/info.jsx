import React, { useEffect } from "react";
import { gsap } from "gsap";

const Info = () => {
  useEffect(() => {
    // GSAP animation on page load
    gsap.fromTo(
      ".info-container",
      { opacity: 0, y: 50 }, // Initial state (invisible, moved down)
      {
        opacity: 1,
        y: 0,
        duration: 3.9, // Animation duration
        ease: "power3.out", // Easing function for smooth animation
      }
    );
  }, []);

  return (
    <div className="info-container avatar grid place-items-center pt-[90px] pb-[190px] mobile:pb-[350px]">
      <div className="mobile:w-[40%] w-[10%] rounded-full border-white border-[6px]">
        <img src="/IMG_6084.JPG" alt="Hesam" />
      </div>
      <h2 className="text-black pt-[10px] font-bold text-[40px] text-center mobile:text-[40px]">
        Hello! I'm Hesam, <br />a front-end developer
      </h2>
      <div className="frst-btn">
        <a
          href="#contact"
        >
          <button className="text-[#D6D5D1] mt-[20px] bg-black p-[10px] rounded-[50px] hover:bg-slate-600 transition duration-200 mobile:text-[20px] px-[15px]">
            Hire me!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
