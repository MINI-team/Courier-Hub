import {observer} from "mobx-react-lite";
import {ChangeEvent, useEffect, useState} from "react";
//import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {Button, Checkbox, Form} from "semantic-ui-react";
import {ClientFormValues } from "../models/client";
import { Address } from "../models/address";
import { useHistory } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
//import {useHistory} from "react-router-dom";

export default observer(function SignUpFormComponent() {

    const history = useHistory();
    const [, setUser] = useState({});
    function handleCallbackResponse(response: any) {
        console.log("Encoded INT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        console.log('user setted!')
        axios.post('http://localhost:5147/Account/register', userObject).then((response: { data: any; }) => {
            console.log('Data sent to server:', response.data);
        }).catch((error: any) => {
            console.error('Error sending data to server:', error);
        });
        //
        history.goBack(); // moze co innego ale na razie tak
    }


    const [useDefault, setUseDefault] = useState(false);
    const [isReq, setIsReq] = useState(false);
    
    const [client, setClient] = useState<ClientFormValues>({
        firstName: '',
        lastName: '',
        email: '',
    });
    const[address, setAddress] = useState<Address>({
        streetName: '',
        streetNo: 0,
        flatNo: 0,
        zipCode: '',
        city: '',
    });
    const[addressSA, setAddressSA] = useState<Address>({
        streetName: '',
        streetNo: 0,
        flatNo: 0,
        zipCode: '',
        city: '',
    });

    function handleSubmitButton(){
        axios.post('http://localhost:5147/Account/register', client).then((response: { data: any; }) => {
            console.log('Data sent to server:', response.data);
        }).catch((error: any) => {
            console.error('Error sending data to server:', error);
        });
    }
    
    function handleInputChangeClient(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setClient({...client, [name]: value})
    }

    function handleInputChangeAddress(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setAddress({...address, [name]: value})
    }

    function handleInputChangeAddressSA(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setAddressSA({...addressSA, [name]: value})
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
           
            (window as any).google.accounts.id.renderButton(document.getElementById("signUpDiv"),
                { theme: "outline",  text: "Log in with Google" , size: "large"}
            );
            (window as any).google.accounts.id.prompt();
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    function handleSubmit(){
        console.log(client);
        console.log(address);
        console.log(addressSA);
    }
    
    return(<div>
        
            <Form onSubmit={handleSubmit}>
                <h2>Basic information</h2>
                <Form.Group>
                    <Form.Input fluid label='First name' name="firstName" value={client.firstName} onChange={handleInputChangeClient} placeholder='Elon' width={4}  required/>
                    <Form.Input fluid label='Last name' name="lastName" value={client.lastName}    onChange={handleInputChangeClient}  placeholder='Musk' width={4} required/>
                </Form.Group>
                <h2>Address</h2>
                <Form.Group>
                    <Form.Input fluid label='Street name' name="streetName" value={address.streetName} onChange={handleInputChangeAddress} placeholder='Example' width={6}/>
                    <Form.Input fluid label='Street number' name="streetNo" value={address.streetNo} onChange={handleInputChangeAddress} placeholder='0A' width={2} />
                    <Form.Input fluid label='Flat number' name="city" value={address.city} onChange={handleInputChangeAddress} placeholder='0' width={2}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input fluid label='Zip code' name="zipCode" value={address.zipCode} onChange={handleInputChangeAddress} placeholder='00-000' width={2} />
                    <Form.Input fluid label='City' name="flatNo" value={address.flatNo} onChange={handleInputChangeAddress} placeholder='Warsaw' width={2}/>
                </Form.Group>
                <h2>Default Source Address</h2>
                <Form.Field>
                    <Checkbox
                        label="Make default source address the same as address"
                        checked={useDefault}
                        onChange={() => setUseDefault(!useDefault)}
                    />
                </Form.Field>
                {!useDefault ? (
                    <div>
                        
                        <Form.Group>
                            <Form.Input fluid label='Street name' name="streetName" value={addressSA.streetName} onChange={handleInputChangeAddressSA} placeholder='Example' width={6}/>
                            <Form.Input fluid label='Street number' name="streetNo" value={addressSA.streetNo} onChange={handleInputChangeAddressSA}  placeholder='0A' width={2} />
                            <Form.Input fluid label='Flat number' name="city" value={addressSA.city} onChange={handleInputChangeAddressSA}  placeholder='0' width={2}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid label='Zip code' name="zipCode" value={addressSA.zipCode} onChange={handleInputChangeAddressSA} placeholder='00-000' width={2} />
                            <Form.Input fluid label='City' name="flatNo" value={addressSA.flatNo} onChange={handleInputChangeAddressSA}  placeholder='Warsaw' width={2}/>
                        </Form.Group>
                    </div>
                ) : (
                    <div> </div>
                )}
                <Form.Field  required>
                    <Checkbox label='I agree to the Terms and Conditions'
                              checked={isReq}
                              onChange={
                        () => setIsReq(!isReq)}/>
                </Form.Field>
                <div id="signUpDiv">
                </div>
                <Button disabled={!isReq} onClick={handleSubmitButton}>register</Button>
                
            </Form>
        
    </div>)
})
