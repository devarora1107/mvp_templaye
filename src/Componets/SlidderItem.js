
import React from 'react'
const SlidderItem=(props)=>{
    let styles=props.styles
    let item=props.item
    console.log(item)
    let asdasdad=styles.slide1
    if(item==1){
        asdasdad=styles.slide1
    }
    if(item==2){
        asdasdad=styles.slide2
    }
    if(item==3){
        asdasdad=styles.slide3
    }
    return (
        <div style={Object.assign({}, styles.slide, asdasdad)}>
            slide {item}
        </div>
    )
}

export default SlidderItem