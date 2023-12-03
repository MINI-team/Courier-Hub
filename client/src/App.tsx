import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { useEffect } from "react";
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import SignUpFormComponent from './SignUpForm/SignUpFormComponent';
import LogInFormComponent from './LogInForm/LogInFormComponent';
import { useStore } from './stores/store';
import {useEffect} from "react";
//import RegisterFormComponent from './SignUpForm/RegisterFormComponent';
//import { GoogleLogin } from '@react-oauth/google';
import InfoSummaryComponent from './NecessaryInfoSummaryPage/InfoSummaryComponent';
import MyOrdersComponent from './MyOrders/MyOrdersComponent';
import YourComponent from './NecessaryInfoSummaryPage/SummaryChat';

function App() {
  const {commonStore, clientStore} = useStore();
  useEffect(() => {
      if(commonStore.token){
          clientStore.getClient();
      } 
  }, [commonStore, clientStore]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormComponent} />
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
