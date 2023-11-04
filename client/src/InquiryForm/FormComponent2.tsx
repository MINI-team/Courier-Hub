import { ChangeEvent, useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { IInquiry } from '../models/inquiry';

interface Props {
    inquiry: IInquiry | undefined;
    test: string;
}

export default function FormComponent2({inquiry: passedInquiry, test: test1}: Props){
    const initialState = passedInquiry || {
        width: 'Form initial',
        height: 'Form initial'
    }

    const [inquiry, setInquiry] = useState<IInquiry>(initialState);
    const [test, setTest] = useState(test1);

    useEffect(() => {
        console.log(`useEffect (in form2)`);
        console.log('Inquiry from state:');
        console.log(inquiry);
        console.log('Inquiry from props:');
        console.log(initialState);
        console.log('Test from state:');
        console.log(test);

        // setInquiry(initialState);
      }, [inquiry, initialState]);
      
    // const [width, setWidth] = useState('1');

    function handleSubmit() {
        // createOrEdit(activity);
    }

    function displayInfo(){
        console.log(`Inquiry from state: `);
        var inq = inquiry
        console.log(inq);
        console.log(`Inquiry from props: `);
        console.log(initialState);
        console.log(`Test from state: `);
        console.log(test);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setInquiry({ ...inquiry, [name]: value });
        // console.log(`Width (from width) is ${width}`)
        console.log(`Width (from inquiry) is ${inquiry.width}`)
        console.log(`Width (from initialState) is ${initialState.width}`)
    }

    return (
    <Form onSubmit={handleSubmit}>
        <h2>Basic information</h2>
        <h2>{test}</h2>
        <h2>{test1}</h2>
        <h2>{initialState.width}</h2>
        <h2>{inquiry.width}</h2>
        <button onClick={displayInfo}>Show info about inquiry from props</button>
        <Form.Group>
            {/* <Form.Input fluid type='number' label='Width (cm)' placeholder='0' width={2} name="width" value={width} onChange={e => setWidth(e.target.value)}/> */}
            <Form.Input fluid label='Width (cm)' placeholder='0' width={2} name="width" value={inquiry.width} onChange={handleInputChange}/>
            <Form.Input fluid label='Height (cm)' placeholder='0' width={2} name="height" value={inquiry.height} onChange={handleInputChange}/>
        </Form.Group>
        {/* <Form.Group>
            <Form.Input label='Weight (g)' placeholder='0' width={2} name="weight" value={inquiryInfo.weight}/>
            <Form.Input fluid label='Delivery date' type='date' width={2} name="date" value={inquiryInfo.date}/>
        </Form.Group> */}
        
        {/* <h2>Source Address</h2>
        <Form.Group>
            <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="sourceStreetName" value={inquiryInfo.width}/>
            <Form.Input fluid label='Street number' placeholder='0A' width={2} name="sourceStreetNumber" value={inquiryInfo.width}/>
            <Form.Input fluid label='Flat number' placeholder='0' width={2} name="sourceFlatNumber" value={inquiryInfo.width}/>
        </Form.Group>
        <Form.Group>
            <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="sourceZipCode" onChange={this.handleInputChange}/>
            <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="sourceCity" onChange={this.handleInputChange}/>
        </Form.Group>

        <h2>Destination Address</h2>
        <Form.Group>
            <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="destinationStreetName" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Street number' placeholder='0A' width={2} name="destinationStreetNumber" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Flat number' placeholder='0' width={2} name="destinationFlatNumber" onChange={this.handleInputChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="destinationZipCode" onChange={this.handleInputChange}/>
            <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="destinationCity" onChange={this.handleInputChange}/>
        </Form.Group>
        
        <Form.Group inline>
        <label>Priority</label>
        <Form.Radio
            label='low'
            value='low'
            checked={this.state.priority === 'low'}
            onChange={this.handleChangePriority}
        />
        <Form.Radio
            label='high'
            value='high'
            checked={this.state.priority === 'high'}
            onChange={this.handleChangePriority}
        />
        </Form.Group>
        <Form.Group inline>
        <label>Delivery on weekend</label>
        <Form.Radio
            label='no'  
            checked={this.state.deliveredOnWeekend === false}
            onChange={this.handleChangeWeekend}
        />
        <Form.Radio
            label='yes'
            checked={this.state.deliveredOnWeekend === true}
            onChange={this.handleChangeWeekend}
        />
        </Form.Group>
        <Form.Button>Submit</Form.Button> */}
    </Form>
    )
}

// export default FormComponent2