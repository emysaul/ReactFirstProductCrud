import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './views/Login'
import Register from './views/Register'
import Main from './views/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectState from './contexts/projects/projectState';
import ClientState from './contexts/clients/clientState';

function App() {
  return (
      <div className={"appContainer"}>
        <ProjectState>
          <ClientState>
            <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/projects" component={Main} />
                  <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        </ClientState>
        </ProjectState>
      </div>
  );
}
 
export default App;
