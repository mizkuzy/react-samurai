import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";
import * as axios from "axios";
import { USERS_URL } from "../../util/api-urls";

class Users extends React.Component {
  componentDidMount() {
    axios.get(USERS_URL).then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div className={s.users_content}>
        <h3>Users</h3>
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
