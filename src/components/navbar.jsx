import React, { useState } from "react";

const EmailCopy = () => {
  const email = "hesampourabbasian6@gmail.com"; // Email to be copied
  const [copied, setCopied] = useState(false); // State for copy feedback

  // Function to copy email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied after 2 seconds
  };

  return (
    <div className="flex items-center rounded-[50px]">
      {/* Email Text */}
      <span className="text-gray-700 ml-[10px] mr-[5px] text-[12px]"></span>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="py-[5px]  bg-[#FBFBFA] rounded-[50px] shadow-sm text-black hover:bg-gray-600 transition text-[10px] w-[50px] mr-[8px] sm:w-[60px]"
      >
        {copied ? "Copied!" : "@Email"}
      </button>

      {/* CV Button */}
      <button className=" py-[5px] bg-[#FBFBFA] rounded-[50px] shadow-sm text-black hover:bg-gray-600 transition text-[10px] w-[40px] sm:w-[60px]">
        CV
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 p-[5px] flex justify-between backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(197,197,197,0.75)] rounded-[12px] border border-[rgba(209,213,219,0.3)] z-10">
      {/* Left Section */}
      <div className="flex-1 moblie:flex mobile:items-center mobile:justify-center">
        <EmailCopy />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex">
        {/* Menu items visible on larger screens */}
        <ul className="menu menu-horizontal text-black text-[13px] transition duration-200">
          <li className=" hover:bg-gray-600 transition duration-200 rounded-[50px]">
            <a href="#pro">Projects</a>
          </li>

          <li className="  hover:bg-gray-600 transition duration-200 rounded-[50px]">
            <a href="#about">About</a>
          </li>
          <li className="  hover:bg-gray-600 transition duration-200 rounded-[50px]">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
