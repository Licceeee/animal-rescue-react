import "./App.css";
import { Switch, Route } from "react-router-dom";

// =================================================================== >> PAGES
import Home from "./pages/Home";

// ============================================================== >> AUTH PAGES
import Register from "./pages/auth/Register";
import ActivateAccount from "./pages/auth/ActivateAccount";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// ============================================================== >> USER PAGES
import UserProfile from "./pages/user/UserProfile";
import UserSettings from "./pages/user/UserSettings";
import UserFavourites from "./pages/user/UserFavourites";

// ========================================================= >> MESSENGER PAGES
import ChatList from "./pages/messenger/ChatList";
import Chat from "./pages/messenger/Chat";

// ============================================================== >> COMPONENTS
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <>
          {/* ========================================================== AUTH */}
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/activate/:token">
            <ActivateAccount />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>

          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
        </>

        <>
          {/* ======================================================== USER */}
          <Route exact path="/user-profile/:id">
            <UserProfile />
          </Route>

          <Route exact path="/user-settings/:id">
            <UserSettings />
          </Route>

          <Route exact path="/user-favorites/:id">
            <UserFavourites />
          </Route>
        </>

        <>
          {/* =================================================== MESSENGER */}
          <Route exact path="/chat-list/:id">
            <ChatList />
          </Route>

          <Route exact path="/chat/:id">
            <Chat />
          </Route>
        </>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
