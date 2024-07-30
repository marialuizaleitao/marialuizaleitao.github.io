import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const Contact = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col items-center gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 items-center text-center">
        <h3 className="text-3xl font-bold text-white">Maria Leitão</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Transforming complex challenges into innovative solutions with
          expertise in full stack development and data analysis.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+55 (48) 99682-9080</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">malufln.99@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://linkedin.com" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
