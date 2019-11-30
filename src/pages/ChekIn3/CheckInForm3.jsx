import React from "react";
import styles from "./CheckInForm3.module.css";
const CheckInForm3 = props => {
  const { state, handleInputs, handleRegister } = props;
  const { category1, category2, category3 } = state;

  return (
    <form>
      <div className={styles.inputModule}>
        <label className={styles.invisible}>Category1</label>
        <input
          type="text"
          name="category1"
          id="category1"
          onChange={handleInputs}
          placeholder="Category1 *"
          className={styles.input}
          value={category1}
        />
        <label className={styles.invisible}>City</label>
        <input
          type="text"
          name="category2"
          id="category2"
          onChange={handleInputs}
          placeholder="Category2 *"
          className={styles.input}
          value={category2}
        />
        <label className={styles.invisible}>Adress</label>
        <input
          type="text"
          name="category3"
          id="category3"
          onChange={handleInputs}
          placeholder="Category3 *"
          className={styles.input}
          value={category3}
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
export default CheckInForm3;
