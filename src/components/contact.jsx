import React from "react";

const links = [
  {
    name: "Telegram",
    href: "https://t.me/hesamgrant",
    icon: "/telegram-svgrepo-com.svg",
  },
  {
    name: "Gmail",
    href: "mailto:hesampourabbasian6@gmail.com",
    icon: "/gmail-svgrepo-com.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/webcode_hesam?igsh=MTVrdnpncXo3a3JtcA==",
    icon: "/instagram-svgrepo-com.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hesam-pourabbasian-0496002b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "/linkedin-161-svgrepo-com.svg",
  },
  {
    name: "Github",
    href: "https://github.com/HesamPourabbasian",
    icon: "/github-142-svgrepo-com.svg",
  },
  {
    name: "My CV",
    href: "#",
    icon: "/resume-7.svg",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Div */}
        <div className="p-4 text-black rounded-lg shadow-md">
          <h2 className="text-lg mobile:text-[20px] text-center">Contact me</h2>
          <p className="text-gray-600 mobile:text-center mobile:w-[100%] mobile:text-[15px]">
            You can connect with me on Telegram for quick and direct
            communication or explore my projects and contributions on GitHub.
            For professional inquiries, feel free to send an email, and if you
            prefer social platforms, you can follow me on Instagram for updates
            and behind-the-scenes content or connect with me on LinkedIn to
            network and discuss opportunities. No matter your preferred
            platform, I look forward to hearing from you!
          </p>
        </div>

        {/* Second Div */}
        <div className="p-4 text-white rounded-lg shadow-md">
          <section
            className="social flex flex-col items-center justify-center bg-cover bg-center pt-4 px-4 bg-[url('/images/dark_blue_galaxy_hd_dark_blue.jpg')] p-[50px]"
            style={{
              fontFamily: "sans-serif",
              margin: "auto",
              maxWidth: "1450px",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 w-full mobile:w-[70%]">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="responsive-div flex items-center justify-between w-4/5 max-w-md p-5 text-sm md:text-base backdrop-blur-[0px] backdrop-saturate-[200%] bg-white/58 border border-black rounded-lg text-black hover:scale-105 transition-transform mx-auto ease-in-out hover:bg-gray-500"
                >
                  <span className="hover:text-orange-400">{link.name}</span>
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-[30px] h-[30px] contrast-125"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
