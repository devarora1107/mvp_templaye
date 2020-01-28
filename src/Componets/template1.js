import React from 'react'
import {Col} from 'react-bootstrap';
import Template1Items from './Template1Items'
const Template1=(props)=>{
    let arrrr=[1,2,3,4,5]
    return arrrr.map((items)=>{
        return (
            <Col sm={3}>
        <Template1Items/>
            </Col>)
    })
}

export default Template1