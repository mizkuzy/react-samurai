import React from "react";
import * as axios from "axios";
import { PROFILE_URL } from "../../util/api-urls";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/actionCreators";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileUrl = `${PROFILE_URL}/2`;

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
export default connect(mapStateToProps, {
  setProfile,
})(ProfileContainer);
