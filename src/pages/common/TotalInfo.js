import React from 'react';

import {
    Box , Grid , Typography , Avatar
} from '@material-ui/core';


import {
    makeStyles
} from '@material-ui/core/styles';

import BusdIcon from '../../assets/img/busd.svg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    busdInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '10px'
    },
    busdAvatar: {
        width: '20px',
        height: '20px'
    },
    metaInfo: {
        color: 'rgb(101, 238, 252)'
    }

}));


const TotalInfo = ({
    holders ,
    amount
}) => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item xs = {6} sm = {6}>
                <Typography variant = 'subtitle1' className = {classes.metaInfo}>
                    Holders: {holders}
                </Typography>
            </Grid>
            <Grid item xs = {6} sm = {6} className = {classes.busdInfo} >
                <Avatar src = {BusdIcon} className = {classes.busdAvatar} />
                <Typography variant='subtitle1' component = 'span' className = {classes.metaInfo}>
                    {` ${amount}/Nex`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export {TotalInfo};
