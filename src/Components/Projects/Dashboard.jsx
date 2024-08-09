import { useState } from "react";
import projectData from "./../../Data/projectData.json";
import Project from "./project";
import styles from "./Dashboard.module.css";

function Dashboard() {
  useState(() => {
    console.log(projectData);
  }, []);

  return (
    <div className={`${styles["dashboard"]}`}>
      {projectData.map((project, idx) => {
        return (
          <Project
            logoPath={project.logoPath}
            name={project.name}
            desc={project.desc}
            link={project.link}
            key={idx}
          ></Project>
        );
      })}
    </div>
  );
}

export default Dashboard;
