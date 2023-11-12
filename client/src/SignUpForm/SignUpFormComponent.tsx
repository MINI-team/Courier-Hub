
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {Checkbox, Form } from "semantic-ui-react";
import {useHistory} from "react-router-dom";

export default observer(function SignUpFormComponent() {
    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const[addresses, setAddress] = useState({
        address: {
            streetName: '',
            streetNo: '',
            flatNo: '',
            zipCode: '',
            city: '',
        },
        addressSA: {
            streetName: '',
            streetNo: '',
            flatNo: '',
            zipCode: '',
            city: '',
        },
    })
    const handleInputChangeClient = (
        _e: React.ChangeEvent<HTMLInputElement>,
        { name, value }: { name: string; value: string }
    ) => {
        setClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        }));
    };
    const handleInputChangeAddress = (
        _e: React.ChangeEvent<HTMLInputElement>,
        { name, value }: { name: string; value: string }
    ) => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const history = useHistory();
    const [, setUser] = useState({});
    function handleCallbackResponse(response: any) {
        console.log("Encoded INT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        axios.post('http://localhost:5147/api/Account/register', userObject).then((response: { data: any; }) => {
            console.log('Data sent to server:', response.data);
        }).catch((error: any) => {
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

    const [useDefault, setUseDefault] = useState(false);
    const [isReq, setIsReq] = useState(false);

    
    return(<div>
        
            <Form>
                <h2>Basic information</h2>
                <Form.Group>
                    <Form.Input fluid label='First name' name="firstName" value={client.firstName} onChange={(e, { name, value }) => handleInputChangeClient(e, { name, value })} placeholder='Elon' width={4}  required/>
                    <Form.Input fluid label='Last name' name="lastName" value={client.lastName} onChange={(e, { name, value }) => handleInputChangeClient(e, { name, value })}  placeholder='Musk' width={4} required/>
                </Form.Group>
                <h2>Address</h2>
                <Form.Group>
                    <Form.Input fluid label='Street name' name="streetName" value={addresses.address.streetName} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='Example' width={6}/>
                    <Form.Input fluid label='Street number' name="streetNo" value={addresses.address.streetNo} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='0A' width={2} />
                    <Form.Input fluid label='Flat number' name="city" value={addresses.address.city} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='0' width={2}/>
                </Form.Group>
                <Form.Group>
                    <Form.Input fluid label='Zip code' name="zipCode" value={addresses.address.zipCode} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='00-000' width={2} />
                    <Form.Input fluid label='City' name="flatNo" value={addresses.address.flatNo} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='Warsaw' width={2}/>
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
                            <Form.Input fluid label='Street name' name="streetName" value={addresses.addressSA.streetName} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='Example' width={6}/>
                            <Form.Input fluid label='Street number' name="streetNo" value={addresses.addressSA.streetNo} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='0A' width={2} />
                            <Form.Input fluid label='Flat number' name="city" value={addresses.addressSA.city} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='0' width={2}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid label='Zip code' name="zipCode" value={addresses.addressSA.zipCode} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='00-000' width={2} />
                            <Form.Input fluid label='City' name="flatNo" value={addresses.addressSA.flatNo} onChange={(e, { name, value }) => handleInputChangeAddress(e, { name, value })} placeholder='Warsaw' width={2}/>
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
                
            </Form>
        
    </div>)
})
