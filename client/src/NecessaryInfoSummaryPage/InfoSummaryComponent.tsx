import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import FormComponent2 from "../InquiryForm/FormComponent2";
import { IInquiry } from "../models/inquiry";
import NecessaryForm from "./NecessaryForm";

function InfoSummaryComponent(this: any){
  const [inquiry, setInquiry] = useState<IInquiry>({
    width: 'Summary initial',
    height: 'Summary initial'
  });
  const [test, setTest] = useState("testState0");
  const [renderSummary, setRenderSummary] = useState(false);
  // getInquiry();

  useEffect(() => {
    axios.get("http://localhost:5000/inquiries").then(response => 
    {
      setInquiry(response.data[response.data.length - 1]);
      // console.log(response.data);
      // console.log(`From response: `);
      // console.log(response.data[response.data.length - 1]);
      console.log(`From inquiry (state): `);
      var inq = inquiry
      console.log(inq);
      setRenderSummary(true);
      // console.log(inquiry);
    });
    // setInquiry({
    //   width: 'Shiiiiit',
    //   height: 'Shiiiiit'
    // });
    setTest("testState1");
    // setRenderSummary(true);
  }, []);

  function displayInfo(){
    console.log(`info about inquiry: `);
    console.log(inquiry);
  }

  function setStateToShit(){
    setInquiry({
      width: 'shit',
      height: 'shit'
    });
    setTest("shit");
  }

  return(
    <div style={{paddingLeft: '5%'}}>
    <NecessaryForm></NecessaryForm>
    <button onClick={displayInfo}>Show info about inquiry</button>
    <button onClick={setStateToShit}>Set state to shit</button>
    {renderSummary ? <FormComponent2 inquiry={inquiry} test={test}></FormComponent2> : <></>}
    {/* <FormComponent2 inquiry={inquiry} test={test}></FormComponent2> */}
    {/* <FormComponent2 inquiry={{width: '404',height: '404'}}></FormComponent2> */}
    </div>
  )
}
 
// export default observer(InfoSummaryComponent);
export default InfoSummaryComponent;
