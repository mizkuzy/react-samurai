import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";
import * as axios from "axios";
import { USERS_URL } from "../../util/api-urls";

const Paging = ({
  totalElementsNumber,
  pageSize,
  pageNumber,
  onChangePage,
}) => {
  const pagesCount = Math.ceil(totalElementsNumber / pageSize);

  return [...Array(pagesCount).keys()].map((p) => {
    const normalisedPageNumber = p + 1;

    return (
      <span
        key={p}
        onClick={() => {
          onChangePage(normalisedPageNumber);
        }}
        className={pageNumber === normalisedPageNumber && s.selected_page}
      >
        {normalisedPageNumber}{" "}
      </span>
    );
  });
};

class Users extends React.Component {
  componentDidMount() {
    this.fetchUsers(this.props.pageNumber);
  }

  fetchUsers(pageNumber) {
    const usersUrl = `${USERS_URL}?count=${this.props.pageSize}&page=${pageNumber}`;

    axios.get(usersUrl).then((response) => {
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.setUsers(response.data.items);
    });
  }

  onChangePage = (pageNumber) => {
    this.props.updatePageNumber(pageNumber);
    this.fetchUsers(pageNumber);
  };

  render() {
    return (
      <div className={s.users_content}>
        <h3>Users</h3>
        <Paging
          totalElementsNumber={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          pageNumber={this.props.pageNumber}
          onChangePage={this.onChangePage}
        />
        <div className={s.content}>
          {this.props.users.map((u) => (
            <UserItem
              key={u.id}
              user={u}
              followUser={this.props.followUser}
              unfollowUser={this.props.unfollowUser}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
