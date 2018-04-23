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
        ).then(data =>{
            localStorage.setItem("user", data.user.username)
            this.props.setToken(data.sessionToken)
        })   
        
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1 className="display-4" style={{color: "#5C5858", fontWeight: 'bold', textAlign: "center"}}>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>

                        <Label for="username" style={{fontWeight: 'bold', fontSize: "40px"}}>Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>

                    </FormGroup>
                    <FormGroup>

                        <Label for="password" style={{fontWeight: 'bold', fontSize: "40px"}}>Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange}/>
                    
                    </FormGroup>
                    <Button outline color="info" size="lg" type="submit" style={{color: 'white'}} block>Submit</Button>
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