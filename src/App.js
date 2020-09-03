import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <main className="app-wrapper-content">
      <Route
        exact
        path={["/", "/profile"]}
        render={() => {
          return <ProfileContainer />;
        }}
      />
      <Route exact path="/dialogues" render={() => <DialoguesContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/users" render={() => <UsersContainer />} />
    </main>
  </div>
);

export default App;
