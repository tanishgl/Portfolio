import { useRef } from "react";
import styles from "./Project.module.css";

// eslint-disable-next-line react/prop-types
function Project({ logoPath, name, desc, link }) {
  const projectRef = useRef(null);
  const handleAnimation = () => {
    projectRef.current.classList.toggle(`${styles.animate}`);
  };

  return (
    <a className={`${styles["p-link"]}`} target="_blank" href={link}>
      <div
        onMouseEnter={handleAnimation}
        onMouseLeave={handleAnimation}
        className={`${styles["project"]}`}
      >
        <div className={`${styles["pic-box"]}`}>
          <img className={`${styles["p-pic"]}`} src={logoPath} />
        </div>
        <h2 className={`${styles["p-title"]}`}> {name} </h2>
        <div className={`${styles["slideframe"]}`}>
          <div ref={projectRef} className={`${styles["slider"]}`}>
            <p className={`${styles["p-desc"]}`}> {desc}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;
