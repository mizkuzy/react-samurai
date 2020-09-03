import React from "react";
import * as axios from "axios";
import { PROFILE_URL } from "../../util/api-urls";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/actionCreators";
import { withRouter } from "react-router-dom";
import { get as _get } from "lodash";
class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = _get(this.props, "match.params.userId", 2);
    const profileUrl = `${PROFILE_URL}/${userId}`;

    axios.get(profileUrl).then((response) => {
      const profile = response.data;
      this.props.setProfile(profile);
    });
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
  setProfile,
})(withRouterProfileContainer);
