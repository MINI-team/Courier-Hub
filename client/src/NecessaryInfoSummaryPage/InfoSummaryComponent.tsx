import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import FormComponent2 from "../InquiryForm/FormComponent2";
import { IInquiry } from "../models/inquiry";

function InfoSummaryComponent(this: any){
  const [info, setInfo] = useState({});
  const [inquiry, setInquiry] = useState<IInquiry | undefined>(undefined);
  const [renderSummary, setRenderSummary] = useState(false);

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
      const {name, value} = event.target;
      setInfo({...info, [name]: value})
      console.log(`${name} changed to ${value}`);
  }

  function handleSubmit() {
    console.log(info);
    axios.post("http://localhost:5000/orders", {info, inquiry});
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
      <h1>Summary:</h1>
      {renderSummary ? <FormComponent2 inquiry={inquiry}></FormComponent2> : <></>}
      <Form.Button color="green" size="massive" onClick={handleSubmit}>Submit</Form.Button>
    </div>
  )
}
 
// export default observer(InfoSummaryComponent);
export default InfoSummaryComponent;
