import { Fragment, useState } from 'react';
import {
  Header,
  WalletWrapper,
  WalletsContainer,
  WalletItem,
  WalletName,
  ConnectCont,
  ConnectBtn
} from './style';
import {
  MetamaskIcon,
  AuthereumIcon,
  WalletConnectIcon
} from '../../../../images';
import { WalletTypes } from '../../../../utils';

interface Props {
  selectWallet: (wallet: number) => void;
}

const Select = (props: Props) => {
  const { selectWallet } = props;

  const [selected, setSelected] = useState(WalletTypes.default);

  const setSelectWallet = (selectedWallet: number) => {
    setSelected(selectedWallet);
  };

  const handleConnect = () => {
    if (selected) {
      selectWallet(selected);
    }
  };

  return (
    <Fragment>
      <Header>Choose wallet to connect</Header>
      <WalletWrapper>
        <WalletsContainer>
          <WalletItem
            selected={selected === WalletTypes.metamask}
            onClick={() => setSelectWallet(WalletTypes.metamask)}
          >
            <img
              src={MetamaskIcon.default}
              alt="metamask"
              className="metamask-icon"
            />
            <WalletName className="metamask-text">Metamask</WalletName>
          </WalletItem>
          <WalletItem
            selected={selected === WalletTypes.walletConnect}
            onClick={() => setSelectWallet(WalletTypes.walletConnect)}
          >
            <img src={WalletConnectIcon.default} alt="wallet connect" />
            <WalletName className="walletconnect-text">
              WalletConnect
            </WalletName>
          </WalletItem>
          <WalletItem
            selected={selected === WalletTypes.authereum}
            onClick={() => setSelectWallet(WalletTypes.authereum)}
          >
            <img src={AuthereumIcon.default} alt="authereum" />
            <WalletName className="authereum-text">Authereum</WalletName>
          </WalletItem>
        </WalletsContainer>
      </WalletWrapper>
      <ConnectCont>
        <ConnectBtn onClick={handleConnect}>
          <span data-text="Connect">Connect</span>
        </ConnectBtn>
      </ConnectCont>
    </Fragment>
  );
};

export default Select;
