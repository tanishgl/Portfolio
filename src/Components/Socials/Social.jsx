import styles from "./Social.module.css";
import Unit from "./Unit";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

function Social() {
  const footerRef = useRef(null);

  return (
    <footer ref={footerRef} className={`${styles.social}`}>
      <div className={`${styles.socialboard}`}>
        <Unit
          path={"https://leetcode.com/u/Tanish29/"}
          logoPath={<SiLeetcode size={42} color={"orange"} />}
        ></Unit>
        <Unit
          path={"mailto:tanishgoyal16@gmail.com"}
          logoPath={<CgMail size={42} color={"orange"} />}
        ></Unit>
        <Unit
          path={"https://www.linkedin.com/in/tanish-goyal-922b18193/"}
          logoPath={<FaLinkedin size={42} color={"orange"} />}
        ></Unit>
        <Unit
          path={"https://github.com/tanishgl"}
          logoPath={<FaGithub size={42} color={"orange"} />}
        ></Unit>
      </div>
    </footer>
  );
}

export default Social;
