import React from 'react';
import {Row,Col,Navbar,Container} from 'react-bootstrap';
import './header.css';
const Header = props =>{
    return (
        
            <Container style={{padding:"0px"}}>
            <Navbar expand="lg" variant="light" bg="light">
                
                <Navbar.Brand style={{position:"center"}}href="#">Pados</Navbar.Brand>
{/*                <p>English</p>*/}
{/*                <label class="switch">*/}
{/*  <input type="checkbox"/>*/}
{/*  <span class="slider round"></span>*/}
{/*</label>*/}
{/*            <p>Hindi</p>*/}
            </Navbar>
            </Container>

    )
}

export default Header