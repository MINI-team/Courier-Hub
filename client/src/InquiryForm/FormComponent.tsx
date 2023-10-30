import React, { Component } from 'react'
import { Form, CheckboxProps, Grid, Container } from 'semantic-ui-react'

interface IState {
  priority?: string;
  deliveredOnWeekend?: boolean;
}

class FormComponent extends React.Component<{}, IState> {
  state: IState = {
    priority: 'low',
    deliveredOnWeekend: false
  };

  handleChangePriority = (e: React.SyntheticEvent, data: CheckboxProps) => {
    this.setState({ priority: data.value as string });
  };

  // handleChangeWeekend = (e: React.SyntheticEvent, data: CheckboxProps) => {
  //   this.setState({ deliveredOnWeekend: data.value as unknown as boolean });
  // };

  handleChangeWeekend = (e: React.SyntheticEvent, data: CheckboxProps) => {
    this.setState({ deliveredOnWeekend: !this.state.deliveredOnWeekend });
  };

  render() {
    return (
      <Form>
        <h2>Basic information</h2>
        <Form.Group>
          <Form.Input fluid label='Width (cm)' placeholder='0' width={2} />
          <Form.Input fluid label='Height (cm)' placeholder='0' width={2} />
        </Form.Group>
        {/* <Form.Group inline>
          <label>Dimensions</label>
          <Form.Input fluid placeholder='0' width={1} />
          <label>x</label>
          <Form.Input fluid placeholder='0' width={1} />
          <label>cm</label>
        </Form.Group> */}
        <Form.Group>
          <Form.Input label='Weight (g)' placeholder='0' width={2} />
          <Form.Input fluid label='Delivery date' type='date' width={2}/>
        </Form.Group>    
        
        <h2>Source Address</h2>
        <Form.Group>
          <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} />
          <Form.Input fluid label='Street number' placeholder='0A' width={2} />
          <Form.Input fluid label='Flat number' placeholder='0' width={2}/>
        </Form.Group>
        <Form.Group>
          <Form.Input fluid label='Zip code' placeholder='00-000' width={2}/>
          <Form.Input fluid label='City' placeholder='Warszawa' width={2}/>
        </Form.Group>

        <h2>Destination Address</h2>
        <Form.Group>
          <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} />
          <Form.Input fluid label='Street number' placeholder='0A' width={2} />
          <Form.Input fluid label='Flat number' placeholder='0' width={2}/>
        </Form.Group>
        <Form.Group>
          <Form.Input fluid label='Zip code' placeholder='00-000' width={2}/>
          <Form.Input fluid label='City' placeholder='Warszawa' width={2}/>
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

        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormComponent