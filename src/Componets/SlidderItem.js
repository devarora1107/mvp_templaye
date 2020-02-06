
import React from 'react'
import CardMedia from "@material-ui/core/CardMedia";



const SlidderItem=(props)=>{
    let styles=props.styles
    let item=props.item

    return (
        <img style={{"borderRadius":"0px"}} src={true?"https://res.cloudinary.com/pados/image/upload/v1580986679/bright-spring-view-cameo-island-260nw-1048185397_h7m9iu.webp":"https://res.cloudinary.com/pados/image/upload/v1580235740/sample.jpg"}/ >
        // <div style={Object.assign({}, styles.slide)}>
        //     <CardMedia
        //         className={props.cardMedia}
        //         image={item%2?"https://res.cloudinary.com/pados/image/upload/v1580986679/bright-spring-view-cameo-island-260nw-1048185397_h7m9iu.webp":"https://res.cloudinary.com/pados/image/upload/v1580235740/sample.jpg"}
        //         title="Image title"
        //     />
        // </div>
    )
}

export default SlidderItem