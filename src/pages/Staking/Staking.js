import React , {useContext , useEffect, useRef, useState} from 'react';
import { WalletConnect } from '../common/WalletConnect';

import {
    Box, Typography, Button, Grid
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';
import { TotalInfo } from '../common/TotalInfo';
import {ThemeContext} from '../../App';
import { Stake , OtherStakingInfo , NexBalance } from './components';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    buttonBox: {
        margin: '20px auto',
        backgroundColor: '#151620',
        borderRadius: '1.5rem',
        padding: '0.5rem',
        width: '240px'
    },
    button: {
        padding: '0.5rem',
        borderRadius: '1rem',
        color: 'white',
        border: '2px solid #151620',
        // "&:focus , &:after" : {
        //     border: '2px solid',
        //     borderColor: '#77d970'
        // },
        "&:hover" : {
            border: '2px solid #fb3640 !important',
        },
        margin: 'auto 5px'
    }
}));

const Staking = () => {
    const classes = useStyles();
    const context = useContext(ThemeContext);

    const [selectedButton , setSelectedButton] = useState('BuyNStake');

    return (
        <Box className = {classes.root} style = {{ flexGrow: 1 }}>
            <div className = {classes.toolbar} />
            <TotalInfo holders = {21165}  amount = {6512.1} />
            {
                context.isAuthorized?
                    <Box>
                        <Grid container justifyContent='center' className = {classes.buttonBox}>
                            <Button className = {classes.button} style = {{
                                border: selectedButton == 'BuyNStake'?
                                    '2px solid #77d970':
                                    '2px solid #151620'
                             }} onClick = {() => setSelectedButton('BuyNStake')}>
                                <Typography>
                                    Buy & Stake
                                </Typography>
                            </Button>
                            <Button className = {classes.button} style = {{
                                border: selectedButton == 'Stake'?
                                    '2px solid #77d970':
                                    '2px solid #151620'
                             }} onClick = {() => setSelectedButton('Stake')}>
                                <Typography variant = 'subtitle1'>
                                    STAKE
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid container>
                            <Stake balance = {0} />
                            <NexBalance />
                        </Grid>
                        <OtherStakingInfo />
                    </Box>
                    :
                    <WalletConnect title = 'To start earning yield with staking, you first need to connect your DeFi wallet' />
            }
        </Box>
    )
}


export {Staking};
