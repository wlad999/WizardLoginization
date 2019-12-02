import React from "react";
import { connect } from "react-redux";
import { step } from "../../redux/selectors/checkInSelectots";
import styles from "./Scheme.module.css";

class Scheme extends React.Component {
  render() {
    const { step } = this.props;

    const point1StyleArr = [styles.point1];
    if (step === 1) {
      point1StyleArr.push(styles.currentPoint);
    } else if (step > 1) {
      point1StyleArr.push(styles.pastPoint);
    }
    const point1Style = point1StyleArr.join(" ");

    const point2StyleArr = [styles.point2];
    if (step < 2) {
      point2StyleArr.push(styles.futurePoint);
    } else if (step === 2) {
      point2StyleArr.push(styles.currentPoint);
    } else if (step > 2) {
      point2StyleArr.push(styles.pastPoint);
    }
    const point2Style = point2StyleArr.join(" ");

    const point3StyleArr = [styles.point3];
    if (step < 3) {
      point3StyleArr.push(styles.futurePoint);
    } else if (step === 3) {
      point3StyleArr.push(styles.currentPoint);
    } else if (step > 3) {
      point3StyleArr.push(styles.pastPoint);
    }
    const point3Style = point3StyleArr.join(" ");

    const point4StyleArr = [styles.point4];
    if (step < 4) {
      point4StyleArr.push(styles.futurePoint);
    } else if (step === 4) {
      point4StyleArr.push(styles.currentPoint);
    }
    const point4Style = point4StyleArr.join(" ");

    return (
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={step > 1 ? styles.pastLine : styles.line}></div>
          <div className={step > 2 ? styles.pastLine : styles.line}></div>
          <div className={step > 3 ? styles.pastLine : styles.line}></div>
          <div className={point1Style}></div>
          <div className={point2Style}></div>
          <div className={point3Style}></div>
          <div className={point4Style}></div>
        </div>
        <div className={styles.infoWay}>
          <p className={styles.note}>CONTACTS</p>
          <p className={styles.note}>ADDRESS</p>
          <p className={styles.note}>CATEGORIES</p>
          <p className={styles.note}>SUCCESS</p>
        </div>
      </div>
    );
  }
}

let MSTP = state => ({ step: step(state) });
export default connect(MSTP)(Scheme);
