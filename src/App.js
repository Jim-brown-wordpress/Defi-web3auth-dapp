// import logo from './logo.svg';
// import './App.css';
import React , {useEffect, useState , createContext} from 'react';
import {Header , LeftSideBar} from './Layout';
import {
  CssBaseline , AppBar
} from '@material-ui/core';

import {
  makeStyles , useTheme
} from '@material-ui/core/styles';

import {
  BrowserRouter as Router , Routes , Route, Navigate, json
} from 'react-router-dom';

import { Landing ,Staking , Statistics , OrderHistory , MatrixBonus , MyReferrals , TokenPurchases } from './pages';

// import {init} from './Interaction/init';
import {EthereumRpc as RPC} from './Interaction/web3RPC';
import { Web3Auth } from '@web3auth/modal';
import {networkConfig} from './config';
import { GiftNFT } from './pages/GiftNFT';

export const ThemeContext = createContext( {} );

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

}));

if(localStorage.getItem('provider')){
  console.log(JSON.parse(localStorage.getItem('provider')));
}

function App() {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedNav , setSelectedNav] = useState('/');

  // const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // <!----------------------- Context -------------------------->

  const [isAuthorized , setIsAuthorized] = useState(false);

  // <!----------------------- WEB3 --------------------------->
  const [web3auth , setWeb3auth] = useState(null);
  const [provider , setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth(networkConfig);
        setWeb3auth(web3auth);
        await web3auth.initModal();

        if(web3auth.provider){


          setProvider(web3auth.provider);
        }

        setIsAuthorized(true);
      } catch(error) {
        console.log(error);
      }
    }

    init();

  } , []);

  // useEffect(() => {

  //   (async () => {
  //     if(!provider){
  //       console.log('provider not set');

  //     }
  //     else {
  //       const rpc =  RPC({provider});
  //       console.log('rpc' , await rpc.getAccounts());
  //       console.log(await rpc.getBalance());
  //       console.log(await rpc.getDecimals());
  //       console.log(await rpc.getUserInfo('0x1d669E6E1176c1D864084478F7c379Eea6ABad9a'));
  //     }
  //   })();
  // } , [provider]);

  useEffect(() => {
    if(mobileOpen)
      handleDrawerToggle();
    // navigate(selectedNav);
  } , [selectedNav]);

  return (
    <ThemeContext.Provider value = {{
        isAuthorized: isAuthorized ,
        setIsAuthorized: setIsAuthorized,
        web3auth : web3auth ,
        setWeb3auth: setWeb3auth,
        provider: provider ,
        setProvider: setProvider
      }}>
      <div className = {classes.root}>
        <CssBaseline />
        <Header handleDrawerToggle = {handleDrawerToggle} />
        <LeftSideBar
          handleDrawerToggle = {handleDrawerToggle}
          mobileOpen = {mobileOpen}
          selectedNav = {selectedNav}
          setSelectedNav = {setSelectedNav}
        />
        <Routes>
          <Route path = '/' element = {<Landing />} />
          <Route path = '/stake' element = {<Staking />} />
          <Route path = '/orderHistory' element = {<OrderHistory />} />
          <Route path = '/matrixBonus' element = {<MatrixBonus />} />
          <Route path = '/myReferrals' element = {<MyReferrals />} />
          <Route path = '/tokenPurchases' element = {<TokenPurchases />} />
          <Route path = '/giftnft' element = {<GiftNFT />} />
          <Route path = '*' element = {<Navigate to = '/' />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
