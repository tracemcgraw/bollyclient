import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DrinkCreate from './DrinkCreate';
import DrinksTable from './DrinksTable';
import DrinkEdit from './DrinkEdit';


class DrinkIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            drinks: [],      //We set the state for the component. Array of drinks.
            updatePressed: false,
            drinkToUpdate: {}
        };
    }


    drinkDelete = (event) => {
        console.log(event.target);
        
        fetch(`http://localhost:3000/api/log/delete/${event.target.id}`,{
           method: "DELETE",
           body: JSON.stringify({log: {id: event.target.id}}),
           headers: new Headers({
               'Content-Type': 'application/json',
               'Authorization': this.props.token
           }) 
        })
        .then((res)=>this.fetchDrinks())
    }

    
    drinkUpdate = (event, drink) => {
        console.log(drink)
        fetch(`http://localhost:3000/api/log/update/${drink.id}`, {
            method: "PUT",
            body: JSON.stringify({log: drink}), ///when we are in the body, we are calling log property. 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => {
            this.setState({updatePressed: false})
            this.fetchDrinks();
        })
    }


    setUpdatedDrink = (event, drink) => {
        this.setState({
            drinkToUpdate: drink,
            updatePressed: true
        })
    }

    componentDidMount() {
        this.fetchDrinks();
        // this.func1() 
    }


    // //New Fetch
    //     func1 = (callback) => {
    //     fetch(`https://swapi.co/api/people`)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    //     };

    
        
    fetchDrinks = () => {
        fetch("http://localhost:3000/api/log", {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({drinks: logData})
        })
    }

    render(){
        
        const drinks = this.state.drinks.length >= 1 ? //1.
        //2.
        <DrinksTable drinks={this.state.drinks} //3.
        delete={this.drinkDelete} update={this.setUpdatedDrink} /> : <h2 style={{color: "white"}}>Log a Drink into your board!</h2>
        return(
            <Container>
                <Row>
                    
                    <Col md="3">
                        <DrinkCreate token={this.props.token} updateDrinksArray={this.fetchDrinks}/>
                    </Col>
                    {/* <Col md="9">
                        <h2>Recent Drinks!</h2>
                    </Col> */}
                    <Col md="9">
                        {drinks}
                    </Col>
                </Row>
                    <Col me="12">
                    {
                        this.state.updatePressed ? <DrinkEdit t={this.state.updatePressed} update={this.drinkUpdate} drink={this.state.drinkToUpdate} />
                        : <div></div>
                    }
                    </Col>
                
            </Container>
        )
    }
}

export default DrinkIndex;

//This is the main parent in for our drink side of the application.

//1. We are checking to see if the drinks array in the state of our DrinkIndex.js is greater or equal or 1, are there any drinks.
//   When component mounts, we're grabbing all the drink in a get, so they should be there if there are any in the DB.
//2. If there are drinks, we display <DrinksTable>, if not we say "Log a drink into your board!".
//3. All props that we are sending to DrinksTable