import React from 'react';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import {
    InfoOutlined
} from '@material-ui/icons'

import busdIcon from '../../../assets/img/busd.svg';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: '#151620',
        padding: '1rem',
        color: 'white'
    },
    subBox: {
        padding: '0.5rem'
    },
    rowBox: {
        display: 'flex',
        alignItems: 'center'
    },
    infoIcon: {
        marginLeft: '5px'
    },
    busdIcon: {
        marginRight: '5px',
        width: '15px',
        height: '15px'
    },
    wrapBox: {
        padding: '0.5rem'
    }
}));


const OtherStakingInfo = () => {
    const classes = useStyles();
    return (
        <Grid container justifyContent='flex-end' style = {{ marginTop: '20px' }}>
            <Grid item md = {6} sm = {12} xs = {12}  className = {classes.wrapBox}>
                <Box className = {classes.root}>
                    <Grid container justifyContent ='space-between' className = {classes.subBox}>
                        <Typography>
                            Your Nex Multiplier
                        </Typography>
                        <Typography>
                            1x
                        </Typography>
                    </Grid>
                    <Grid container justifyContent ='space-between' className = {classes.subBox}>
                        <Typography  className = {classes.rowBox}>
                            Average Nex Multiplier
                            <InfoOutlined className = {classes.infoIcon} />
                        </Typography>
                        <Typography>
                            3.06x
                        </Typography>
                    </Grid>
                    <Grid container justifyContent ='space-between' className = {classes.subBox}>
                        <Typography  className = {classes.rowBox}>
                            Treasury Funds
                            <InfoOutlined className = {classes.infoIcon} />
                        </Typography>
                        <Typography  className = {classes.rowBox}>
                            <Avatar src = {busdIcon} className = {classes.busdIcon} />
                            6,194,040
                        </Typography>
                    </Grid>
                    <Grid container justifyContent ='space-between' className = {classes.subBox}>
                        <Typography  className = {classes.rowBox}>
                            TVL
                            <InfoOutlined className = {classes.infoIcon} />
                        </Typography>
                        <Typography  className = {classes.rowBox}>
                            <Avatar src = {busdIcon} className = {classes.busdIcon} />
                            142,648,073
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}


export {OtherStakingInfo};
