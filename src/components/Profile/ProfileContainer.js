import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get as _get } from "lodash";
import { processProfile } from "../../redux/thunks";
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

const withLoginRedirectProfileContainer = withLoginRedirect(ProfileContainer);
const withRouterAndLoginRedirectProfileContainer = withRouter(
  withLoginRedirectProfileContainer
);

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

export default connect(mapStateToProps, {
  processProfile,
})(withRouterAndLoginRedirectProfileContainer);
