import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Componets/Header'
import Template1 from '../src/Componets/template1'
import {Row} from 'react-bootstrap';
import CaroselHorizontal from '../src/Containers/CarouselHorizontal';
import Slidder from '../src/Containers/Slidder'
import { Container } from '@material-ui/core';
import { Switch, Route, Redirect } from "react-router-dom";
import privacy from '../src/Containers/privacy'
const mainComponent = ()=>{
    return (<React.Fragment>
        <Container maxWidth="sm">
            <Header/>
        </Container>
        {/*x*/}

        <CaroselHorizontal/>
    </React.Fragment>)
}

function App() {
  return (
      <React.Fragment>
    {/*// <div className="App">*/}
    {/*  */}
       <Switch>

           <Route exact path='/' component={mainComponent}/>
           <Route exact path = '/privacy-policy' component={privacy}/>
       </Switch>

    {/*  // <Row>*/}
    {/*  // <Template1/>*/}
    {/*  // </Row>*/}
    {/*// </div>*/}

    </React.Fragment>
  );
}

export default App;
