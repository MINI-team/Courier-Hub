import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//import { useEffect } from "react";
import './App.css';
import LandingPage from './LandigPage/LandingPage';
import FormComponent from './InquiryForm/FormComponent';
import SignUpFormComponent from './SignUpForm/SignUpFormComponent';
import LogInFormComponent from './LogInForm/LogInFormComponent';
//import { GoogleLogin } from '@react-oauth/google';
function App() {
    
    return (
        <div >
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/form" component={FormComponent} />
                    <Route path="/login" component={LogInFormComponent} />
                    <Route path="/register" component={SignUpFormComponent} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
