import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialogues-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMW from "redux-thunk";

const reducers = combineReducers({
  profile: profileReducer,
  dialogues: dialoguesReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMW));

export default store;
