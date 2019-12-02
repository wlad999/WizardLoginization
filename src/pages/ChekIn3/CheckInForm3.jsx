import React from "react";
import styles from "./CheckInForm3.module.css";
const CheckInForm3 = props => {
  const { state, handleInputs, handleRegister } = props;
  const { category1, category2, category3 } = state;

  return (
    <form>
      <div className={styles.inputModule}>
        <label className={styles.invisible}>Category 1</label>
        <input
          type="text"
          name="category1"
          id="category1"
          onChange={handleInputs}
          className={styles.input}
          value={category1}
        />
        <label className={styles.invisible}>Category 2</label>
        <input
          type="text"
          name="category2"
          id="category2"
          onChange={handleInputs}
          className={styles.input}
          value={category2}
        />
        <label className={styles.invisible}>Category 3</label>
        <input
          type="text"
          name="category3"
          id="category3"
          onChange={handleInputs}
          className={styles.input}
          value={category3}
        />
      </div>
      <p>{state.error}</p>
      <button onClick={handleRegister} className={styles.button}>
        NEXT
      </button>
    </form>
  );
};
export default CheckInForm3;
