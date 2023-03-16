import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Box , Typography , Container , Button , Avatar
} from '@material-ui/core';


import MetasmaskIcon from '../../assets/img/metamask.png';
import WalletConnectIcon from '../../assets/img/walletconnect.png';

const useStyles = makeStyles(theme => ({
    root: {
        color: 'white',
        width: '100%'
    },
    annotation: {
        marginTop: '20px',
        textAlign: 'center'
    },
    walletContainer: {
        backgroundColor: '#151620',
        borderRadius: '1rem',
        padding: '15px',
        textAlign: 'center',
    },
    walletButton : {
        display: 'flex' ,
        justifyContent: 'space-between',
        width: '80%'  ,
        margin: 'auto',
        padding: '20px 10px',
        borderRadius: '15px',
        backgroundColor: '#262738',
        '&:hover': {
            backgroundColor: '#262738'
        }
    },

}))

const WalletConnect = ({
    title
}) => {
    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <Typography paragraph className= {classes.annotation}>
                {title}
            </Typography>
            <Typography variant = 'h4' className= {classes.annotation} style = {{ margin: '60px auto' }}>
                Connect your wallet
            </Typography>
            <Container maxWidth = 'sm'>
                <Box className = {classes.walletContainer}>
                    <Button variant = 'contained' color = 'primary'  className = {classes.walletButton}>
                        <Avatar src = {MetasmaskIcon}  />
                        Metamask
                    </Button>
                    <Button variant = 'contained' color = 'secondary' className = {classes.walletButton} style = {{ marginTop: '20px' }} >
                        <Avatar src = {WalletConnectIcon} />
                        WalletConnect
                    </Button>
                </Box>
                <Typography variant='subtitle2' style = {{ textAlign: 'right' , marginTop: '10px' }}>
                    Need Help?
                </Typography>
            </Container>
        </Box>
    )
}

export {WalletConnect};
