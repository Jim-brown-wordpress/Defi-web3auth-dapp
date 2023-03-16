import React, { useContext , useEffect } from 'react';

import {
    List , Divider , ListItem , ListItemIcon , ListItemText ,Hidden , Drawer , Container, Grid, Typography, Avatar , Box, Collapse
} from '@material-ui/core';

import {
    MoveToInbox as InboxIcon,
    Mail as MailIcon,
    Telegram , Twitter, YouTube, HouseRounded, CloudDownload, Security,
    HomeRounded, ControlPoint, LibraryBooks, Cloud,CardGiftcard,
    Help , HowToReg , Perks , SentimentSatisfied , LocalGroceryStore,
    FileCopy , BarChartOutlined , Adjust , ExpandLess , ExpandMore
} from '@material-ui/icons';

import {
    makeStyles , useTheme
} from '@material-ui/core/styles';

import {drawerWidth , accountInfo} from '../helper/constant';
import AccountIcon from '../assets/img/collections/_gem4.jpg';
import { InfoC } from './component/InfoC';

import {ThemeContext} from '../App';

import {useNavigate} from 'react-router-dom';

import {EthereumRpc as RPC} from '../Interaction/web3RPC';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#151620'
    },
    accountInfo: {
      flexGrow: 1,
      padding: '10px',
      alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#151620 !important',
        color: 'white',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
    },
    accountIcon: {
      marginLeft: 'auto',
      justifyContent:'flex-end',
      width: '80%',
      height: 'auto',
      borderRadius: '1rem',
      backgroundColor: '#1f202e'
    },
    title: {
      fontSize: '25px',
      fontWeight: '900'
    },
    divider: {
      height: 2,
      backgroundColor: 'gray',
      margin: '12px 0'
    },
    icon: {
      color: 'white'
    },
    flexIcons: {
      justifyContent: 'space-around',
      padding: '10px'
    },
}));

const LeftSideBar = ({
    handleDrawerToggle,
    mobileOpen,
    window,
    selectedNav,
    setSelectedNav
}) => {
    const classes = useStyles();
    const theme = useTheme();
    const container = window !== undefined ? () => window().document.body : undefined;

    const context = useContext(ThemeContext);
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);
    const [userInfo , setUserInfo] = React.useState({});

    const handleExpand = () => {
      setOpen(!open);
    };

    useEffect(() => {
      (async () => {

        if(context.isAuthorized && context.provider){
          const rpc = RPC({provider: context.provider});
          const curAddress = await rpc.getAccounts();
          const info = await rpc.getUserInfo(curAddress);
          setUserInfo(info);
        }

      })();
    } , [context.isAuthorized]);

    const logginedAccount = (
      <Box>
        <Grid container justifyContent='space-between' style = {{
          padding: '10px 20px'
         }}>
            <Grid item >
                <Typography variant='subtitle1'>
                    My Affliate Link
                </Typography>
            </Grid>
            <Grid item  >
                <FileCopy />
            </Grid>
        </Grid>
        <Typography variant = 'caption' style = {{ marginRight: 'auto' , paddingLeft: '20px'  }}>
          https://app.Defincubator.io/ref
        </Typography>
        <Grid container justifyContent='space-between' style = {{
          padding: '10px 20px'
         }}>
            <Grid item >
                <Typography variant='subtitle1'>
                    My Affliate Link
                </Typography>
            </Grid>
            <Grid item  >
                <FileCopy />
            </Grid>
        </Grid>
        <Typography variant = 'caption' style = {{ marginRight: 'auto' , paddingLeft: '20px'  }}>
          https://app.Defincubator.io/ref
        </Typography>
        <Box style = {{ padding: '20px' }}></Box>
        {
          [
            {
              title: 'NFT',
              content: 'Gem-1',
              isTitleIcon : false,
              isContentIcon : false
            },
            {
              title: 'getQAmount',
              content: userInfo.getQAmount,
              isTitleIcon : true,
              isContentIcon : true
            },
            {
              title: 'hasPoolQualification',
              content: userInfo.hasPoolQualification? 'valid': 'invalid',
              isTitleIcon : false,
              isContentIcon : false
            },
            {
              title: 'ownedBoxLastIndex',
              content: userInfo.ownedBoxLastIndex,
              isTitleIcon : true,
              isContentIcon : false
            },
            {
              title: 'poolRewardAccumulated',
              content: userInfo.poolRewardAccumulated,
              isTitleIcon : true,
              isContentIcon : true
            },
            {
              title: 'superPromoterLevel',
              content: userInfo.superPromoterLevel > 0? `level ${userInfo.superPromoterLevel}`: 'No one',
              isTitleIcon : false,
              isContentIcon : false
            }
          ].map((item , index) => (
            <InfoC
              title = {item.title}
              content = {item.content}
              isTitleIcon = {item.isTitleIcon}
              isContentIcon = {item.isContentIcon}
            />
          ))
        }
      </Box>
    );

    const navs = [
      {
          title: 'Dashboard',
          element: HomeRounded,
          to:'/'
      },
      // {
      //     title: 'Stake',
      //     element: ControlPoint,
      //     to:'/stake'
      // },
      {
          title: 'Gift NFT',
          element: CardGiftcard,
          to:'/giftnft'
      },
      {
          title: 'Help',
          element: Help,
          to:'/help'
      },
      // {
      //     title: 'Voting',
      //     element: HowToReg,
      //     to:'/voting'
      // },
      // {
      //     title: 'Perks',
      //     element: SentimentSatisfied,
      //     to:'/perks'
      // },
      // {
      //     title: 'Marketplace',
      //     element: LocalGroceryStore,
      //     to:'/marketplace'
      // },
      {
          title: 'Statistics',
          element: BarChartOutlined,
          to:'/#',
          subTitles: [
            {
              title: 'OrderHistory',
              element: Adjust,
              to:'/orderHistory',
            },
            {
              title: 'Earnings',
              element: Adjust,
              to:'/earnings',
            },
            {
              title: 'MyReferrals',
              element: Adjust,
              to:'/myReferrals',
            },
            {
              title: 'TokenPurchases',
              element: Adjust,
              to:'/tokenPurchases',
            }
          ]
      }
    ]

    const drawer = (
        <div >
          <div className={classes.toolbar} >
            <Grid container alignItems='center' className = {classes.accountInfo}>
              <Grid item sm = {7} xs = {7}>
                <Typography className = {classes.title}>
                  My ACCOUNT
                </Typography>
              </Grid>
              <Grid item sm = {5} xs = {5}>
                <Avatar variant='square' src = {AccountIcon}  className = {classes.accountIcon}/>
              </Grid>
            </Grid>
            {
              context.isAuthorized?
                logginedAccount:
                <Box style = {{ textAlign: 'center' , padding: '15px' , fontSize: '20px' }}>
                  No NFT
                </Box>
            }
          </div>
          <Divider className = {classes.divider} />
          <Grid container className = {classes.flexIcons}>
            <Grid item>
              <Telegram />
            </Grid>
            <Grid item>
              <Twitter />
            </Grid>
            {/* <Grid item>
              <YouTube />
            </Grid> */}
            {/* <Grid item>
              <LibraryBooks />
            </Grid> */}
            <Grid item>
              <CloudDownload />
            </Grid>
            {/* <Grid item>
              <Security />
            </Grid> */}
          </Grid>
          <Divider className = {classes.divider} />
          <List>
            {
              navs.map((item , index) => (
                item.subTitles?
                    <>
                      <ListItem
                        button
                        key={item.title}
                        selected = {item.title == selectedNav}
                        onClick = {handleExpand}
                      >
                        <ListItemIcon className = {classes.icon}>
                          <item.element />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {open? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in = {open} timeout = 'auto' unmountOnExit  style = {{ paddingLeft: 16 }}>
                        {
                          item.subTitles.map((item , index) => (
                            <ListItem
                              button
                              key={item.title}
                              selected = {item.title == selectedNav}
                              onClick = {() => handleClick(item.to)}

                            >
                              <ListItemIcon className = {classes.icon}>
                                <item.element />
                              </ListItemIcon>
                              <ListItemText primary={item.title} />
                            </ListItem>
                          ))
                        }
                      </Collapse>
                    </>
                  :
                    <ListItem
                      button
                      key={item.title}
                      selected = {item.title == selectedNav}
                      onClick = {() => handleClick(item.to)}
                    >
                      <ListItemIcon className = {classes.icon}>
                        <item.element />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
              ))
            }
          </List>
        </div>
      );


    const handleClick = (to) => {
      setSelectedNav(to);
      navigate(to);
    }

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                  }}
              >
                  {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                  classes={{
                      paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
              >
                  {drawer}
              </Drawer>
            </Hidden>
        </nav>
    );
};


export {LeftSideBar};
