import React from 'react';
import { Table, Button } from 'reactstrap';


const DrinkTable = (props) => { //1.
   
    return (
        <div>
            <h3 style={{color: "white"}}>Recent Drinks</h3>
            <hr />
            <Table dark>
                <thead>
                    <tr>   
                        <th>Name</th>
                        <th>Type</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.drinks.map((drink, id)=>{ //3.
                            return( //4.
                                <tr key={id}>
                                    <th scope="row">{drink.result}</th>
                                    {/* <td>{drink.result}</td> */}
                                    <td>{drink.def}</td>
                                    <td>{drink.description}</td>
                                    <td>
                                        <Button id={drink.id} onClick={props.delete} outline color="warning">Delete</Button> {'  '} 
                                        <Button id={drink.owner} onClick={e => props.update(e, drink)} outline color="info">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default DrinkTable;


//Create a functional component that displays our data of Drink and has updatable features.
//1. We are including the props so that we can use them here.
//2. We are setting up our table to hold our information, with our header and our starting table.
//3. We're using map, which iterates through an array and performs the same operation on each item in the array.
//   We're formatting each item of the array as a table row.
//4. We bring in return so it will know what to return when doing a multi-line map.
//5. We have a key because react requires unique keys for elements created that are otherwise identical.
//6. We have two buttons, one that deletes and one that updates.
//   In the onClick we're calling functions that come from the props, that we defined in our DrinkIndex.
