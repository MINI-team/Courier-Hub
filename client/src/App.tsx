import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import LoginFormComponent from './LogInForm/LogInFormComponent';
import SignUpFormComponent from './SignUpForm/SignUpFormComponent';
import InfoSummaryComponent from './NecessaryInfoSummaryPage/InfoSummaryComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormComponent} />
        <Route path="/summary" component={InfoSummaryComponent} />
        <Route path="/login" component={LoginFormComponent} /> 
        <Route path="/register" component={SignUpFormComponent} /> {}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
