import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {
    Navbar,         //1
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Button,
} from 'reactstrap';

class SiteBar extends Component{
    constructor(props){ //2
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    //3
    render(){
        return(
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Bolly</NavbarBrand>
                        <NavItem>
                            <Link to="/search">
                                <Button>Search</Button>
                            </Link>
                        </NavItem>
                    <NavbarToggler onClick={this.props.logout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;

//Navbar Analysis
//1. We have specific reactstrap imports, we're only grabbing what we need form the file.
//2. Constructor that defines the initial state of the component.
//3. Notice we are rendering a div that includes reactstrap components Navbar and NavbarBrand.
