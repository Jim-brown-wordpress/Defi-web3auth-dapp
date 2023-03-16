import React from 'react';
import {
    Container, TextField, Typography , Button
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        color: 'white',
        textAlign: 'center',
        marginBottom: '0.5rem'
    },
    toolbar: theme.mixins.toolbar,
    header: {
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
        marginTop: '2rem'
    },
    subtitle: {
        color: 'wheat',
        marginTop: '0.5rem'
    },
    title: {
        fontWeight: 700,
        marginTop: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px !important'
        }
    },
    content: {
        color: 'rgb(101, 238, 252)'
    },
    box: {
        backgroundColor: '#151620',
        marginTop: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        padding: '2rem'
    },
    boxTitle: {
        fontWeight: 700,
        marginTop: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px !important'
        },
        padding: '1rem'
    },
    boxContent: {
        color: 'wheat',
        marginTop: '0.5rem',
        textAlign: 'left'
    },
    walletInput: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: '1rem',
        border: '2px solid #000',
        padding: '0.75rem',
        top: '10px',
        '& input': {
            color: 'white',
            fontSize: '20px',
            padding: '0.5rem'
        },
        '&:hover , &:focus': {
            borderColor: '#fb3640'
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'unset'
        },

        [theme.breakpoints.down('sm')]: {
            '& input': {
                fontSize: '12px'
            }
        }
    },
    button: {
        marginTop: '1.5rem',
        backgroundColor: '#fb3640',
        color: 'white',
        '&:hover': {
            opacity: 0.8,
            backgroundColor: '#fb3640',
        }
    }
}))

const GiftNFT = () => {

    const classes = useStyles();

    return (
        <Container maxWidth = 'md' className = {classes.root}>\
            <div className = {classes.toolbar} />
            <Typography variant = 'h4' component = 'div' className = {classes.header}>
                Boost your team by gifting an NFT to get them started
            </Typography>
            <Typography variant = 'subtitle1' component = 'div' className = {classes.subtitle}>
                Your team member will receive an NFT connected to your referral link
            </Typography>
            <Typography variant = 'h6' component = 'div' className = {classes.title}>
                All NFT that sends to your team member
            </Typography>
            <Typography variant = 'h6' component = 'div' className = {classes.title}>
                Your team member will receive all benefits of the NFT value in tokens as a gift.
                <span className = {classes.content}>
                    To help him increase his NFT value quicker, you can send him additional MFI.
                </span>
            </Typography>
            <Container maxWidth = 'lg' className = {classes.box}>
                <Typography variant = 'h6' component = 'div' className = {classes.boxTitle}>
                    All NFTs will be sent to this wallet
                </Typography>
                <Typography variant = 'subtitle1' component = 'div' className = {classes.boxContent}>
                    Click to create an affiliate account for the NFT recipient. Leave blank to create a customer account.
                </Typography>

                <TextField
                    className = {classes.walletInput}
                    variant = 'filled'
                    placeholder = 'Paste Wallet Address Here'
                />
            </Container>
            <Button
                variant = 'contained'
                className = {classes.button}
            >
                Send NFTs to this WALLET
            </Button>
        </Container>
    )
}


export { GiftNFT };
