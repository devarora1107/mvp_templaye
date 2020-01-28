import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Componets/Header'
import Template1 from '../src/Componets/template1'
import {Row} from 'react-bootstrap';
import CaroselHorizontal from '../src/Containers/CarouselHorizontal';

function App() {
  return (
      <Row>
    {/*// <div className="App">*/}
    {/*  */}
        <Header/>
        <CaroselHorizontal/>
    {/*  // <Row>*/}
    {/*  // <Template1/>*/}
    {/*  // </Row>*/}
    {/*// </div>*/}
    </Row>
  );
}

export default App;
