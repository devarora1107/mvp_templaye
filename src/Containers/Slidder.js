import React from 'react';
import SwipeableViews from "react-swipeable-views";
import SlidderItem from '../Componets/SlidderItem'
import { autoPlay } from 'react-swipeable-views-utils';
// import Pagination from 'docs/src/modules/components/Pagination';
class Slidder extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            items:[1,2,3],
            active:0,
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
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render(){


        const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
        const  index  = this.state.index;
        return (
            <React.Fragment>
            <AutoPlaySwipeableViews  index={index} onChangeIndex={this.handleChangeIndex}>
                {
                    this.state.items.map((item)=>{
                        return <SlidderItem
                            item={item}
                            styles={this.state.styles}
                        />
                    })
                }
            </AutoPlaySwipeableViews>
            {/*<Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />*/}
            </React.Fragment>
        )
    }
}

export default Slidder