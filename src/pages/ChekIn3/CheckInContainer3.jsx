import React from "react";
import { connect } from "react-redux";
import styles from "./CheckInForm3.module.css";
import CheckInForm3 from "./CheckInForm3";
import { checkInPage } from "../../redux/selectors/checkInSelectots";
import { setUserData } from "../../redux/action/checkInAction";

class CheckInContainer3 extends React.Component {
  state = {
    category1: "",
    category2: "",
    category3: ""
  };
  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: ""
    });
  };
  redirectUser = () => {
    this.props.history.push("/");
  };
  handleRegister = e => {
    e.preventDefault();

    const { category1, category2, category3 } = this.state;

    if (!category1 || !category2 || !category3) {
      this.setState({
        error: "All fields must be complete"
      });
      return;
    }

    let dataUserStep3 = {
      category1: category1,
      category2: category2,
      category3: category3,
      step: 4
    };

    this.props.setUserData(dataUserStep3);
    this.props.history.push("/success");
  };

  render() {
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.loginWrapper}>
            <CheckInForm3
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

export default connect(MSTP, { setUserData })(CheckInContainer3);
