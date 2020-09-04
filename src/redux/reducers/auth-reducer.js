import { AUTH_USER, LOGOUT_USER } from "../actionTypes";

const init = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
