import { useEffect, useRef } from "react";
import styles from "./SkillTake.module.css";

// eslint-disable-next-line react/prop-types
function SkillTake({ skillName, level }) {
  const skillRef = useRef(null);
  const red = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          red.current.style.setProperty("--level-w", `${level * 10}%`);
          entry.target.classList.add(`${styles.animate}`);
        }
      });
    });

    if (red.current) {
      observer.observe(red.current);
    }
  }, []);

  return (
    <div ref={skillRef} className={`${styles.skillrow}`}>
      <h2 className={`${styles.skillname}`}>{skillName}</h2>
      <div className={`${styles.skillcol}`}>
        <div ref={red} className={`${styles.skilltake}`}></div>
      </div>
    </div>
  );
}

export default SkillTake;
