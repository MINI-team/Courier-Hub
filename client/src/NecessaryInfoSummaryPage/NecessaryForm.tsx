import { ChangeEvent, useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { IInquiry } from '../models/inquiry';

export default function FormComponent2(){
    const [info, setInfo] = useState({});
  
    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setInfo({...info, [name]: value})
        // var val = value
        console.log(`${name} changed to ${value}`);
    }
    return(
    <Form>
      <h2>Basic information</h2>
      <Form.Group>
        <Form.Input fluid label='First name' placeholder='Jan' width={4} name="first_name" onChange={handleInputChange}/>
        <Form.Input fluid label='Last name' placeholder='Kowalski' width={4} name="last_name" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Input fluid label='E-mail' placeholder='kowalski@example.com' width={6} name="email" onChange={handleInputChange}/>
      <h2>Address</h2>
      <Form.Group>
        <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="sourceStreetName" onChange={handleInputChange}/>
        <Form.Input fluid label='Street number' placeholder='0A' width={2} name="sourceStreetNumber" onChange={handleInputChange}/>
        <Form.Input fluid label='Flat number' placeholder='0' width={2} name="sourceFlatNumber" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="sourceZipCode" onChange={handleInputChange}/>
        <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="sourceCity" onChange={handleInputChange}/>
      </Form.Group>
    </Form>
    )
}