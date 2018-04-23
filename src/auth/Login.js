import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            userId: ""
        };
    }
    
    //handleChange Method
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/user/login",{
            method: "POST",
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then(data => this.props.setToken(data.sessionToken))
        
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1 style={{color: "white"}}>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="username" style={{color: "white"}}>Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>

                    </FormGroup>
                    <FormGroup>

                        <Label for="password" style={{color: "white"}}>Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    
                    </FormGroup>
                    <Button color="info" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login;

//Login.js Analysis
//1. we are creating a class component called Login. This must be a class component since the state
//   of the form will change as our users enter data. The form will be handing our username and password fields.
//2. The id properties start with 'li. This is our choice/convention for 'log in'. Not 'list item.