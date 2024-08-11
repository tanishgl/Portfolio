import styles from "./SkillTable.module.css";
import SkillData from "./../../Data/SkillData.json";
import SkillTake from "./SkillTake";

function SkillTable() {
  return (
    <div className={`${styles.skillboard}`}>
      <h1> Skill Division </h1>
      <div className={`${styles.skilltable}`}>
        {SkillData.map((skill, idx) => {
          return (
            <SkillTake
              key={idx}
              skillName={skill.skill}
              level={skill.level}
            ></SkillTake>
          );
        })}
      </div>
    </div>
  );
}

export default SkillTable;
