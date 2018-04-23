import React, { Component } from 'react';
import DrinkIndex from '../drinks/DrinkIndex';
import { Button } from 'reactstrap';



const Splash = (props) => {
    return(
        <div>
            
            <DrinkIndex token={props.sessionToken} />

        </div>
    )
}

export default Splash;