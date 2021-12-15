import styled from 'styled-components';
import { Theme } from '../../../../utils';

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.linkColor};
  text-transform: capitalize;
`;

export const WalletWrapper = styled.div`
  margin-top: 25px;

  .metamask-icon {
    width: 60px;
    height: 53px;
  }

  .metamask-text {
    margin-top: 10.5px;
  }

  .walletconnect-text {
    margin-top: 9px;
  }

  .authereum-text {
    margin-top: 6px;
  }

  .burner-text {
    margin-top: 6px;
  }

  .unilogin-text {
    margin-top: 28px;
  }

  .mew-text {
    margin-top: 9px;
  }
`;

export const WalletsContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

interface WalletItemProps {
  selected: boolean;
}

export const WalletItem = styled.div<WalletItemProps>`
  flex: 1;
  padding: 16px 0 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.selected ? Theme.linkColor : 'transparent'};
  transition: 300ms all;

  :hover {
    border: 1px solid ${Theme.linkColor};
    transition: 300ms all;
    background-color: ${Theme.selectedWalletBg};
  }
`;

export const WalletName = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${Theme.whiteText};
`;

export const ConnectCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

export const ConnectBtn = styled.button`
  width: 164px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
`;
