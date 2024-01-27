import { ChangeEvent, useEffect, useState } from "react";
import { CheckboxProps, Form } from "semantic-ui-react";
import { IInquiry} from "../models/inquiry";
import {useHistory } from 'react-router-dom';

export default function FormComponent() {
    const history = useHistory()
    const [inquiry, setInquiry] = useState<IInquiry>({
        id:-1,
        deliveredOnWeekend:false
        
    })

    const handleChangeWeekend = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
        setInquiry({...inquiry, deliveredOnWeekend: !inquiry.deliveredOnWeekend})
    }

    const handleChangePriority = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
        setInquiry({...inquiry, priority: data.value as string})
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setInquiry({...inquiry, [name]:value})
    }
    
    useEffect(() => {
        // console.log(inquiry)
    }),[inquiry]

    const handleSubmit = () => {
        history.push('/offers', {inquiry: inquiry})
    }

    return (
        <div data-testid="form-page">
            {

                <div style={{ paddingLeft: '5%' }}>
                    <Form>

                        <h2>Basic information there</h2>
                        <Form.Group>
                            <Form.Input fluid label='Width (cm)' placeholder='0' width={2} name="width" onChange={handleInputChange} />
                            <Form.Input fluid label='Height (cm)' placeholder='0' width={2} name="height" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Weight (g)' placeholder='0' width={2} name="weight" onChange={handleInputChange} />
                            <Form.Input fluid label='Delivery date' type='date' width={2} name="date" onChange={handleInputChange} />
                        </Form.Group>

                        <h2>Source Address</h2>
                        <Form.Group>
                            <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="sourceStreetName" onChange={handleInputChange} />
                            <Form.Input fluid label='Street number' placeholder='0A' width={2} name="sourceStreetNumber" onChange={handleInputChange} />
                            <Form.Input fluid label='Flat number' placeholder='0' width={2} name="sourceFlatNumber" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="sourceZipCode" onChange={handleInputChange} />
                            <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="sourceCity" onChange={handleInputChange} />
                        </Form.Group>

                        <h2>Destination Address</h2>
                        <Form.Group>
                            <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="destinationStreetName" onChange={handleInputChange} />
                            <Form.Input fluid label='Street number' placeholder='0A' width={2} name="destinationStreetNumber" onChange={handleInputChange} />
                            <Form.Input fluid label='Flat number' placeholder='0' width={2} name="destinationFlatNumber" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="destinationZipCode" onChange={handleInputChange} />
                            <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="destinationCity" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group inline>
                            <label>Priority</label>
                            <Form.Radio
                                label='low'
                                value='low'
                                checked={inquiry.priority === 'low'}
                                onChange={handleChangePriority}
                            />
                            <Form.Radio
                                label='high'
                                value='high'
                                checked={inquiry.priority === 'high'}
                                onChange={handleChangePriority}
                            />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Delivery on weekend</label>
                            <Form.Radio
                                label='no'
                                checked={inquiry.deliveredOnWeekend === false}
                                onChange={handleChangeWeekend}
                            />
                            <Form.Radio
                                label='yes'
                                value = 'no'
                                checked={inquiry.deliveredOnWeekend === true}
                                onChange={handleChangeWeekend}
                            />
                        </Form.Group>

                        <Form.Button onClick={handleSubmit}>Submit</Form.Button>
                    </Form>
                </div>}
        </div>
    )
}