import React from "react";
import { connect } from "react-redux";
import { step } from "../../redux/selectors/checkInSelectots";
import styles from "./Scheme.module.css";

class Scheme extends React.Component {
  render() {
    const point1StyleArr = [styles.point1];
    if (this.props.step === 1) {
      point1StyleArr.push(styles.currentPoint);
    } else {
      point1StyleArr.push(styles.pastPoinst);
    }
    const point1Style = point1StyleArr.join(" ")
    return (
      <div className={styles.wrapper}>
        <h2>Scheme</h2>
        <div className={styles.box}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={[styles.point1, styles.currentPoint].join(" ")}></div>
          <div className={[styles.point2, styles.futurePoint].join(" ")}></div>
          <div className={[styles.point3, styles.futurePoint].join(" ")}></div>
          <div className={[styles.point4, styles.futurePoint].join(" ")}></div>
        </div>
      </div>
    );
  }
}

let MSTP = state => ({ step: step(state) });
export default connect(MSTP)(Scheme);
