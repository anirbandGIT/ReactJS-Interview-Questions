import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HooksDemo from "./components/layouts/hooks-demo";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/hooks" />} />
          {/* <Route path="/hooks" render={() => <HooksDemo />} /> */}
          <Route path="/hooks" component={HooksDemo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
