import { ChangeEvent, useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import { IInquiry, getEmptyInquiry } from '../models/inquiry';

interface Props {
    inquiry: IInquiry | undefined;
}

export default function FormComponent2({inquiry: passedInquiry}: Props){
    const initialState = passedInquiry || getEmptyInquiry;

    const [inquiry, setInquiry] = useState<IInquiry>(initialState);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setInquiry({ ...inquiry, [name]: value });
    }

    return (
    <Form>
        <h2>Basic information</h2>
        <Form.Group>
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