import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import ProfileHook from "./components/Profile/ProfileHook";
import Dialogues from "./components/Dialogues/Dialogues";
import NotFoundPage from "./pages/NotFoundPage";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  // TODO init
  // useRedirect("/", "/users"); // TODO change to redirect profile with id
  // useRedirect("/profile", "/users"); // TODO change to redirect profile with id

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">
          <Switch>
            <Route exact path={["/", "/profile/:userId"]}>
              <ProfileHook />
            </Route>
            <Route exact path="/dialogues">
              <Dialogues />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/news">
              <News />
            </Route>
            <Route path="/music">
              <Music />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            {/*<Redirect from="*" to="/" />*/}
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
