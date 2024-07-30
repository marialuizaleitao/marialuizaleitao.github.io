import React from "react";
import { FaBusinessTime, FaCode, FaDatabase } from "react-icons/fa";
import { SiDocker, SiPowerbi, SiProgress } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Backend Development"
          des="Building robust backend systems using Java Spring, Golang, and Nest.js. Ensuring high performance, scalability, and secure data handling in web applications."
          icon={<FaCode />}
        />
        <Card
          title="Frontend Development"
          des="Crafting intuitive and responsive user interfaces with React, Angular, TailwindCSS, and Bootstrap. Delivering seamless user experiences across various devices and platforms."
          icon={<SiProgress />}
        />
        <Card
          title="DevOps"
          des="Skilled in using Git for version control and managing collaborative development workflows. Experienced in implementing DevOps practices with Docker and CI/CD pipelines to streamline deployment processes and using Linux environments."
          icon={<SiDocker />}
        />
        <Card
          title="Database Management"
          des="Expert in designing, implementing, and managing robust database systems using SQL, MySQL, PostgreSQL, SQL Server, and MongoDB to optimize data storage and retrieval."
          icon={<FaDatabase />}
        />
        <Card
          title="Data Analysis"
          des="Transforming raw data into meaningful insights using advanced analytical techniques. Skilled in creating interactive dashboards with Power BI to support data-driven decision-making."
          icon={<SiPowerbi />}
        />
        <Card
          title="Business Strategy"
          des="Leveraging comprehensive market insights and strategic planning to drive business growth and innovation, ensuring sustainable competitive advantage."
          icon={<FaBusinessTime />}
        />
      </div>
    </section>
  );
};

export default Features;
