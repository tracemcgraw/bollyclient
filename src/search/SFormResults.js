import React from 'react';
import './SForm.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const SFormResults = ({results}) => {
    // const link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    const resultsFormatted = results.map((element, index) =>
    
                <Card className="drink" style={{right: "1%"}}>
                <CardBody>
             

                <CardImg id="pic" width="100%" alt ="Card image cap"src={element.strDrinkThumb} />

                <Card body className="text-center">
                <CardTitle>{element.strDrink}</CardTitle>
                <br/>
                <CardTitle>Ingredients:</CardTitle>
                <br/>
                <CardText>{element.strGlass}</CardText> 
                <CardText>{element.strIngredient1} {element.strMeasure1}</CardText>                
                <CardText>{element.strIngredient2}{element.strMeasure2}</CardText>               
                <CardText>{element.strIngredient3} {element.strMeasure3}</CardText>              
                <CardText>{element.strIngredient4}{element.strMeasure4}</CardText>             
                <CardText>{element.strIngredient5} {element.strMeasure5}</CardText>
                <CardText>{element.strIngredient6} {element.strMeasure6}</CardText>
     
                <CardTitle>Instructions:</CardTitle>

                <CardText>{element.strInstructions}</CardText>
                </Card>
                </CardBody>
                </Card>
        );
    return (
        <ul id="results">
            {resultsFormatted}
        </ul>
    );
}
export default SFormResults;
