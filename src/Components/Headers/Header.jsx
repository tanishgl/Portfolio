import { useRef, useState } from "react";
import styles from "./header.module.css";
import { useEffect } from "react";

const title = "Hi, My name is Tanish Goyal! 😺";

function Header() {
  const [gradient, setGradient] = useState(1);
  const headerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < title.length; i++) {
      setTimeout(() => {
        titleRef.current.innerHTML = titleRef.current.innerHTML + title[i];
      }, i * 100);
    }
  }, []);

  useEffect(() => {
    const curGradient = `gradient-${gradient}`;
    headerRef.current.style.background = `var(--${curGradient})`;
  }, [gradient]);

  const handleColorChange = () => {
    let gr = (gradient + 1) % 6;
    if (gr == 0) gr = 1;
    console.log(gr);
    setGradient(gr);
  };

  return (
    <header
      className={`${styles.header}`}
      ref={headerRef}
      onClick={handleColorChange}
    >
      <div className={`${styles.billboard}`}>
        <h2 ref={titleRef} className={`${styles.title}`}></h2>
      </div>
    </header>
  );
}

export default Header;
