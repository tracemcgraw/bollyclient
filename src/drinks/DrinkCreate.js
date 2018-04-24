import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DrinkCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            result: "",
            description: "",
            def: ""
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
//1.
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/log`, {
            method: "POST",
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })

        })

        .then((response) => response.json())
        .then((logData) => {
            console.log(logData);
            
            this.props.updateDrinksArray();
            this.setState({
                result: "",
                description: "",
                def: ""
            })
        })
    }
   

    render(){
        var pageStyle = {
            backgroundColor: "#66b3ff"
          }
        return(
            <div>
                <h1 style={{color: "white"}}>Bartender: {localStorage.getItem('user')}</h1>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for ="result" style={{color: "white", fontSize:"30px"}}>Drink Name</Label>
                        <Input id="result" type="text" name="result" value={this.state.result} placeholder="Enter the name" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="def" style={{color: "white", fontSize: "30px"}}>Type</Label>
                        <Input type="select" name="def" id="def" value={this.state.def} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Cocktail">Cocktail</option>
                            <option value="Beer">Beer</option>
                            <option value="Wine">Wine</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description" style={{color: "white", fontSize: "30px"}}>Notes</Label>
                        <Input id="description" type="textarea" name="description" value={this.state.description} placeholder="Tell us about your drink!" onChange={this.handleChange} />
                    </FormGroup>
                    <Button id="bCreate" type="submit" size="lg" outline color="info" block style={{fontWeight: 'bold'}}>Submit Drink!</Button>
                    <br/>
                    <br/>
                </Form>
                
            </div>
        )
    }
}

export default DrinkCreate;

//This is going to allow us to have the functionality to create a drink.
// 1.We are creating functions that will allow the user to change the state based on their input.