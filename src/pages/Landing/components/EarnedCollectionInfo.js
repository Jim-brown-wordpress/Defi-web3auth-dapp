import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';

import { Container, Divider, Grid, Typography } from'@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
        backgroundColor: '#151620',
        borderRadius: '0 0 1rem 1rem',
        textAlign: 'center'
    },
    header: {
        margin: '20px auto 12px auto',
        fontWeight: 600
    },
    subTitle: {
        marginBottom: '30px',
        color: 'wheat'
    },
    divider: {
        backgroundColor: 'gray'
    },
    title: {
        color: 'wheat'
    },
    content: {
        fontWeight: 900
    }
}));


const EarnedCollectionInfo = ({
    collectionName,
    totalUsers
}) => {

    const classes = useStyles();

    const data = [
        {header: 'L1' , content: 0},
        {header: 'L2' , content: 0},
        {header: 'L3' , content: 0},
        {header: 'L4' , content: 0},
        {header: 'L5' , content: 0},
        {header: 'L6' , content: 0},
        {header: 'L7' , content: 0},
        {header: 'L8' , content: 0},
        {header: 'L9' , content: 0},
        {header: 'L10' , content: 0},
    ];

    return (
        <Container maxWidth = 'md' className = {classes.root}>
            <Typography variant = 'h4' className = {classes.header}>
                COLLECTION INFO
            </Typography>
            <Typography variant = 'subtitle1' className = {classes.subTitle}>
                NFT {collectionName}
            </Typography>
            <Typography variant = 'subtitle1' className = {classes.subTitle}>
                Total Users: <span> {totalUsers} </span>
            </Typography>
            <Grid container justifyContent='space-between' style = {{ width: '80%' , margin: 'auto' }}>
                {
                    data.map((item , index) => (
                        <Grid item direction= 'column' xs = {4} sm = {4} md = {1} lg = {1} style = {{ padding: '5px' }}>
                            <Typography>
                                {item.header}
                            </Typography>
                            <Divider className = {classes.divider} />
                            <Typography>
                                {item.content}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}


export {EarnedCollectionInfo};
