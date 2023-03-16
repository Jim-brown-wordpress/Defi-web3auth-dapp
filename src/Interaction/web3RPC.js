import Web3 from 'web3';
import {RewardABI , NftABI} from '../assets/contract';
import {CONTRACT_REWARD_ADDRESS , CONTRACT_NFT_ADDRESS} from '../config';

const EthereumRpc = ({
    provider
}) => {
    const getChainId = async () => {
        try {
            const web3 = new Web3(provider);


            console.log(web3.eth.accounts.wallet);

            const chainId = await web3.eth.getChainId();
            return chainId.toString();
        } catch(error){
            return error;
        }
    }

    const getAccounts = async () => {
        try {
            const web3 = new Web3(provider);

            const address = (await web3.eth.getAccounts())[0];

            return address;
        } catch(error){
            return error;
        }
    }

    const getBalance = async () => {
        try {
            const web3 = new Web3(provider);
            const address = (await web3.eth.getAccounts())[0];

            const balance = web3.utils.fromWei(
                await web3.eth.getBalance(address)
            );

            return balance;
        } catch(error) {
            return error;
        }
    }

    const getDecimals = async () => {
        try {
            const web3 = new Web3(provider);
            const contract = new web3.eth.Contract(JSON.parse(RewardABI) , CONTRACT_REWARD_ADDRESS);

            const info = await contract.methods.decimals().call();
            return info;
        }catch(error){
            return error;
        }
    }

    const getUserInfo = async (address) => {
        try {

            const web3 = new Web3(provider);
            const contract = new web3.eth.Contract(JSON.parse(RewardABI) , CONTRACT_REWARD_ADDRESS);

            const info = await contract.methods.persons(address).call();
            return info;

        }catch(error){
            return error;
        }
    }

    const purchaseToken = async (address) => {
        try{
            const web3 = new Web3(provider);
            const contract = new Web3.eth.Contract(JSON.parse(RewardABI) , CONTRACT_REWARD_ADDRESS);

            await contract.methods.purchaseNFT().send({
                from: '',

            })
        }
    }

    return {getChainId , getAccounts , getBalance , getDecimals , getUserInfo}
}


export {EthereumRpc};
