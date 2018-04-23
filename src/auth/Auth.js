import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';


    //1         //T1
const Auth = (props) => { 
    return(
        
        <Container className="auth-container">
        
            <div>
            <Jumbotron fluid  style={{textAlign: "center", opacity: "0.7", backgroundColor: "grey", color: "white"}}>
                <Container fluid>
                <h1 className="display-2">Welcome to Bolly!</h1>
                <h1 className="display-4">Let's get mixing!</h1> <br/>
                <h3>The drinking app that allows you to record your own drinks.</h3>
                <h3>Use Bolly to search for more drinks recipes to create!</h3> <br/>
                <h5>* By registering yourself an account on Bolly, you must be the legal age to drink and are cautioned to drink responsibly. *</h5>
                </Container>
            </Jumbotron>
            </div>
            <Row>
                    <Col md="6">
                                    {/* T2  T3    T4*/}
                        <Signup setToken={props.setToken} />
                    </Col>
                    <Col md="6">
                                        {/* 5 */}
                        <Login setToken={props.setToken} />
                    </Col>
            </Row>
        </Container>
    )
}

export default Auth;

//Auth.js Analysis
//1. We are creating a functional component. It has no state, and it will simply pull
//   in the props that will be passed down eventually.
//2. Currently, this component is basially going to hold our login nad signup forms 
//   side by side.

//Token
//1. We are adding props to our parameter. Auth is a functinal component, and like a fuction
//   it can take in arguments to be used throughour the function.
//2. We create a property(prop) called setToken. This will allow us to pass the token down
//   to our Signup function. This is not the same as setToken in App.js.
//   It's a property that will be associated with a lower component.
//   Named the same for clearly bridging the props through the undirectional flow.
//3. These props are tethered to the props parameter in the parens above.
//4. When we use the dot accessor on that props variable, we can use access the
//   access the properties from App.js. Look in the JSX for the property setToken
//5. We do the same process for login.