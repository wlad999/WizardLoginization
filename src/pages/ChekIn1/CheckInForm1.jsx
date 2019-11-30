import React from "react";
import styles from "./CheckInForm1.module.css";
const CheckInForm1 = props => {
  const { state, handleInputs, handleRegister } = props;
  const { email, password, passwordConfim } = state;

  return (
    <form>
      <div className={styles.inputModule}>
        <label htmlFor="login" className={styles.invisible}>
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleInputs}
          placeholder="Email *"
          className={styles.input}
          value={email}
        />
        <label htmlFor="password" className={styles.invisible}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputs}
          placeholder="Password *"
          className={styles.input}
          value={password}
        />
        <label htmlFor="password" className={styles.invisible}>
          PasswordConfim
        </label>
        <input
          type="password"
          name="passwordConfim"
          id="passwordConfim"
          onChange={handleInputs}
          placeholder="Password confim *"
          className={styles.input}
          value={passwordConfim}
        />
      </div>
      <div className={styles.error}>
        <p>{state.error}</p>
      </div>
      <button onClick={handleRegister} className={styles.button}>
        NEXT
      </button>
    </form>
  );
};
export default CheckInForm1;
