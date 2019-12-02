import React from "react";
import { connect } from "react-redux";
import styles from "./CheckInForm1.module.css";
import CheckInForm1 from "./CheckInForm1";
import { checkInPage } from "../../redux/selectors/checkInSelectots";
import { setUserData } from "../../redux/action/checkInAction";

class CheckInContainer1 extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfim: "",
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

    const { email, password, passwordConfim } = this.state;

    if (password !== passwordConfim) {
      this.setState({
        error: "Passwords do not match",
        password: "",
        passwordConfim: ""
      });
      return;
    }

    let dataUserStep1 = {
      email: email,
      password: password,
      step: 2
    };

    this.props.setUserData(dataUserStep1);
    this.props.history.push("/step2");
  };

  render() {
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.loginWrapper}>
            <CheckInForm1
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

export default connect(MSTP, { setUserData })(CheckInContainer1);
