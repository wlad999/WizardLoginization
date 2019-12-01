import React from "react";
import styles from "./AppBackGround.module.css";
const AppBackGround = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.yellow}>
        <div className={styles.red}></div>
        <div className={styles.green}></div>
      </div>
    </div>
  );
};
export default AppBackGround;
