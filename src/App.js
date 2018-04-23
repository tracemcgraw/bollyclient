import React, { Component } from 'react';
import Auth from './auth/Auth';
import Sitebar from './home/Navbar';
import Splash from './home/Splash';
import { SForm } from './search/SForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: "" //T1
    }
  }

  componentWillMount(){
    const token = localStorage.getItem('token'); //T4
    if(token && !this.state.sessionToken){
      this.setState({ sessionToken: token });
    }
  }
                  //T2
  setSessionState = (token) => {
    localStorage.setItem('token', token); //T3
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  }

  protectedView = () => {
    if (this.state.sessionToken === localStorage.getItem('token')){
      return(
        <Switch>
          <Route path="/search" exact>
            <SForm/>
          </Route>
          <Route path="/" exact>
            <Splash sessionToken={this.state.sessionToken} />
          </Route>
          
        </Switch>
      )
    } else {
      return(
        <Route path='/auth'>
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }
  }
  render() {
   
    return (
      <Router>
        <div>
            <Sitebar clickLogout={this.logout}/>
            {this.protectedView()} 
        </div>
      </Router>
    );
  }
}

export default App;

//Token Analysis
//T1 We're storing our sessionToken in the state. This will allow us to pass the token to child components.
//T2 Created a function called setSessionState that takes a token in, and then uses that to 
//   set the state of sessionToken equal to that token.
//T3 Setting the token in the localStorage. If page refreshes we can grab it from the local storage again.
//   local storage is an extremely secure place to store things.
//T4 componentWillMount we are grabbing the token if it exists from the localStorage.
//T5 We set the token in the state if the state is still empty. Useful on page refreshes.
//   This prevents the user from logging into the app upon every visit.

//IMPORTANT Analysis
//Router is what we wrap our application in, so that we can use react-router-dom in our app.
//Without this we can't route to specific components, or anything within our application.
//It's common for Router to be wrapped around the divs in the highest parent component.
