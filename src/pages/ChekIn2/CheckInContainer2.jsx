import React from "react";
import { connect } from "react-redux";
import styles from "./CheckInForm2.module.css";
import CheckInForm2 from "./CheckInForm2";
import { checkInPage } from "../../redux/selectors/checkInSelectots";
import { setUserData } from "../../redux/action/checkInAction";
import { withAuthRedirect } from "../../components/hoc/withAuthRedirect";
import { compose } from "redux";

class CheckInContainer2 extends React.Component {
  state = {
    country: "",
    city: "",
    adress: "",
    error: ""
  };
  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: ""
    });
  };

  handleRegister = e => {
    e.preventDefault();
    const { country, city, adress } = this.state;
    if (!country || !city || !adress) {
      this.setState({
        error: "All fields must be complete"
      });
      return;
    }

    let dataUserStep2 = {
      country: country,
      city: city,
      adress: adress,
      step: 3
    };

    this.props.setUserData(dataUserStep2);
    this.props.history.push("/step3");
  };

  render() {
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.loginWrapper}>
            <CheckInForm2
              state={this.state}
              handleInputs={this.handleInputs}
              handleRegister={this.handleRegister}
            />
          </div>
        </div>
      </>
    );
  }
}

let MSTP = state => ({
  checkInPage: checkInPage(state)
});

export default compose(
  connect(MSTP, { setUserData }),
  withAuthRedirect
)(CheckInContainer2);
