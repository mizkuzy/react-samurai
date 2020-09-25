import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import ProfileHook from "./components/Profile/ProfileHook";
import Dialogues from "./components/Dialogues/Dialogues";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/thunks";
import LoadingSpinner from "./components/Common/LoadingSpinner";
import Users from "./components/Users/Users";

const App = () => {
  const dispatch = useDispatch();

  const isInitialized = useSelector((state) => state.app.isInitialized);
  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  console.log("App render");
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-wrapper-content">
          <Switch>
            <Route exact path={["/", "/profile", "/profile/:userId"]}>
              <ProfileHook />
            </Route>
            <Route exact path="/dialogues">
              <Dialogues />
            </Route>
            <Route path="/users">
              <Users />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            {/*<Route path="/news">*/}
            {/*  <News />*/}
            {/*</Route>*/}
            {/*<Route path="/music">*/}
            {/*  <Music />*/}
            {/*</Route>*/}
            {/*<Route path="/settings">*/}
            {/*  <Settings />*/}
            {/*</Route>*/}
            {/*<Redirect from="*" to="/" />*/}
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
