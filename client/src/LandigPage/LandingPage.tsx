import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import {useEffect, useState} from "react";
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
//import agent from '../api/agent';
//import { ClientFormValues } from '../models/client';
//import {jwtDecode} from "jwt-decode/build/esm";
//import axios from "axios/index";

const LandingPage = () => {
  const history = useHistory();

  const goToForm = () => {
    history.push('/form');
  };

 /* const goToLogin = () => {
    history.push('/login');
  };
*/
    const goToRegister = () => {
        history.push('/register');
    };

    const {clientStore} = useStore();


    const [, setUser] = useState({});
    function handleCallbackResponse(response: any) {
        console.log("Encoded INT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        axios.post('http://localhost:5147/api/Account/login', userObject).then((response: { data: any; }) => {
            console.log('Data sent to server:', response.data);
        }).catch((error: any) => {
            console.error('Error sending data to server:', error);
        });
        
        history.goBack(); // CHANGE --> inquire history
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
            (window as any).google.accounts.id.initialize({
                client_id: "",
                callback: handleCallbackResponse,
            });
            (window as any).google.accounts.id.renderButton(document.getElementById("signInDiv"),
                { theme: "outline",  text: "Log in with Google" , size: "large" , context: "signin"}
            );
            (window as any).google.accounts.id.prompt();
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
  return (
    <div className="landing-container">
        {clientStore.isLoggedIn ? (
            <button className="logout-button">
                Log Out
            </button>
            ) : (
            <div id="signInDiv">

            </div>
        )}
     <button className="login-button" onClick={goToRegister}>
         Register
     </button>
      <h1>CourierHub</h1>
      <button className="landing-button" onClick={goToForm}>
        Load Form
      </button>
    </div>
  );
};

export default observer(LandingPage);
