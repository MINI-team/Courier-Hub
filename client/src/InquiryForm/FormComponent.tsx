import axios from 'axios';
import React, { ChangeEvent, Component } from 'react'
import { Form, CheckboxProps, Grid, Container } from 'semantic-ui-react'

interface IState {
  // width?: number;
  // height?: number;
  // sourceStreetName?: string;
  // sourceStreetNumber?: string;
  // sourceFlatNumber?: string;
  submitted?: boolean;
  offers?: number[];

  priority?: string;
  deliveredOnWeekend?: boolean;
}

class FormComponent extends React.Component<{}, IState> {
  state: IState = {
    submitted: false,
    offers: [],
    priority: 'low',
    deliveredOnWeekend: false
  };

  handleChangePriority = (e: React.SyntheticEvent, data: CheckboxProps) => {
    this.setState({ priority: data.value as string });
  };

  handleChangeWeekend = (e: React.SyntheticEvent, data: CheckboxProps) => {
    this.setState({ deliveredOnWeekend: !this.state.deliveredOnWeekend });
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
    console.log(`${name} is ${this.state[name]}`);
    console.log(this.state);
  }

  handleSubmit = () => {
    this.setState({submitted: true});
    axios.post("http://localhost:5000/inquiries", this.state)
    .then( response => console.log(`aaa ${response.data}`));

    axios.get("http://localhost:5000/offer1")
    .then(response => this.addOffer(response.data));
    axios.get("http://localhost:5000/offer2")
    .then(response => this.addOffer(response.data));
    axios.get("http://localhost:5000/offer3")
    .then(response => this.addOffer(response.data));

    console.log("form submitted");
  }

  addOffer(offer: {price: number}) {
    this.setState((prevState) => ({
      offers: [...prevState.offers, offer.price]
    }));
    console.log(`offers: ${this.state.offers}`);
  }

  render() {
    return (
      <div>
        {this.state.submitted ? 
          <div style={{marginTop: '10%'}}>
            <h1>Form submitted</h1>
            <h1>{this.state.offers?.map(offer => <li>{offer}</li>)}</h1>
          </div>
          :
        <div style={{paddingLeft: '5%'}}>
        <Form onSubmit={this.handleSubmit}>
          <h2>Basic information</h2>
          <Form.Group>
            <Form.Input fluid label='Width (cm)' placeholder='0' width={2} name="width" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Height (cm)' placeholder='0' width={2} name="height" onChange={this.handleInputChange}/>
          </Form.Group>
          {/* <Form.Group inline>
            <label>Dimensions</label>
            <Form.Input fluid placeholder='0' width={1} />
            <label>x</label>
            <Form.Input fluid placeholder='0' width={1} />
            <label>cm</label>
          </Form.Group> */}
          <Form.Group>
            <Form.Input label='Weight (g)' placeholder='0' width={2} name="weight" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Delivery date' type='date' width={2} name="date" onChange={this.handleInputChange}/>
          </Form.Group>    
          
          <h2>Source Address</h2>
          <Form.Group>
            <Form.Input fluid label='Street name' placeholder='Przykładowa' width={6} name="sourceStreetName" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Street number' placeholder='0A' width={2} name="sourceStreetNumber" onChange={this.handleInputChange}/>
            <Form.Input fluid label='Flat number' placeholder='0' width={2} name="sourceFlatNumber" onChange={this.handleInputChange}/>
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

          <Form.Button>Submit</Form.Button>
        </Form>
        </div>}
      </div>
    )
  }
}

export default FormComponent