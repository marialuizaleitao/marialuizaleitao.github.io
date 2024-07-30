import React from "react";
import {
  projectFive,
  projectFour,
  projectOne,
  projectSix,
  projectThree,
  projectTwo,
} from "../../assets/index";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="LOAD BALANCER"
          des="A simple load balancer implemented in Go using a round-robin algorithm to distribute traffic efficiently across multiple servers."
          src={projectTwo}
          githubLink="https://github.com/marialuizaleitao/go-load-balancer"
        />
        <ProjectsCard
          title="TO-DO APPLICATION"
          des="A complete task management application developed with Spring Boot 2 and Angular 11."
          src={projectOne}
          githubLink="https://github.com/marialuizaleitao/todo-application"
        />
        <ProjectsCard
          title="CODEDOCS TEXT EDITOR"
          des="Real-time collaborative text editor implementing WebSocket communication for document synchronization."
          src={projectFour}
          githubLink="https://github.com/marialuizaleitao/codedocs-websocket"
        />
        <ProjectsCard
          title="WEBSERVICE API"
          des="A robust CRUD application with H2 database integration with effective domain modeling and layered architecture while emphasizing seamless deployment options, including Heroku integration and PostgreSQL support."
          src={projectThree}
          githubLink="https://github.com/marialuizaleitao/webservice-springboot3-jpa"
        />
        <ProjectsCard
          title="SALES ANALYSIS"
          des="This project explored data collection and preprocessing, advanced application of SQL queries, and feature engineering. Key calculations, such as COGS and VAT, were performed to assess the profitability and financial efficiency of the branches."
          src={projectFive}
          githubLink="https://github.com/marialuizaleitao/WalmartSalesAnalysis"
        />
        <ProjectsCard
          title="CATAGORICAL ENCODING"
          des="A Data Science project in SQL applying advanced techniques such as Categorization, Label Encoding, One-Hot Encoding, and Data Binarization for the analysis of a breast cancer database."
          src={projectSix}
          githubLink="https://github.com/marialuizaleitao/CategoricalEncodingSQL"
        />
      </div>
    </section>
  );
};

export default Projects;
