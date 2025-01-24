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
    <div className="flex items-center gap-2 ml-[10px]">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="py-1 px-3 bg-[#FBFBFA] rounded-full shadow text-black text-xs hover:bg-gray-600 hover:text-white transition sm:text-sm"
      >
        {copied ? "Copied!" : "Email"}
      </button>

      {/* CV Button */}
      <button className="py-1 px-3 bg-[#FBFBFA] rounded-full shadow text-black text-xs hover:bg-gray-600 hover:text-white transition sm:text-sm">
        CV
      </button>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar sticky top-0 p-2 flex justify-between items-center backdrop-blur-lg bg-[rgba(197,197,197,0.75)] rounded-lg border border-[rgba(209,213,219,0.3)] z-10">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-between">
        <EmailCopy />
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black bg-gray-200 p-1 rounded hover:bg-gray-600 hover:text-white transition text-xs"
        >
          Menu
        </button>
      </div>

      {/* Right Section - Desktop Menu */}
      <div className={`hidden md:flex items-center`}>
        <ul className="menu menu-horizontal text-black text-xs space-x-2">
          <li className=" hover:text-white transition duration-200 rounded px-2 py-1">
            <a className="hover:bg-gray-600" href="#pro">Projects</a>
          </li>
          <li className=" hover:text-white transition duration-200 rounded px-2 py-1">
            <a className="hover:bg-gray-600" href="#about">About</a>
          </li>
          <li className=" hover:text-white transition duration-200 rounded px-2 py-1">
            <a className="hover:bg-gray-600" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-100 p-3 rounded shadow absolute top-12 right-4 w-40 z-20">
          <a
            href="#pro"
            className="hover:bg-gray-600 hover:text-white transition duration-200 rounded px-2 py-1 text-xs"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:bg-gray-600 hover:text-white transition duration-200 rounded px-2 py-1 text-xs"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:bg-gray-600 hover:text-white transition duration-200 rounded px-2 py-1 text-xs"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
