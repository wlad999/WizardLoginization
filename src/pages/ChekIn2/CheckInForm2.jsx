import React from "react";
import styles from "./CheckInForm2.module.css";
const CheckInForm2 = props => {
  const { state, handleInputs, handleRegister } = props;
  const { country, city, adress } = state;

  return (
    <form>
      <div className={styles.inputModule}>
        <label htmlFor="login" className={styles.invisible}>
          Country
        </label>
        <input
          type="text"
          name="country"
          id="country"
          onChange={handleInputs}
          className={styles.input}
          value={country}
        />
        <label htmlFor="password" className={styles.invisible}>
          City
        </label>
        <input
          type="text"
          name="city"
          id="passcityord"
          onChange={handleInputs}
          className={styles.input}
          value={city}
        />
        <label htmlFor="password" className={styles.invisible}>
          Address
        </label>
        <input
          type="text"
          name="adress"
          id="adress"
          onChange={handleInputs}
          className={styles.input}
          value={adress}
        />
      </div>
      <p className={styles.error}>{state.error}</p>
      <button onClick={handleRegister} className={styles.button}>
        NEXT
      </button>
    </form>
  );
};
export default CheckInForm2;
