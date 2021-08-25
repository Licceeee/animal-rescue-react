import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

// =================================================================== >> PAGES
import Home from "./pages/Home";
import ActivateAccount from "./pages/ActivateAccount";

// ============================================================== >> COMPONENTS
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="space-between"
        padding="2vw"
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/activate/:token">
            <ActivateAccount />
          </Route>
        </Switch>
      </Flex>
    </>
  );
}

export default App;
