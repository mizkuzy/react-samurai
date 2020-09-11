import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import Header from "./components/Header/Header";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">
          <Route
            exact
            path={["/", "/profile/:userId?"]}
            render={() => {
              return <Profile />;
            }}
          />
          <Route
            exact
            path="/dialogues"
            render={() => <DialoguesContainer />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </main>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
