import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '1rem',
        backgroundColor: '#151620',
        color: 'white',
        padding: '10px 20px !important',
        textAlign: 'center',
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
    wrapBox: {
        padding: '0.5rem'
    }
}));

const Stake = ({
    balance
}) => {
    const classes = useStyles();
    return (
        <Grid item xs = {12} sm = {12} md = {6} lg = {6} className = {classes.wrapBox}>
            <Box  className = {classes.root}>
                <Typography className = {classes.header} variant = 'h6'>
                    STAKE Nex FOR HIGH MULTIPLIER
                </Typography>
                <Grid container justifyContent = 'space-between' alignItems='center'>
                    <Typography className = {classes.Nex}>
                        Nex
                    </Typography>
                    <Typography>
                        Balance: {balance} Nex
                    </Typography>
                    <Button className = {classes.maxButton}>
                        MAX
                    </Button>
                </Grid>
                <TextField
                    className = {classes.textField}
                    variant = 'standard'
                    placeholder = 'Nex AMOUNT'
                />
                <Button className = {classes.stakeButton}>
                    <Typography variant = 'subtitle1'>
                        STAKE NOW!
                    </Typography>
                </Button>
            </Box>
        </Grid>
    )
}

export {Stake};
