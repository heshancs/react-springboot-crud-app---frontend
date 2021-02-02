import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponents />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            </Switch>
          </div>
        <FooterComponents />
      </Router>
    </div>
    
  );
}

export default App;
