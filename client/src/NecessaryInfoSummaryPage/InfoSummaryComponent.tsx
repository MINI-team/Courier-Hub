import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import FormComponent2 from "../InquiryForm/FormComponent2";
import { IInquiry } from "../models/inquiry";
import { useHistory } from "react-router-dom";

interface Props{
  companyID: number;
  companyName: string;
  price: number;
}

function InfoSummaryComponent({companyName, price}: Props){
  const [info, setInfo] = useState({});
  const [inquiry, setInquiry] = useState<IInquiry | undefined>(undefined);
  const [renderSummary, setRenderSummary] = useState(false);
  const history = useHistory();

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
      const {name, value} = event.target;
      setInfo({...info, [name]: value})
      console.log(`${name} changed to ${value}`);
  }

  function handleSubmit() {
    console.log(info);
    let {id: _, ...inquiry1} = inquiry; 
    axios.post("http://localhost:5000/orders", {...info, ...inquiry1, "companyName": "Company A", "price": Math.random()*10})
    .then( response => console.log(`aaa ${response.data}`));
    history.replace('/orders');
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
      <h1>Summary:</h1>
      {renderSummary ? <FormComponent2 inquiry={inquiry}></FormComponent2> : <></>}
      <Form.Button color="green" size="massive" onClick={handleSubmit}>Submit</Form.Button>
    </div>
  )
}
 
// export default observer(InfoSummaryComponent);
export default InfoSummaryComponent;
