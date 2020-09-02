import {
  FOLLOW_USER,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  UNFOLLOW_USER,
  UPDATE_PAGE_NUMBER,
} from "../actionTypes";

const init = {
  users: [],
  totalUsersCount: null,
  pageSize: 7,
  pageNumber: 1,
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
        users: [...action.users],
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.number,
      };
    case UPDATE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.number,
      };
    default:
      return state;
  }
};

export default usersReducer;
