import React, { useContext, useEffect, useState } from 'react';

import {
    Avatar,
    Container,
    Grid,
    Typography,
    Button,
    Box
} from '@material-ui/core'

import {
    makeStyles , useTheme
} from '@material-ui/core/styles';

import {
    FileCopy
} from '@material-ui/icons';

import BusdIcon from '../../assets/img/busd.svg';
import MetasmaskIcon from '../../assets/img/metamask.png';
import WalletConnectIcon from '../../assets/img/walletconnect.png';


import {collections, sampleEarnedCollections} from '../../helper/constant';
import { CollectionCard } from '../common';

import {ThemeContext} from '../../App';
import { EarnedCollectionInfo } from './components/EarnedCollectionInfo';
import { UpgradeCollectionInfo } from './components/UpgradeCollectionInfo';
import { WalletConnect } from '../common/WalletConnect';

import {TotalInfo} from '../common/TotalInfo';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#1f202e',
        color: 'white'
    },
    toolbar: theme.mixins.toolbar,
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
    collectionContainer: {
        height: 'auto' ,
        marginTop: '40px',
        backgroundColor: '#151620',
        padding: '15px',
        borderRadius: '30px'
    },
    collectionPiece: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#6c000d',
        border: '2px solid black',
        borderRadius: '0.5rem',
        padding: '0 !important',
        "&:hover" : {
            // backgroundColor: 'grey',
            cursor: 'pointer',
            borderColor: 'rgb(45, 191, 59)',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 6px 10px, rgb(45 191 59) 0px 0px 10px',
            transform: 'scale(1.1)',
            transitionDuration: '.25s',
        },
    },
    collectionImg: {
        width: '100%',
        height: 'auto',
        mixBlendMode: 'multiply',
    },
    collectionDescription: {
        color: 'wheat',
        backgroundColor: 'black',
        padding: '8px 10px',
        textAlign: 'center',
    },
    metaInfo: {
        color: 'rgb(101, 238, 252)'
    }
}));

const Landing = () => {
    const classes = useStyles();

    const [earnedCollections , setEarnedCollections] = useState([]);
    const [selectedCollectionIndex , setSelectedCollectionIndex] = useState(-1);


    const context = useContext(ThemeContext);

    useEffect(() => {
        if(context.isAuthorized){
            setEarnedCollections(sampleEarnedCollections);
        }
        else{
            setEarnedCollections([]);
        }
    } , [context]);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {/* <Grid container >
                <Grid item xs = {6} sm = {6}>
                    <Typography variant = 'subtitle1' className = {classes.metaInfo}>
                        Holders: 21,165
                    </Typography>
                </Grid>
                <Grid item xs = {6} sm = {6} className = {classes.busdInfo} >
                    <Avatar src = {BusdIcon} className = {classes.busdAvatar} />
                    <Typography variant='subtitle1' component = 'span' className = {classes.metaInfo}>
                        6,512.1/Nex
                    </Typography>
                </Grid>
            </Grid> */}
            <TotalInfo holders = {21165}  amount = {6512.1} />
            <WalletConnect
                title = 'To start earning yield with staking, you first need to connect your DeFi wallet'
            />
            <Container maxWidth = 'lg' className = {classes.collectionContainer}>
                <Grid container spacing={5} style = {{ width: '100%' ,justifyContent: 'space-around' , margin: 'auto' }}>
                    {
                        collections.map((item , index) =>
                        {
                            let active = false;
                            for(let i = 0;i < earnedCollections.length; i++){
                                if(earnedCollections[i].name == item.name){
                                    active = true;
                                    break;
                                }
                            }
                            return(
                                <CollectionCard
                                    key = {index}
                                    name = {item.name}
                                    url = {item.url}
                                    active = {active}
                                    setSelectedCollectionIndex = {setSelectedCollectionIndex}
                                    index = {index}
                                />
                            )
                        })
                    }
                </Grid>
            </Container>
            {
                context.isAuthorized && selectedCollectionIndex > -1?
                    earnedCollections.filter(item => item.name == collections[selectedCollectionIndex].name).length > 0?
                        <EarnedCollectionInfo collectionName = {collections[selectedCollectionIndex].name} totalUsers = {0} />
                        :
                        <UpgradeCollectionInfo collection = {collections[selectedCollectionIndex]} totalUsers = {0} />
                    :
                    ''
            }
        </main>
    );
};

export {Landing};
