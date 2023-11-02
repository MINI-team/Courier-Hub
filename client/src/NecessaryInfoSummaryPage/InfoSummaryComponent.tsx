import { ChangeEvent, useState } from "react";
import { Form } from "semantic-ui-react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function InfoSummaryComponent(){
    const [info, setInfo] = useState({});
    const {inquiryStore} = useStore();

    function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setInfo({...info, [name]: value})
    }

    return(
        <div style={{paddingLeft: '5%'}}>
        <Form>
          <h2>Basic information</h2>
          <Form.Group>
            <Form.Input fluid label='First name' placeholder='Jan' width={2} name="first_name"/>
            <Form.Input fluid label='Last name' placeholder='Kowalski' width={2} name="last_name"/>
          </Form.Group>
          <Form.Input fluid label='E-mail' placeholder='kowalski@example.com' width={2} name="email"/>
        </Form>
        <h1>{inquiryStore.id}</h1>
        </div>
    )
}
 
export default observer(InfoSummaryComponent);
