import React from "react";
import styles from "./Success.module.css";

const Success = () => {
  return (
    <>
      <h2 className={styles.head}>Success!</h2>
      <p className={styles.info}>Your account was successfully registered.</p>
      <p className={styles.info}>Please wait for account approval.</p>
      <p className={styles.info}>It can take up to 24 hours.</p>
      <div className={styles.mailBox}>
        <p className={styles.mail}>Have questions?</p>

        <p className={styles.mail}>
          Contact <a href="/">info@site.com</a>
        </p>
      </div>
    </>
  );
};

export default Success;
