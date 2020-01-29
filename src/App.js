import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Componets/Header'
import Template1 from '../src/Componets/template1'
import {Row} from 'react-bootstrap';
import CaroselHorizontal from '../src/Containers/CarouselHorizontal';
import Slidder from '../src/Containers/Slidder'
import { Container } from '@material-ui/core';
function App() {
  return (
      <React.Fragment>
    {/*// <div className="App">*/}
    {/*  */}
          <Container maxWidth="sm">
        <Header/>
          </Container>
          <Container maxWidth="sm">
          <Slidder/>
          </Container>

        <CaroselHorizontal/>
    {/*  // <Row>*/}
    {/*  // <Template1/>*/}
    {/*  // </Row>*/}
    {/*// </div>*/}
    </React.Fragment>
  );
}

export default App;
