import React, { Component } from 'react';
import { Form } from './SForm';

export default class SearchApp extends Component {
    render(){
        return(
            <div className="Main">
                <div className="mainDiv">
                
                    <SForm />
                </div>
            </div>
        );
    }
}

export default SearchApp;


//This is a class component (parent) that will handle searching our drink api to show results to the user on a new page.