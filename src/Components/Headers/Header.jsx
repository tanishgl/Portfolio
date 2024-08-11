import { useRef } from "react";
import styles from "./header.module.css";
import { useEffect } from "react";

const title = "Hi, My name is Tanish Goyal! 😺";

function Header() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < title.length; i++) {
      setTimeout(() => {
        titleRef.current.innerHTML = titleRef.current.innerHTML + title[i];
      }, i * 100);
    }
  }, []);

  return (
    <header className={`${styles.header}`} ref={headerRef}>
      <div className={`${styles.billboard}`}>
        <h2 ref={titleRef} className={`${styles.title}`}></h2>
      </div>
    </header>
  );
}

export default Header;
