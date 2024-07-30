import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Full Stack Developer"
            subTitle="Do Telematics (2024 - Present)"
            result="BRAZIL"
            des="Development of documented technological routines aligned with the LGPD, using Golang, NestJS, React, Git versioning system and Docker, in addition to improving automation and process performance, adding value and driving innovation within the company."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development Intern"
            subTitle="Do Telematics (2024)"
            result="BRAZIL"
            des="Prototyping, validation, and collaboration with the business area, focused on implementing agile methodologies and measured through performance KPIs, enabling the quick resolution of critical problems."
          />
          <ResumeCard
            title="IT Intern"
            subTitle="Usuy Gastric Clinic (2023)"
            result="BRAZIL"
            des="Developed advanced JavaScript macros to automate tasks in Google Sheets, significantly enhancing process efficiency, and utilized Looker Studio for data exploration, gaining valuable insights and facilitating strategic decision-making."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
