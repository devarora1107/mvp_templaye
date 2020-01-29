import React from 'react'
import CarouselHorizontalComponent from '../Componets/CaroselHorizontal';
import { Slider } from '@material-ui/core';


class CarouselHorizontal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cards:[1,2,3],
            styles:{
                slide: {
                    padding: 15,
                    minHeight: 100,
                    color: '#fff',
                },
                slide1: {
                    background: '#FEA900',
                },
                slide2: {
                    background: '#B3DC4A',
                },
                slide3: {
                    background: '#6AC0FF',
                },
            },
        }

    }

    render(){
        const styles=this.state.styles
        return (
            // <SwipeableViews>
            //     <div style={Object.assign({}, styles.slide, styles.slide1)}>
            //         slide n°1
            //     </div>
            //     <div style={Object.assign({}, styles.slide, styles.slide2)}>
            //         slide n°2
            //     </div>
            //     <div style={Object.assign({}, styles.slide, styles.slide3)}>
            //         slide n°3
            //     </div>
            // </SwipeableViews>
            <CarouselHorizontalComponent
            cards={this.state.cards}
            />
        // <SimpleSlider/>
        )
    }

}

export default CarouselHorizontal