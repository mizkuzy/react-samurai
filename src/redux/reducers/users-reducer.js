import { FOLLOW_USER, SET_USERS, UNFOLLOW_USER } from "../actionTypes";

const init = {
  users: [],
};

const usersReducer = (state = init, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.uid) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.uid) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export default usersReducer;
