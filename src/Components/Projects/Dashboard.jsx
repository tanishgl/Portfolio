import { useState } from "react";
import projectData from "./../../Data/projectData.json";
import Project from "./project";
import styles from "./Dashboard.module.css";

function Dashboard() {
  useState(() => {
    console.log(projectData);
  }, []);

  return (
    <div className={`${styles["s-pro"]}`}>
      <h2 className={`${styles["title"]}`}> Applications </h2>
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
    </div>
  );
}

export default Dashboard;
