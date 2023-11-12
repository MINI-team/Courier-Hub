import { Form } from 'semantic-ui-react'
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
//import { GoogleLogin } from '@react-oauth/google';
function LogInFormComponent(){
    const history = useHistory();

    const [, setUser] = useState({});
    function handleCallbackResponse(response: any) {
        console.log("Encoded INT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        // new !CHANGE URL
        axios.post('http://localhost:5147/api', userObject).then((response) => {
            console.log('Data sent to server:', response.data);
        }).catch((error) => {
            console.error('Error sending data to server:', error);
        });
        //
        history.goBack(); // moze co innego ale na razie tak
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
            (window as any).google.accounts.id.initialize({
                client_id: "",
                callback: handleCallbackResponse
            });
            (window as any).google.accounts.id.renderButton(document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            );
            (window as any).google.accounts.id.prompt();
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return(

        <div id="log_in_form">

            <Form>
                <h2>Log in before continuing</h2>
                <Form.Group>
                    <Form.Input fluid label='Login' placeholder='your login here' width={4} />
                    <Form.Input fluid label='Password' placeholder='********' width={4}/>
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                <Form.Group inline={true}>
                   
                    <div id="signInDiv">

                    </div>
                    <h4 style={{ margin: '0 10px' }}>or</h4>
                    <Form.Button>Continue without logging in</Form.Button>
                </Form.Group>
            </Form>
        </div>)
}
export default LogInFormComponent;

    