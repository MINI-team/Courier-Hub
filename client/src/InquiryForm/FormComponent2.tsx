import { ChangeEvent, useEffect, useState } from 'react'
import { Button, CheckboxProps, Form } from 'semantic-ui-react'
import { IInquiry, getEmptyInquiry } from '../models/inquiry';

interface Props {
    inquiry: IInquiry | undefined;
}

export default function FormComponent2({inquiry: passedInquiry}: Props){
    const initialState = passedInquiry || getEmptyInquiry;
    const [inquiry, setInquiry] = useState<IInquiry>(initialState);
    const [editMode, setEdit] = useState(false);

    useEffect(()=>{
        console.log("hello from summary");
    })

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        if(editMode)
            setInquiry({ ...inquiry, [name]: value });
    }

    function handleChangePriority (_e: React.SyntheticEvent, data: CheckboxProps)  {
        if(editMode)
            setInquiry({ ...inquiry, priority: data.value as string });
    };
    
    function handleChangeWeekend (_e: React.SyntheticEvent, _data: CheckboxProps)  {
        if(editMode)
            setInquiry({ ...inquiry, deliveredOnWeekend: !inquiry.deliveredOnWeekend });
    };

    return (
    <div>
        <Button color="facebook" onClick={() => setEdit(true)}>Edit inquiry info</Button>
        <Form>
            <h2>Basic information</h2>
            <Form.Group>
                <Form.Input fluid label='Width (cm)' placeholder='0' width={2} name="width" value={inquiry.width} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Height (cm)' placeholder='0' width={2} name="height" value={inquiry.height} onChange={handleInputChange} disabled={!editMode}/>
            </Form.Group>
            <Form.Group>
                <Form.Input label='Weight (g)' placeholder='0' width={2} name="weight" value={inquiry.weight} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Delivery date' type='date' width={2} name="date" value={inquiry.date} onChange={handleInputChange} disabled={!editMode}/>
            </Form.Group>
            
            <h2>Source Address</h2>
            <Form.Group>
                <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="sourceStreetName" value={inquiry.sourceStreetName} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Street number' placeholder='0A' width={2} name="sourceStreetNumber" value={inquiry.sourceStreetNumber} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Flat number' placeholder='0' width={2} name="sourceFlatNumber" value={inquiry.sourceFlatNumber} onChange={handleInputChange} disabled={!editMode}/>
            </Form.Group>
            <Form.Group>
                <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="sourceZipCode" value={inquiry.sourceZipCode} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="sourceCity" value={inquiry.sourceCity}  onChange={handleInputChange} disabled={!editMode}/>
            </Form.Group>

            <h2>Destination Address</h2>
            <Form.Group>
                <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="destinationStreetName" value={inquiry.destinationStreetName} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Street number' placeholder='0A' width={2} name="destinationStreetNumber" value={inquiry.destinationStreetNumber} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='Flat number' placeholder='0' width={2} name="destinationFlatNumber" value={inquiry.destinationFlatNumber} onChange={handleInputChange} disabled={!editMode}/>
            </Form.Group>
            <Form.Group>
                <Form.Input fluid label='Zip code' placeholder='00-000' width={2} name="destinationZipCode" value={inquiry.destinationZipCode} onChange={handleInputChange} disabled={!editMode}/>
                <Form.Input fluid label='City' placeholder='Warszawa' width={2} name="destinationCity" value={inquiry.destinationCity}  onChange={handleInputChange} disabled={!editMode}/>
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
                checked={inquiry.deliveredOnWeekend === true}
                onChange={handleChangeWeekend}
            />
            </Form.Group>
        </Form>
    </div>
    )
}

// export default FormComponent2