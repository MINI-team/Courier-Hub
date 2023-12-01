import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import FormComponent2 from "../InquiryForm/FormComponent2";
import { IInquiry } from "../models/inquiry";
import { useHistory } from "react-router-dom";
import { IOrder } from "../models/order";

interface Props{
  companyID: number;
  companyName: string;
  price: number;
}

function InfoSummaryComponent(){
  const [info, setInfo] = useState({});
  const [inquiry, setInquiry] = useState<IInquiry | undefined>(undefined);
  const [renderSummary, setRenderSummary] = useState(false);
  const history = useHistory();

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
      const {name, value} = event.target;
      setInfo({...info, [name]: value})
      // console.log(`${name} changed to ${value}`);
  }

  async function handleSubmit() {
    let order: IOrder = {"clientId": 1, "inquiryId": 1, "companyName": "PocztEX_PL", "price": 2.21} // HARDCODED IDS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // let order: IOrder = {"clientId": 15, "inquiryId": inquiry!.id, "companyName": "Company A", "price": 10*Math.random()}
    await axios.post('http://localhost:5147/api/Order', order, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
        // Authorization: 'super secret key',
      },
    });
    // .then( response => console.log(`aaa ${response.data}`));
    // history.replace('/orders');
    history.push('/orders'); // maybe replace so the client
  }

  useEffect(() => {
    axios.get("http://localhost:5000/inquiries").then(response => 
    {
      setInquiry(response.data[response.data.length - 1]);
      setRenderSummary(true);
    });
  }, []);

  return(
    <div style={{paddingLeft: '5%'}}>
      <Form>
        <h2>Basic information</h2>
        <Form.Group>
          <Form.Input fluid label='First name' placeholder='Jan' width={4} name="firstName" onChange={handleInputChange}/>
          <Form.Input fluid label='Last name' placeholder='Kowalski' width={4} name="lastName" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Input fluid label='E-mail' placeholder='kowalski@example.com' width={6} name="email" onChange={handleInputChange}/>
        <h2>Address</h2>
        <Form.Group>
          <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="streetName" onChange={handleInputChange}/>
          <Form.Input fluid label='Street number' placeholder='0A' width={2} name="streetNumber" onChange={handleInputChange}/>
          <Form.Input fluid label='Flat number' placeholder='0' width={2} name="flatNumber" onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="zipCode" onChange={handleInputChange}/>
          <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="city" onChange={handleInputChange}/>
        </Form.Group>
      </Form>
      <h2 style={{fontSize: 50}}>Summary:</h2>
      {renderSummary ? <FormComponent2 inquiry={inquiry}></FormComponent2> : <></>}
      <Form.Button color="green" size="massive" onClick={handleSubmit}>Submit</Form.Button>
    </div>
  )
}

export default InfoSummaryComponent;
