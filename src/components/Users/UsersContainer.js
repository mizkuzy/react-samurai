import { connect } from "react-redux";
import {
  followUserAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowUserAC,
  updatePageNumberAC,
} from "../../redux/actionCreators";
import React from "react";
import { USERS_URL } from "../../util/api-urls";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    this.fetchUsers(this.props.pageNumber);
  }

  fetchUsers(pageNumber) {
    const usersUrl = `${USERS_URL}?count=${this.props.pageSize}&page=${pageNumber}`;

    axios.get(usersUrl).then((response) => {
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.setUsers(response.data.items);
      this.props.setIsFetching(false);
    });
  }

  onChangePage = (pageNumber) => {
    this.props.setIsFetching(true);
    this.props.updatePageNumber(pageNumber);
    this.fetchUsers(pageNumber);
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageNumber={this.props.pageNumber}
        pageSize={this.props.pageSize}
        onChangePage={this.onChangePage}
        users={this.props.users}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        isFetching={this.props.isFetching}
        setIsFetching={this.props.setIsFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const usersPage = state.users;
  return {
    users: usersPage.users,
    totalUsersCount: usersPage.totalUsersCount,
    pageSize: usersPage.pageSize,
    pageNumber: usersPage.pageNumber,
    isFetching: usersPage.isFetching,
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
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
