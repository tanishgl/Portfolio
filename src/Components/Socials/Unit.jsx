import styles from "./Unit.module.css";

// eslint-disable-next-line react/prop-types
const Unit = ({ path, logoPath }) => {
  return (
    <div className={`${styles.unit}`}>
      <a href={path} className={`${styles["unit-lk"]}`} target="_blank">
        {logoPath}
      </a>
    </div>
  );
};

export default Unit;
