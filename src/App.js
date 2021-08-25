import "./App.css";
import { Switch, Route } from "react-router-dom";

// =================================================================== >> PAGES
import Home from "./pages/Home/Home";
import ActivateAccount from "./pages/ActivateAccount/ActivateAccount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/activate/:token">
            <ActivateAccount />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
