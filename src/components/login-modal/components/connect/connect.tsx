import { Fragment, useState } from 'react';
import { Header, IconContainer, ConnectCont, ConnectBtn } from './style';
import {
  MetamaskIcon,
  AuthereumIcon,
  BurnerIcon,
  UniLoginIcon,
  WalletConnectIcon,
  MewWalletIcon
} from '../../../../images';
import { WalletTypes } from '../../../../utils';
import Loader from '../../../loader';

interface Props {
  handleConnect: () => Promise<void>;
  selectedWallet: number;
}

const Connect = (props: Props) => {
  const { handleConnect, selectedWallet } = props;

  const [loading, setLoading] = useState(false);

  const setWalletName = (): string => {
    switch (selectedWallet) {
      case WalletTypes.metamask:
        return 'metamask';
      case WalletTypes.walletConnect:
        return 'WalletConnect';
      case WalletTypes.authereum:
        return 'Authereum';
      case WalletTypes.burnerConnect:
        return 'BurnerConnect';
      case WalletTypes.uniLogin:
        return 'UniLogin';
      case WalletTypes.mewWallet:
        return 'MEW Wallet';
      default:
        return '';
    }
  };

  const setWalletImageSource = (): string => {
    switch (selectedWallet) {
      case WalletTypes.metamask:
        return MetamaskIcon.default;
      case WalletTypes.walletConnect:
        return WalletConnectIcon.default;
      case WalletTypes.authereum:
        return AuthereumIcon.default;
      case WalletTypes.burnerConnect:
        return BurnerIcon.default;
      case WalletTypes.uniLogin:
        return UniLoginIcon.default;
      case WalletTypes.mewWallet:
        return MewWalletIcon.default;
      default:
        return '';
    }
  };

  const handleOnClickConnect = async (): Promise<void> => {
    setLoading(true);
    await handleConnect();
    setLoading(false);
  };

  return (
    <Fragment>
      <Header>Connect to your {setWalletName()} wallet</Header>
      <IconContainer>
        <img src={setWalletImageSource()} alt="wallet icon" />
      </IconContainer>
      <ConnectCont>
        <ConnectBtn onClick={handleOnClickConnect} disabled={loading}>
          {loading ? <Loader /> : <span data-text="Connect">Connect</span>}
        </ConnectBtn>
      </ConnectCont>
    </Fragment>
  );
};

export default Connect;
