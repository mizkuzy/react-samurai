import { connect } from "react-redux";
import Users from "./Users";
import {
  followUserAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowUserAC,
  updatePageNumberAC,
} from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  const usersPage = state.users;
  return {
    users: usersPage.users,
    totalUsersCount: usersPage.totalUsersCount,
    pageSize: usersPage.pageSize,
    pageNumber: usersPage.pageNumber,
  };
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
    setTotalUsersCount: (number) => {
      dispatch(setTotalUsersCountAC(number));
    },
    updatePageNumber: (number) => {
      dispatch(updatePageNumberAC(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
