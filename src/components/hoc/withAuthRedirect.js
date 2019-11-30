import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = state => ({
  isAuth: state.loginPage.isAuth
});

export const withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/"} />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectContainer = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectContainer;
};
