import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { useRedirect, useRoutes } from "hookrouter";
import Header from "./components/Header/Header";
import ProfileHook from "./components/Profile/ProfileHook";
import Dialogues from "./components/Dialogues/Dialogues";

const routes = {
  "/profile/:userId": ({ userId }) => <ProfileHook userId={userId} />,
  "/dialogues": () => <Dialogues />,
  "/users": () => <UsersContainer />,
  "/login": () => <Login />,
  "/news": () => <News />,
  "/music": () => <Music />,
  "/settings": () => <Settings />,
};

const App = () => {
  // TODO init
  useRedirect("/", "/users"); // TODO change to redirect profile with id

  const match = useRoutes(routes);
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">{match}</main>
      </div>
    </Provider>
  );
};

export default App;
