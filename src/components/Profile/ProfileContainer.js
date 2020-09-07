import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { get as _get } from "lodash";
import { processProfile } from "../../redux/thunks";

class ProfileContainer extends React.Component {
  componentDidMount() {
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
  };
};

const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  processProfile,
})(withRouterProfileContainer);
