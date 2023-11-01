import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import LoginForm from './LoginForm/LoginComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormComponent} />
        <Route path="/login" component={LoginForm} /> {}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
