import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialogues-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
  profile: profileReducer,
  dialogues: dialoguesReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
});

const store = createStore(reducers);

export default store;