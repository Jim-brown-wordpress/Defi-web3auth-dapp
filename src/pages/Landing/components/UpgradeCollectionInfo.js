import React from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';

import { Avatar, Box, Button, Container, Divider, Grid, Typography } from'@material-ui/core';

import BusdIcon from '../../../assets/img/busd.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
        backgroundColor: '#151620',
        borderRadius: '0 0 1rem 1rem',
        textAlign: 'center'
    },
    header: {
        margin: '20px auto 30px auto',
        fontWeight: 600
    },
    subTitle: {
        marginBottom: '30px',
        color: 'wheat'
    },
    divider: {
        backgroundColor: 'gray',
        margin: '20px'
    },
    title: {
        color: 'wheat'
    },
    content: {
        fontWeight: 600,
        marginLeft: '5px'
    },
    box: {
        display: 'flex',
        width: '80%',
        margin: 'auto',
        alignItems: 'center'
    },
    avatar: {
        width: '18px',
        height: '18px'
    },
    avatarBox: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    approveButton: {
        margin: '60px auto 20px auto',
        backgroundColor: '#fb3640',
        color: 'wheat',
        padding: '12px 20px',
        borderRadius: '12px',
        '&:hover': {
            backgroundColor: '#fb3640',
            opacity: 0.7
        }
    }
}));


const UpgradeCollectionInfo = ({
    collection,
    totalUsers
}) => {

    const classes = useStyles();

    const data = [
        {header: 'L1' , content: 0},
        {header: 'L2' , content: 0},
        {header: 'L3' , content: 0},
        {header: 'L4' , content: 0},
        {header: 'L5' , content: 0},
        {header: 'L6' , content: 0},
        {header: 'L7' , content: 0},
        {header: 'L8' , content: 0},
        {header: 'L9' , content: 0},
        {header: 'L10' , content: 0},
    ];

    return (
        <Container maxWidth = 'md' className = {classes.root}>
            <Typography variant = 'h4' className = {classes.header}>
                Current selection
            </Typography>
            <Box className = {classes.box}>
                <Typography variant = 'subtitle1' className = {classes.title}>
                    NFT price
                </Typography>
                <Box className = {classes.avatarBox}>
                    <Avatar src = {BusdIcon} className = {classes.avatar} />
                    <Typography variant = 'subtitle1' className = {classes.content}>
                        {collection.price}
                    </Typography>
                </Box>
            </Box>
            <Divider className = {classes.divider} />

            <Typography variant = 'h4' className = {classes.header}>
                You will get
            </Typography>
            {
                collection.benefits.map((item , index) => (
                    <Box className = {classes.box} style = {{ marginTop: '8px' }}>
                        <Typography variant = 'subtitle1' className = {classes.title}>
                            {item.title}
                        </Typography>
                        <Box className = {classes.avatarBox}>
                            <Avatar src = {BusdIcon} className = {classes.avatar} />
                            <Typography variant = 'subtitle1' className = {classes.content}>
                                {item.content}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
            <Divider className = {classes.divider} />
            <Typography variant = 'h4' className = {classes.header}>
                Future Value
            </Typography>
            {
                collection.future.map((item , index) => (
                    <Box className = {classes.box} style = {{ marginTop: '8px' }}>
                        <Typography variant = 'subtitle1' className = {classes.title}>
                            {item.title}
                        </Typography>
                        <Box className = {classes.avatarBox}>
                            <Avatar src = {BusdIcon} className = {classes.avatar} />
                            <Typography variant = 'subtitle1' className = {classes.content}>
                                {item.content}
                            </Typography>
                        </Box>
                    </Box>
                ))
            }
            <Button className = {classes.approveButton}>
                Approve BUSD
            </Button>
        </Container>
    )
}


export {UpgradeCollectionInfo};
