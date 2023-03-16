import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Divider, Grid, TextField, Typography , Box } from '@material-ui/core';

import {
    InfoOutlined
} from '@material-ui/icons';

import busdIcon from '../../../assets/img/busd.svg'
import { InfoC } from '../../../Layout/component/InfoC';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '1rem',
        backgroundColor: '#151620',
        color: 'white',
        padding: '10px 20px !important',
        textAlign: 'center',
        position: 'relative'
        // margin: '15px'
    },
    header: {
        margin: '10px auto 50px'
    },
    Nex: {
        color: 'rgb(101, 238, 252)'
    },
    maxButton: {
        border: '1px solid #fb3640',
        color: 'wheat',
        borderRadius: '1rem',
        fontSize: '.7rem',
        padding: '.25rem',
        "&:hover": {
            backgroundColor: '#fb3640'
        }
    },
    textField: {
        marginTop: '15px',
        width: '100%',
        "& input": {
            color: 'white',
            textAlign: 'right'
        },
        "& .MuiInput-underline , & .MuiInput-underline:after": {
            borderBottom: '1px solid wheat'
        }
    },
    stakeButton: {
        marginTop: '3.5rem',
        backgroundColor: '#fb3640',
        borderRadius: '0.75rem',
        color: 'white',
        padding: '0.75rem 1rem',
        margin: 'auto',
        "&:hover": {
            backgroundColor: '#fb3640',
        }
    },
    infoIcon: {
        position: 'absolute',
        right: '1rem',
        top: '1.5rem'
    },
    busdIcon: {
        width: '16px',
        height: '16px'
    },
    smallBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    infoContainer: {
        margin: '15px auto 5px'
    },
    divider: {
        backgroundColor: 'wheat',
        margin: '20px auto'
    },
    rewardInfoContainer: {
        margin: '15px auto 5px',
        [theme.breakpoints.down('md')]: {
            display: 'block',
            textAlign: 'center'
        }
    },
    wrapBox: {
        padding: '0.5rem'
    }
}));

const NexBalance = ({
    // balance
}) => {
    const classes = useStyles();


    return (
        <Grid item xs = {12} sm = {12} md = {6} lg = {6} className = {classes.wrapBox}>
            <Box className = {classes.root}>

                <Typography className = {classes.header} variant = 'h6'>
                    Your Nex Balance
                </Typography>
                <InfoOutlined className = {classes.infoIcon} />
                <Grid container justifyContent='space-between' alignItems='center' className = {classes.infoContainer}>
                    <Typography variant = 'h6'>
                        In Wallet
                    </Typography>
                    <Grid item direction='column' >
                        <Typography variant = 'subtitle2'>
                            0 Nex
                        </Typography>
                        <Typography className = {classes.smallBox}>
                            <Avatar src = {busdIcon} className = {classes.busdIcon} />
                            ~0
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' alignItems='center'  className = {classes.infoContainer}>
                    <Typography variant = 'h6'>
                        Staked
                    </Typography>
                    <Grid item direction='column'>
                        <Typography variant = 'subtitle2'>
                            0.0309025 Nex
                        </Typography>
                        <Typography className = {classes.smallBox}>
                            <Avatar src = {busdIcon} className = {classes.busdIcon} />
                            ~186.09
                        </Typography>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider} />
                <Grid container justifyContent='space-between' alignItems='center'  className = {classes.infoContainer}>
                    <Typography variant = 'h6'>
                        Next Reward
                    </Typography>
                    <Grid item direction='column'>
                        <Typography variant = 'subtitle2'>
                            0.00003 Nex
                        </Typography>
                        <Typography className = {classes.smallBox}>
                            <Avatar src = {busdIcon} className = {classes.busdIcon} />
                            ~0.18
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' alignItems='center'  className = {classes.rewardInfoContainer}>
                    <Typography variant = 'h6'>
                        Next Reward In
                    </Typography>
                    <Grid item direction='column'>
                        {/* <Typography className = {classes.smallBox}> */}
                            12 hours 55 minutes 50 seconds
                        {/* </Typography> */}
                    </Grid>
                </Grid>
            </Box>




        </Grid>
    )
}

export {NexBalance};
