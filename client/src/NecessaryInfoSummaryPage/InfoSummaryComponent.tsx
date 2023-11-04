import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { get } from "mobx";
import FormComponent2 from "../InquiryForm/FormComponent2";

function InfoSummaryComponent(this: any){
  const {inquiryStore} = useStore();
  const [info, setInfo] = useState({});
  const [inquiry, setInquiry] = useState({}); 
  // getInquiry();

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
      const {name, value} = event.target;
      setInfo({...info, [name]: value})
      console.log(`${name} changed to ${value}`);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/inquiries").then(response => 
    {
      setInquiry(response.data[response.data.length - 1]);
      // console.log(response.data);
      console.log(response.data[response.data.length - 1]);
    });
  }, []);

  return(
    <div style={{paddingLeft: '5%'}}>
    <Form>
      <h2>Basic information</h2>
      <Form.Group>
        <Form.Input fluid label='First name' placeholder='Jan' width={2} name="first_name" onChange={handleInputChange}/>
        <Form.Input fluid label='Last name' placeholder='Kowalski' width={2} name="last_name" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Input fluid label='E-mail' placeholder='kowalski@example.com' width={2} name="email" onChange={handleInputChange}/>
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
    <FormComponent2 inquiry={inquiry}></FormComponent2>
    </div>
  )
}
 
export default observer(InfoSummaryComponent);
