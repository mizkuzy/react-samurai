import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialogues-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMW from "redux-thunk";
import appReducer from "./reducers/app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

export default store;