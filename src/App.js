import Layout from './components/Layout';
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import Weather from "./components/Weather";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App-bg">
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                    <Redirect to="/add-user" /> 
                )
              }}
            />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/weather" component={Weather} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
