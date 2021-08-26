import "./App.css";
import { Switch, Route } from "react-router-dom";

// =================================================================== >> PAGES
import Home from "./pages/Home";
import ActivateAccount from "./pages/auth/ActivateAccount";

// ============================================================== >> COMPONENTS
import Menu from "./components/Menu";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Menu />

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
    </>
  );
}

export default App;
