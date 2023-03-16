import React from 'react';
import { Avatar, Box, Divider, Typography  } from '@material-ui/core';

import {
    Grid
} from '@mui/material'

import { makeStyles } from '@material-ui/core/styles';

import {

} from '@material-ui/icons';

import accountAvatar from '../../assets/img/collections/_gem1.jpg';
import busdAvatar from '../../assets/img/busd.svg';

const useStyles = makeStyles(theme => ({
    root: {
        color: 'white',
        padding: '1.5rem',
        width: '100%'
    },
    toolbar: theme.mixins.toolbar,
    title: {
        textAlign: 'center',
        margin: '1.5rem auto 3rem'
    },
    outside: {
        padding: '0.2rem'
    },
    historyBox: {
        borderRadius: '1rem',
        backgroundColor: '#151620',
        padding: '1.5rem',
        // margin: '15px !important'
    },
    content: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between !important',
            textAlign: 'right'
        }
    },
    divider: {
        backgroundColor: 'wheat',
        margin: '0.5rem auto !important'
    },
    avatarIcon: {
        width: '60px',
        height: '45px',
        borderRadius: '1rem'
    },
    description: {
        marginLeft: '1rem'
    },
    busdIcon: {
        width: '20px',
        height: '20px '
    },
    flexBox: {
        display: 'flex'
    },
    grayText: {
        opacity: '0.6'
    }
}));

const OrderHistory = () => {
    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <div className = {classes.toolbar}></div>
            <Typography variant = 'h4' className = {classes.title}>
                Order History
            </Typography>
            <Grid container justifyContent = 'space-between' >
                <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = {classes.outside}>
                    <Box  className = {classes.historyBox}>
                        <Typography variant='h6'>
                            NFT History
                        </Typography>
                        <Divider className = {classes.divider} />
                        <Grid container justifyContent = 'flex-start' className = {classes.content}>
                            <Avatar variant='square' src = {accountAvatar} className = {classes.avatarIcon} />
                            <Box className = {classes.description}>
                                <Typography className = {classes.grayText}>GEM-1</Typography>
                                <Typography className = {classes.grayText}>2022/11/30 11:071</Typography>
                                <Typography className = {classes.grayText}>0.001 Nex</Typography>
                            </Box>
                        </Grid>
                        <Divider className = {classes.divider} />
                        <Typography variant='subtitle1'>
                            Total Spent
                        </Typography>
                        <Box className = {classes.flexBox}>
                            <Avatar src = {busdAvatar} className = {classes.busdIcon} />
                            <Typography className = {classes.grayText}>100</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = {classes.outside}>
                    <Box className = {classes.historyBox}>
                        <Typography variant='h6'>
                            NFT Orders
                        </Typography>
                        <Divider className = {classes.divider} />
                        <Typography variant='subtitle1' className = {classes.grayText}>
                            0.025Nex
                        </Typography>
                        <Typography variant='subtitle1' className = {classes.grayText}>
                            2022/11/30 11:07
                        </Typography>
                        <Divider className = {classes.divider} />
                        <Typography variant='h6'>
                            Total Bought
                        </Typography>
                        <Typography variant='subtitle1' className = {classes.grayText}>
                            0.025Nex
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg = {4} md = {6} sm = {12} xs = {12} className = {classes.outside}>
                    <Box className = {classes.historyBox}>
                        <Typography variant='h6'>
                            External Nex Tokens Staked
                        </Typography>
                        <Divider className = {classes.divider} />
                        <Typography variant='subtitle1' className = {classes.grayText}>
                            No external Nex tokens staked.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export { OrderHistory };
