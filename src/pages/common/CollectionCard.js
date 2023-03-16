import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    Grid , Avatar , Typography
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    collectionPiece: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#6c000d',
        border: '2px solid black',
        borderRadius: '0.5rem',
        padding: '0 !important',
        position: 'relative',
        "&:hover" : {
            // backgroundColor: 'grey',
            cursor: 'pointer',
            borderColor: 'rgb(45, 191, 59)',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 6px 10px, rgb(45 191 59) 0px 0px 10px',
            transform: 'scale(1.1)',
            transitionDuration: '.25s',
        },
    },
    collectionImg: {
        width: '100%',
        height: 'auto',
        mixBlendMode: 'multiply',
    },
    collectionName: {
        color: 'wheat',
        backgroundColor: 'black',
        padding: '8px 10px',
        textAlign: 'center',
    },
    collectionDescription: {
        position: 'absolute' ,
        top: '20%' ,
        width: '100%' ,
        textAlign: 'center' ,
        padding: '15px'
    }
}));

const CollectionCard = ({
    name,
    url,
    active,
    setSelectedCollectionIndex,
    index
}) => {
    const classes = useStyles();
    const handleClick = () => {
        setSelectedCollectionIndex(index);
    }
    return (
        <Grid item xs = {5} sm = {3} md = {3}
            className = {classes.collectionPiece}
            style = {{ margin:'10px' , backgroundColor: active? 'rgb(45, 191, 59)': '#6c000d' }}
            onClick = {handleClick}
        >
            <Avatar
                src = {require(`../../assets/img/collections/${url}`)}
                className = {classes.collectionImg}
                variant = 'square'
                style = {{ mixBlendMode: active? 'unset': 'multiply' }}
            />

            <Typography className = {classes.collectionName}>
                {name}
            </Typography>
            {
                !active?
                    <Typography variant = 'h6' className = {classes.collectionDescription} >
                        UpGrade Now!
                    </Typography>
                    :''
            }
        </Grid>
    )
}


export { CollectionCard }
