import Web3 from 'web3';
import { WalletTypes, getConfig, configNetwork } from './constants';
import store from '../logic/reducers';
import { login, logout } from '../logic/actions';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Authereum from 'authereum';
//@ts-ignore
import MEWconnect from '@myetherwallet/mewconnect-web-client';
import detectEthereumProvider from '@metamask/detect-provider';
import { Networks } from './constants';

class Wallet {
  web3;
  walletType = 0;

  constructor() {
    this.web3 = new Web3(Web3.givenProvider);
  }

  async setProvider(type: number) {
    let provider;
    switch (type) {
      case WalletTypes.metamask:
        provider = await detectEthereumProvider();

        const { ethereum } = window;

        if (provider === ethereum) {
          //@ts-ignore
          this.web3.setProvider(provider);
          this.walletType = type;
        }

        break;

      case WalletTypes.walletConnect:
        provider = new WalletConnectProvider({
          infuraId: getConfig().infuraId
        });
        this.walletType = type;

        //@ts-ignore
        this.web3.setProvider(provider);
        console.log('curr provider ', this.web3.currentProvider);
        break;

      case WalletTypes.authereum:
        const authereum = new Authereum(configNetwork);
        provider = authereum.getProvider();
        this.web3.setProvider(provider);
        this.walletType = type;
        break;

      case WalletTypes.mewWallet:
        const ETH_JSONRPC_URL =
          'wss://ropsten.infura.io/ws/v3/287b5d14c20f4b7d9411d165fac6a688';
        const CHAIN_ID = 1;
        const mewConnect = new MEWconnect.Provider();
        provider = mewConnect.makeWeb3Provider(CHAIN_ID, ETH_JSONRPC_URL, true);
        this.web3.setProvider(provider);
        this.walletType = type;
        break;

      default:
        throw new Error('Invalid wallet type');
    }
  }

  login = async (type: number) => {
    let accounts: Array<string>;
    switch (type) {
      case WalletTypes.metamask:
        //@ts-ignore
        accounts = await this.web3.currentProvider.request({
          method: 'eth_requestAccounts'
        });

        //@ts-ignore
        const chainId = await this.web3.currentProvider.request({
          method: 'eth_chainId'
        });

        console.log('chainId ', chainId);

        if (accounts.length) {
          const address = accounts[0];
          store.dispatch(login({ address }, chainId));
        } else {
          throw new Error('No account found');
        }

        //@ts-ignore
        this.web3.currentProvider.on(
          'accountsChanged',
          async (accounts: Array<string>) => {
            console.log('accounts on change', accounts);

            //@ts-ignore
            const chainId = await this.web3.currentProvider.request({
              method: 'eth_chainId'
            });

            if (accounts.length) {
              const address = accounts[0];
              store.dispatch(login({ address }, chainId));
            }
          }
        );

        //@ts-ignore
        this.web3.currentProvider.on('chainChanged', () => {
          window.location.reload();
        });

        break;

      case WalletTypes.walletConnect:
        //@ts-ignore
        accounts = await this.web3.currentProvider.enable();

        const chainIdWalletConnect = await this.web3.eth.getChainId();

        if (accounts.length) {
          const address = accounts[0];
          store.dispatch(
            login(
              { address },
              this.web3.utils.toHex(chainIdWalletConnect.toString())
            )
          );
        } else {
          throw new Error('No account found');
        }

        //@ts-ignore
        this.web3.currentProvider.on('chainChanged', () => {
          window.location.reload();
        });

        //@ts-ignore
        this.web3.currentProvider.on(
          'accountsChanged',
          async (accounts: string[]) => {
            if (accounts.length) {
              const address = accounts[0];

              const chainIdWalletConnect = await this.web3.eth.getChainId();

              store.dispatch(
                login(
                  { address },
                  this.web3.utils.toHex(chainIdWalletConnect.toString())
                )
              );
            }
          }
        );

        break;

      case WalletTypes.authereum:
        //@ts-ignore
        accounts = await this.web3.currentProvider.enable();
        if (accounts.length) {
          const address = accounts[0];
          store.dispatch(login({ address }, Networks.mainnet));
        } else {
          throw new Error('No account found');
        }
        break;

      case WalletTypes.mewWallet:
        console.log('current provider ', this.web3.currentProvider);
        //@ts-ignore
        accounts = await this.web3.currentProvider.enable();

        console.log('accounts ', accounts);

        if (accounts.length) {
          const address = accounts[0];
          store.dispatch(login({ address }, ''));
        } else {
          throw new Error('No account found');
        }
        break;

      default:
        throw new Error('Invalid wallet type');
    }
  };

  disconnect = async () => {
    switch (this.walletType) {
      case WalletTypes.metamask:
        //@ts-ignore
        await this.web3.currentProvider._handleDisconnect();
        store.dispatch(logout());
        break;

      case WalletTypes.walletConnect:
        store.dispatch(logout());
        break;

      case WalletTypes.authereum:
        //@ts-ignore
        await this.web3.currentProvider.disable();
        store.dispatch(logout());
        break;

      case WalletTypes.mewWallet:
        //@ts-ignore
        await this.web3.currentProvider.disconnect();
        store.dispatch(logout());
        break;

      default:
        throw new Error('Invalid wallet type');
    }
  };
}

export default new Wallet();
