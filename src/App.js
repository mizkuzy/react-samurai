import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogues from "./components/Dialogues/Dialogues";

const App = ({ posts, dialogues, messages }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route
            exact
            path="/dialogues"
            render={() => (
              <Dialogues dialogues={dialogues} messages={messages} />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
