import React, { useContext } from 'react';
import {
    AppBar , Toolbar , IconButton , Typography , Button , Avatar
} from '@material-ui/core';

import {
    Menu as MenuIcon
} from '@material-ui/icons';

import {
    makeStyles , useTheme
} from '@material-ui/core/styles';

import {drawerWidth} from '../helper/constant';
import busdIcon from '../assets/img/busd2.jpg'

import {ThemeContext} from '../App';


const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        backgroundColor: '#1f202e',
        color: 'white'
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      walletButton: {
        marginLeft: 'auto',
        borderRadius: '15px',
        backgroundColor: '#151620',
        // margin: '15px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#151620'
        }
      }
}));

const Header = ({
    handleDrawerToggle
}) => {
    const classes = useStyles();
    const context = useContext(ThemeContext);

    const handleClick = async () => {
        // context.setIsAuthorized(prevState => !prevState);

        if(context.isAuthorized){


            if(!context.web3auth) {
                console.log('web3auth not initialized yet');
                return;
            }
            console.log(context.web3auth);
            await context.web3auth.logout();
            context.setProvider(null);
            context.setIsAuthorized(false);
        }

        else {

            if(!context.web3auth) {
                console.log('web3auth not initialized yet');
                return;
            }
            const web3authProvider = await context.web3auth.connect();
            context.setProvider(web3authProvider);
            context.setIsAuthorized(true);
        }
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            {
                context.isAuthorized?
                    <Button
                        variant = 'contained'
                        color = 'secondary'
                        className = {classes.walletButton}
                        onClick = {handleClick}
                    >
                        <Typography style = {{ marginRight: '5px' }}>
                            Disconnect your wallet
                        </Typography>
                    </Button>
                    :
                    <Button
                        variant = 'contained'
                        color = 'secondary'
                        className = {classes.walletButton}
                        onClick = {handleClick}
                    >
                        <Typography style = {{ marginRight: '5px' }}>
                            Connect your wallet
                        </Typography>
                        <Avatar src = {busdIcon} />
                    </Button>
            }
            {/* <Typography variant="h6" noWrap className = {classes.walletButton}>
                Connect Wallet
            </Typography> */}
            </Toolbar>
        </AppBar>
    );
};


export {Header};
