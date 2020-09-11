import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

const App = () => (
  <div className="app-wrapper">
    <HeaderContainer />
    <Navbar />
    <main className="app-wrapper-content">
      <Route
        exact
        path={["/", "/profile/:userId?"]}
        render={() => {
          return <Profile />;
        }}
      />
      <Route exact path="/dialogues" render={() => <DialoguesContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <Login />} />
    </main>
  </div>
);

export default App;
