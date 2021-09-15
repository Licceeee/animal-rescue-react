import "./App.css";
import { Switch, Route } from "react-router-dom";

// =================================================================== >> PAGES
import Home from "./pages/Home";
import ActivateAccount from "./pages/auth/ActivateAccount";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

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

        <Route exact path="/activate/:token">
          <ActivateAccount />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
