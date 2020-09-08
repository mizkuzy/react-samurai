import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get as _get } from "lodash";
import { processProfile, updateStatus } from "../../redux/thunks";
import Profile from "./Profile";
import withLoginRedirect from "../../hoc/withLoginRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // TODO REMOVE DEFAULT PROFILE
    const userId = _get(this.props, "match.params.userId", 2);
    this.props.processProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
  };
};

export default compose(
  withLoginRedirect,
  withRouter,
  connect(mapStateToProps, {
    processProfile,
    updateStatus,
  })
)(ProfileContainer);
