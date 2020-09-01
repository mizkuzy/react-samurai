import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserAC,
  setUsersAC,
  unfollowUserAC,
} from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return { users: state.users.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    followUser: (uid) => {
      dispatch(followUserAC(uid));
    },
    unfollowUser: (uid) => {
      dispatch(unfollowUserAC(uid));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
