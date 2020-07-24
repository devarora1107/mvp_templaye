import React from 'react'
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
export default class OrderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            shopDetails:{
                shopName:'',
                landmark:'',
                mobile:'',
                address:'',

            },
            items:[],
            orderDetails:{allowedToEdit:false},
            viewMore:false
        }
    }
    async componentDidMount() {
            const response = await axios.get('http://thepados.com/api/o/8')
            let items =response && response.data && response.data.data &&response.data.data.items
        let shopDetails = response && response.data && response.data.data &&response.data.data.shopDetails
        let orderDetails = response && response.data && response.data.data &&response.data.data.orderDetails
       orderDetails ={...orderDetails,allowedToEdit: !!!parseInt(orderDetails.allowedToEdit)}
        items.map(e=>{
            e.checked=true
            e.id=e.itemId
        })
        items = [items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0],items[0]]
        this.setState({items:items,shopDetails,orderDetails})
    }
    handleViewMore =()=>{
        this.setState({viewMore:!this.state.viewMore})
    }
    handleCheckBox =(e,id)=>{
        let newState =[]
        this.state.items.map(item=>{
            console.log(e.target.name,item.id)
            if(e.target.name==item.id){
                newState.push({...item,checked:!item.checked})
            }else{
                newState.push({...item})
            }


        })
        newState = [newState[0]]
        this.setState({
            items:newState
        })
    }
    handleAcceptOrder =()=>{
        console.log(this.state.items)
        axios.patch('http://thepados.com/api/o/8', {items:this.state.items})
            .then(response => this.setState({ orderDetails:{...this.state.orderDetails,allowedToEdit:false}}));
    }
    render() {
        let items = this.state.items
        if(!this.state.viewMore) items=items.slice(0,3)
        let viewMoretext = !this.state.viewMore ? 'View more':'See less'
        return <>
            <Container style={{textAlign:"center"}}>
                <h2>The pados</h2>
            </Container>
            <Container maxWidth="sm">
                <p><b>Shop Name</b>:{this.state.shopDetails.shopName}</p>
                <p><b>Mobile No.</b>: {this.state.shopDetails.mobile}</p>
                <p><b>Address</b>: {this.state.shopDetails.address}</p>
                <p><b>Landmark</b>: {this.state.shopDetails.landmarks}</p>
                <p><b>Total items</b>: {this.state.items.length}</p>
            </Container>
            <Container>
                {
                    items.map((item,i)=>{
                        return <SimpleCard
                            handleCheckBox ={this.handleCheckBox}
                            index = {i}
                            item={item}
                            key={i}
                            allowedToEdit={this.state.orderDetails.allowedToEdit}
                        />
                    })
                }
                {<Button color="primary" onClick={this.handleViewMore}>{viewMoretext}</Button>}
            </Container>
            {this.state.orderDetails.allowedToEdit &&
            <Container style={{textAlign:"center",margin:'10px 0px'}}>
                <Button variant="contained" color="primary" onClick={this.handleAcceptOrder}>Accept order</Button>
            </Container>}


        </>

    }

}
const styleSheet =  makeStyles({
    root: {
        minWidth: 120,
    },
    items:{
        // height:'50%',
        // overflowY:'scroll'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    checkBox:{
        float:'right',
        margin: '-10% 0%',
    }
});

const SimpleCard=(props)=> {
    const classes = styleSheet();
    const bull = <span className={classes.bullet}>•</span>;

    // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    return (
        <Card className={classes.root}>
            <CardContent>


                        <Typography variant="h5" component="h2">
                            {props.item.itemName}
                        </Typography>
                {   props.allowedToEdit &&
                    <Checkbox
                        checked={props.item.checked}
                        onChange={e => props.handleCheckBox(e, props.id)}
                        inputProps={{'aria-label': 'secondary checkbox'}}
                        className={classes.checkBox}
                        color="primary"
                        name={props.item.id}
                        id={props.item.id}
                        key={props.item.id}
                    />
                }
                        <Typography className={classes.pos} color="textSecondary">
                            {props.item.remarks}
                        </Typography>



            </CardContent>

        </Card>
    );
}
