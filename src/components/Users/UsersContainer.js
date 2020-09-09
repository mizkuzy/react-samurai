import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Users from "./Users";
import {
  changePage,
  followUser,
  getUsers,
  unfollowUser,
} from "../../redux/thunks";
import withLoginRedirect from "../../hoc/withLoginRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageNumber, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.changePage(this.props.pageSize, pageNumber);
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
      />
    );
  }
}

const mapStateToProps = (state) => {
  const usersPage = state.usersPage;
  return {
    users: usersPage.users,
    totalUsersCount: usersPage.totalUsersCount,
    pageSize: usersPage.pageSize,
    pageNumber: usersPage.pageNumber,
    isFetching: usersPage.isFetching,
  };
};

export default compose(
  withLoginRedirect,
  connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers,
    changePage,
  })
)(UsersContainer);
