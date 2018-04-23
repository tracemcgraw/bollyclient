import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class DrinkEdit extends React.Component {

    constructor(props){
        super(props);
            this.state = {
            id: "",
            result: "",
            description: "",
            def: ""
        };
    }
    componentWillMount(){
        console.log(this.props);
        
        this.setState({
            id: this.props.drink.id,
            result: this.props.drink.result,
            description: this.props.drink.description,
            def: this.props.drink.def
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        
        this.props.update(event, this.state)
    }
    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <ModalHeader >Log a Drink</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="result">Result</Label>
                                <Input id="result" type="text" name="result" value={this.state.result} 
                                placeholder="Enter Drink" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="def">Type</Label>
                                <Input type="select" name="def" id="def" value={this.state.def} onChange={this.handleChange} placeholder="Type">
                                <   option></option>
                                    <option value="Cocktail">Cocktail</option>
                                    <option value="Beer">Beer</option>
                                    <option value="Wine">Wine</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Notes</Label>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" outline color="success">Submit</Button>
                        </Form> 
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default DrinkEdit;