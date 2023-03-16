import React from 'react';
import {
    Avatar,Box,
    Grid , Typography
} from '@material-ui/core';

import {
    InfoOutlined
} from '@material-ui/icons';

import {
    makeStyles
} from '@material-ui/core/styles';

import BusdIcon from '../../assets/img/busd.svg';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        alignItems: 'center'
    },
    busdIcon: {
        width: '20px',
        height: '20px',
        marginRight: '4px'
    },
    infoIcon: {
        marginLeft: '4px'
    }
}));

const InfoC = ({
    title,
    content,
    isTitleIcon = false,
    isContentIcon = false
}) => {
    const classes = useStyles();

    return (
        <Grid container justifyContent='space-between' alignItems='center' style = {{
          padding: '5px 20px'
         }}>
            <Box className = {classes.box}>
                <Typography variant='subtitle1'>
                    {title}
                </Typography>
                {
                    isTitleIcon?
                        <InfoOutlined className = {classes.infoIcon} />
                        :''
                }
            </Box>
            <Box className = {classes.box}>
                {
                    isContentIcon?
                        <Avatar src = {BusdIcon} className = {classes.busdIcon} />
                        :''
                }
                <Typography variant = 'h6' style = {{ marginLeft: 'auto' }}>
                    {content}
                </Typography>
            </Box>
        </Grid>
    )
}


export {InfoC};
