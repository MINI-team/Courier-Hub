import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import SignUpFormComponent from './SignUpForm/SignUpFormComponent';
import LogInFormComponent from './LogInForm/LogInFormComponent';
import InfoSummaryComponent from './NecessaryInfoSummaryPage/InfoSummaryComponent';
import MyOrdersComponent from './MyOrders/MyOrdersComponent';
import YourComponent from './NecessaryInfoSummaryPage/SummaryChat';
import OffersDashboardComponent from './Offers/OffersDashboardComponent';
import SelectedPage from './Selected/SelectedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormComponent} />
        <Route path="/offers" component={OffersDashboardComponent} />
        <Route path="/selected" component={SelectedPage} />
        <Route path="/summary" component={InfoSummaryComponent} />
        <Route path="/summary2" component={YourComponent} />
        <Route path="/orders" component={MyOrdersComponent} />
        <Route path="/login" component={LogInFormComponent} /> 
        <Route path="/register" component={SignUpFormComponent} /> {}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
