import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const withLoginRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      return (
        <>
          {!this.props.isAuth && <Redirect to={"/login"} />}
          {this.props.isAuth && <Component {...this.props} />}
        </>
      );
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
};

export default withLoginRedirect;
