import { FOLLOW_USER, SET_USERS, UNFOLLOW_USER } from "../actionTypes";

const users = [
  {
    id: 1,
    followed: false,
    avaUrl: "",
    fullName: "Lucy Ru",
    status: "Happy",
    location: { city: "Saint Petersburg", country: "Russia" },
  },
  {
    id: 2,
    followed: true,
    fullName: "Andrew Ru",
    status: "Happy",
    location: { city: "Saint Petersburg", country: "Russia" },
  },
  {
    id: 3,
    followed: true,
    fullName: "Anna Mel",
    status: "ЖывЕ Беларусь!",
    location: { city: "Minsk", country: "Belarus" },
  },
];

const init = {
  users,
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
