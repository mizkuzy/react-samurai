import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get as _get } from "lodash";
import { processProfile, updateStatus } from "../../redux/thunks";
import Profile from "./Profile";
import withLoginRedirect from "../../hoc/withLoginRedirect";

const ProfileContainer = (props) => {
  const userId = _get(props, "match.params.userId");

  useEffect(() => {
    if (userId) {
      props.processProfile(userId);
    }
  }, [userId]);

  return <Profile {...props} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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
