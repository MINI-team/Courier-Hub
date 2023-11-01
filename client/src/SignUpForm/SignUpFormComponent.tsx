import {Checkbox, Form } from 'semantic-ui-react'
import React from "react";
import { IClient } from '../models/client';
import { IAddress } from '../models/address';

class SignUpFormComponent extends React.Component<{}, IClient> {
    address: IAddress = {
        streetName: "",
        streetNo: 0,
        flatNo: 0,
        zipCode: "",
        city: ""
    }
    client: IClient = {
        firstName: "",
        lastName: "",
        email: "string",
        login: "",
        password: "",
        address: this.address
    };
}

function SignUpFormComponent(){
    return(<div>
        <Form onSubmit={this.handleSubmit}>
            <h2>Basic information</h2>
            <Form.Group>
                <Form.Input fluid label='First name' placeholder='Elon' width={4}  required/>
                <Form.Input fluid label='Last name' placeholder='Musk' width={4} required/>
                <Form.Input fluid label='E-mail' placeholder='elon.musk@gmail.com' width={5} required/>
            </Form.Group>
            <Form.Group>
                <Form.Input fluid label='Login' placeholder='ElonMusk2806' width={5}  required/>
                <Form.Input fluid label='Password' placeholder='1q2w3e4r' width={5} required/>
            </Form.Group>
            <h2>Address</h2>
            <Form.Group>
                <Form.Input fluid label='Street name' placeholder='Example' width={6}/>
                <Form.Input fluid label='Street number' placeholder='0A' width={2} />
                <Form.Input fluid label='Flat number' placeholder='0' width={2}/>
            </Form.Group>
            <Form.Group>
                <Form.Input fluid label='Zip code' placeholder='00-000' width={2} />
                <Form.Input fluid label='City' placeholder='Warsaw' width={2}/>
            </Form.Group>
            <Form.Field  required>
                <Checkbox label='I agree to the Terms and Conditions'/>
            </Form.Field>
            <Form.Button>Sign Up</Form.Button>
        </Form>
    </div>)
}

export default SignUpFormComponent;