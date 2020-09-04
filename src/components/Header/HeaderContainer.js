import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { IS_ME_AUTH_URL } from "../../util/api-urls";
import { authenticateUser } from "../../redux/actionCreators";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(IS_ME_AUTH_URL, { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        this.props.authenticateUser(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth,
    login: state.auth.login}
};

export default connect(mapStateToProps, {
  authenticateUser,
})(HeaderContainer);
