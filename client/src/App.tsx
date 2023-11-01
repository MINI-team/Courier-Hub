import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import LoginFormComponent from './LogInForm/LogInFormComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormComponent} />
        <Route path="/login" component={LoginFormComponent} /> {}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
