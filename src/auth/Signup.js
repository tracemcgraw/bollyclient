import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props){ //T2
        super(props);
        this.state = {
            username: "",
            userLastName: "", //T1
            password: "",
            email: "",
            isEmpty: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    //handleChange Method
                    //1
    handleChange = (event) => {
                //2
        this.setState({
                //3                     //4
            [event.target.name]: event.target.value,
        });
        
    }
    
    //handleSubmit Method
    handleSubmit = (event) => {
        //1
        fetch("http://localhost:3000/api/user", {
            method: 'POST', //2
            body: JSON.stringify({user:this.state}), //3
            headers: new Headers({
                'Content-Type': 'application/json' //4
            })
        }).then(
            (response) => response.json()//5
        ).then((data) =>{
            this.props.setToken(data.sessionToken) //6
        })
        event.preventDefault()
    }
   validateEmail = e => {
       document.getElementById('email').removeAttribute('hidden');
       e.preventDefault();
   }

    validatePassword = e =>{
        document.getElementById('password').removeAttribute('hidden');
        e.preventDefault();
    }

    validateAll = e => {
        document.getElementById('email').removeAttribute('hidden');
        document.getElementById('password').removeAttribute('hidden');
        this.handleSubmit()
        e.preventDefault();
    }


    render(){
        const validatePass = (this.state.password.length >= 6)
        const submitHandler = (!this.state.email && !validatePass) ? this.validateAll : !this.state.email ? this.validateEmail : !validatePass ? this.validatePassword : this.handleSubmit
        return(
            <div>
                <h1 className="display-4" style={{color: "#302733", fontWeight: "bold", textAlign:"center"}}>Sign Up!</h1>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="username" style={{color: "#666566", fontWeight: 'bold', fontSize: "35px"}}>First Name</Label>
                        <Input id="username" type="text" name="username" placeholder="enter name" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="userLastName" style={{color: "#666566", fontWeight: 'bold', fontSize: "35px"}}>Last Name</Label>
                        <Input id="userLastName" type="text" name="userLastName" placeholder="enter last name" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email" style={{color: "#666566", fontWeight: 'bold', fontSize: "35px"}}>Email</Label>
                        <Input id="email" type="text" name="email" placeholder="enter email" onChange={this.handleChange} required/>
                
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" style={{color: "#666566", fontWeight: 'bold', fontSize: "35px"}}>Password</Label>
                        <Input id="password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required/>
                    </FormGroup>
                    <Button outline color="info" size="lg"type="submit" style={{fontWeight: "bold", color: 'white'}} block>Submit</Button>
                    
                </Form>
            </div>
        )
    }
}

export default Signup;

//Signup.js Analysis
//1. Simular to Login.js, this is a class component that has a state. 
//   The state of the form will change as our users enter data.
//   This will be handling our username and password fields.
//2. Name property in the Input component calls: "username" and "password".
//   We will join our state to those name properties later when we want to gather
//   values for signing up a user.
//3. The id properties start with 'su'. This is our short for 'sign_up' my choice.

//Token/Authentication
//T1 We added username ad password to our state. We set these items to empty strings
//   to set the initial value for the state of the those properties.
//T2 When a user starts the application those properties should not have values.

//handleChange Method
//Eact time the user types in something we want our state to change.
//1. A function takes in the event(which is captured when the users types something into the input).
//2. We call the seState method that will allow us to change the state of the application.
//3. It takes the name field of the target, our case username and password.
//   This event.target."name" actually is targeting the name in the JSX Input in the FormGroup.
//4. We grab the value, which is what the user typed into the input fields for username and password.
//5. We added handleChange function to our username and password inputs in JSX.

//handleSubmit Method
//This function will eventually serve to do a POST for our user information in na request,
//and then get the sessionToken back in a response.
//1. We're sending a fetch request to the endpoint determined in our server,
//   that is where we go to signup. This endpoint is determined by whatever backend your using.
//2. The method of the fetch is a POST.
//3. We're including a body with our state information set as user. 
//   This correlates to the backend. This has to match what the backend is expecting.
//4. We're including header Content-Type set to application/json. This lets our server
//   know what type of information we are sending to it, so it can decide if it can handle it 
//   what to do with it. 
//5. We're resolving the promise from fetch and calling .json(), allowing us to turn the 
//   response into JSON when it resolves.
//6. We're resolving the .json() promise, and taking the data we get back from the server
//   and then calling our setToken function with the sessionToken we get back in the data object.