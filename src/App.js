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

const App = ({ store }) => {
  const state = store.getState();
  const dispatch = store.dispatch.bind(store);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">
          <Route
            exact
            path={["/", "/profile"]}
            render={() => {
              return <Profile state={state.profile} dispatch={dispatch} />;
            }}
          />
          <Route
            exact
            path="/dialogues"
            render={() => (
              <Dialogues state={state.dialogues} dispatch={dispatch} />
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
