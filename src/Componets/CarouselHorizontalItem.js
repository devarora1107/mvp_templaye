import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Slidder from "../Containers/Slidder";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from 'react-swipeable-views-utils';
import CardMedia from "@material-ui/core/CardMedia";

const  CarouselHorizontalItem = (props)=>{
    const classes = useStyles();
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    return (
        <Grid item key={props.card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                {/*<CardMedia*/}
                {/*    className={classes.cardMedia}*/}
                {/*    image={1%2?"https://res.cloudinary.com/pados/image/upload/v1580986679/bright-spring-view-cameo-island-260nw-1048185397_h7m9iu.webp":"https://res.cloudinary.com/pados/image/upload/v1580235740/sample.jpg"}*/}
                {/*    title="Image title"*/}
                {/*/>*/}

                <Slidder
                />

                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.card.heading}
                        <Button  size="small" color="primary">
                            Share on whatsApp
                        </Button>
                    </Typography>

                    {/*<Typography>*/}
                    {/*    This is a media card. You can use this section to describe the content.*/}
                    {/*</Typography>*/}
                </CardContent>
                {/*<CardActions className={classes.actions}>*/}


                {/*</CardActions>*/}
            </Card>
        </Grid>

    )
}


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    actions:{

    }
}));
export default CarouselHorizontalItem