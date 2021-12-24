import { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  HeaderContainer,
  ConnectBtn,
  UserAddress,
  RightSideContent,
  EthBalance,
  EthBalanceText,
  Network,
  LeftContainer,
  LinkText
} from './style';
import { useHistory, Link, useLocation } from 'react-router-dom';
import {
  renderTokenAmountText,
  StoreageKey,
  getNetwork,
  getMainTokenSymbol,
  Paths
} from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal';
import LoginModalContainer from '../login-modal';
import wallet from '../../utils/wallet';
import { getEthBalance } from '../../logic/actions';

const Header = () => {
  const { walletConnected, userAddress, ethBalance, network } = useSelector(
    (state: any) => state.user
  );

  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(0);
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const closeModal = () => {
    setShow(false);
  };

  const handleWalletConnect = async () => {
    if (walletConnected) {
      try {
        await wallet.disconnect();
        localStorage.removeItem(StoreageKey.walletType);
      } catch (e) {
        console.log('something went wrong in logout wallet ', e);
      }
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (walletConnected) {
      dispatch(getEthBalance(userAddress));
    }
  }, [walletConnected, dispatch, userAddress]);

  return (
    <HeaderWrapper>
      <HeaderContainer walletConnected={walletConnected}>
        <LeftContainer>
          <LinkText status={status === 1 && true}>
            <Link to={Paths.buy}>Buy</Link>
          </LinkText>
          <LinkText status={status === 2 && true}>
            <Link to={Paths.aboutUs}>About Us</Link>
          </LinkText>
          <LinkText status={status === 3 && true}>
            <Link to={Paths.roadmap}>Roadmap</Link>
          </LinkText>
          <LinkText status={status === 4 && true}>
            <Link to={Paths.collection}>Collection</Link>
          </LinkText>
          <LinkText status={status === 5 && true}>
            <Link to={Paths.faq}>FAQ</Link>
          </LinkText>
          <LinkText status={status === 6 && true}>
            <a
              href={Paths.joinDiscord}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </LinkText>
          <LinkText status={status === 7 && true}>
            <a href={Paths.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </LinkText>
        </LeftContainer>

        <RightSideContent>
          {!!network && (
            <Network network={network}>{getNetwork(network)}</Network>
          )}
          {walletConnected && (
            <EthBalance>
              <EthBalanceText className="notranslate">
                {!!ethBalance &&
                  `${renderTokenAmountText(ethBalance)} ${getMainTokenSymbol(
                    network
                  )}`}
              </EthBalanceText>

              <UserAddress>
                {userAddress[0]}
                {userAddress[1]}
                {userAddress[2]}
                {userAddress[3]}
                {userAddress[4]}
                {userAddress[5]}
                ...
                {userAddress[userAddress.length - 4]}
                {userAddress[userAddress.length - 3]}
                {userAddress[userAddress.length - 2]}
                {userAddress[userAddress.length - 1]}
              </UserAddress>
            </EthBalance>
          )}

          <ConnectBtn onClick={handleWalletConnect} connected={walletConnected}>
            <span data-text={walletConnected ? 'Disconnect' : 'Connect Wallet'}>
              {walletConnected ? 'Disconnect' : 'Connect Wallet'}
            </span>
          </ConnectBtn>
        </RightSideContent>
      </HeaderContainer>
      <Modal show={show} closeModal={closeModal}>
        <LoginModalContainer closeModal={closeModal} />
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
