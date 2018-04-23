//This component will be where the user accepts user input, query the Drink API  based on input, 
//and sends the results to another component to display.

import React, { Component } from 'react';
import SFormResults from './SFormResults';
import './SForm.css';

export class SForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            results:[
                
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleKeyUp(){
        // capture user's input
        // document.getElementById('results').className ="formResults";
            let val = document.getElementById('searchInput').value;
     
            if(val === ""){
                document.getElementById('results').className = 'noDisplay'
            }

            const key = '1';

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`)

                .then(response => {
                    if (response.status !== 200) {
                        console.log('Error: ' + response.status);
                        return;
                    }
    
                    response.json().then(data => {
                        console.log(data);
                        
                        const results = data.drinks;
                        this.setState({ results: results });
                    });
                })

                .catch(err => {
                    console.log('Fetch error', err);
                    
                })
    }
    render(){
        return(
            
            <form onSubmit={this.handleSubmit} id="form">
            <h1 id="bollyTitle">Bolly</h1>
               
                <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search for a drink!" required />
                <br/>
                <br/>
                <br/>
                
                <SFormResults results={this.state.results} />
            </form>
        );
    }
}