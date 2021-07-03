import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HooksDemo from "./components/layouts/hooks-demo";
import BenAwadHooksDemo from "./components/layouts/ben-awad-demo-hooks-layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/benawadhooksdemo" />} />
          {/* <Route path="/hooks" render={() => <HooksDemo />} /> */}
          <Route path="/hooks" component={HooksDemo} />
          <Route path="/benawadhooksdemo" component={BenAwadHooksDemo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
