import styled from 'styled-components';
import { Theme, Networks, Color } from '../../utils';

interface WalletProps {
  walletConnected: boolean;
}

export const HeaderWrapper = styled.div`
  background-color: ${Theme.primaryBg};
  padding: 0 1.875rem;
  /* height: 72px; */
  position: fixed;
  top: 0;
  width: 100vw;
  right: 0;
  z-index: 1;
  box-shadow: ${Theme.primaryBoxShadow};

  @media screen and (min-width: 992px) {
    position: fixed;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const HeaderContainer = styled.div<WalletProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: ${(props) =>
      props.walletConnected ? '1460px' : '1000px'}) {
    justify-content: flex-end;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

interface ActiveStatus {
  status?: boolean;
}

export const LinkText = styled.div<ActiveStatus>`
  font-size: 15px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${(props) => props.status && '1px solid white'};
  display: flex;
  align-items: center;

  a {
    color: ${Theme.whiteText};
    text-decoration: none;
    transition: 0.4s;
    padding: 18px;

    &:hover {
      color: ${Theme.blueText};
    }
  }

  img {
    margin-right: 8px;
  }
`;

interface ConnectBtnProps {
  connected: boolean;
}

export const RightSideContent = styled.div`
  /* margin-left: auto; */
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin: 0;
    @media (min-width: 1000px) {
      float: right;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ConnectBtn = styled.button<ConnectBtnProps>`
  width: ${(props) => (props.connected ? '141px' : '156px')};
  height: 50px;
  background: ${Theme.selectedWalletBg};
  border-radius: ${Theme.btnBorRadius};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.whiteText};
  border: none;
  text-decoration: none;
  margin: 12px 0;

  span {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.71;
  }

  @media (min-width: 400px) {
    min-height: 45px;
    min-width: 141px;
    font-size: 15px;
  }
`;

interface UserIconProps {
  connected: boolean;
}

export const UserIconContainer = styled.div<UserIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${(props) => (props.connected ? '18px' : '24px')};

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

export const UserAddress = styled.div`
  background: rgba(45, 210, 255, 0.1);
  border-left: 1px solid ${Theme.linkColor};
  box-sizing: border-box;
  border-radius: ${Theme.primaryBorRadius};
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.linkColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
`;

export const EthBalance = styled.span`
  margin: 0 24px;
  color: ${Theme.whiteText};
  font-size: 14px;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

export const EthBalanceText = styled.div`
  margin: 0 10px 0 24px;
`;

interface NetworkProps {
  network: string;
}

const setBackgroundColor = (network: string): string => {
  switch (network) {
    case Networks.ropsten:
    case Networks.mainnet:
      return Color.ethereumColor;

    case Networks.bscTestnet:
    case Networks.bscMainnet:
      return Color.binanceColor;

    case Networks.maticTestnet:
    case Networks.maticMainnet:
      return Color.maticColor;

    default:
      return Theme.blueText;
  }
};

const setFontColor = (network: string): string => {
  switch (network) {
    case Networks.ropsten:
    case Networks.mainnet:
      return Theme.whiteText;

    case Networks.bscTestnet:
    case Networks.bscMainnet:
      return Theme.whiteText;

    case Networks.maticTestnet:
    case Networks.maticMainnet:
      return Theme.whiteText;

    default:
      return Theme.whiteText;
  }
};

export const Network = styled.div<NetworkProps>`
  height: 40px;
  background: ${(props) => setBackgroundColor(props.network)};
  color: ${(props) => setFontColor(props.network)};
  font-weight: 600;
  font-size: 12px;
  border-radius: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms all;
`;

export const MenuIconEl = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    margin-left: 32px;
  }
`;

// export const HamburgerIcon = styled.span`
//   font: inherit;
//   display: inline-block;
//   overflow: visible;
//   margin: 0;
//   padding: 2px 0px 0px;
//   cursor: pointer;
//   transition-timing-function: linear;
//   transition-duration: 0.15s;
//   transition-property: opacity, filter;
//   text-transform: none;
//   color: inherit;
//   border: 0;
//   background-color: transparent;
//   display: none;

//   @media (max-width: 1000px) {
//     display: block;
//   }
// `;

// export const Box = styled.span`
//   position: relative;
//   display: inline-block;
//   width: 20px;
//   height: 15px;
// `;

// export const Inner = styled.span`
//   transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
//   transition-duration: 75ms !important;
//   position: absolute;
//   transition-timing-function: ease;
//   transition-duration: 0.15s;
//   transition-property: transform;
//   border-radius: 4px;
//   background-color: var(--color-texts-opacity);
//   top: 50%;
//   display: block;
//   margin-top: -2px;
//   width: 20px;
//   height: 3px;

//   &:before {
//     display: block;
//     content: '';
//     position: absolute;
//     width: 20px;
//     height: 3px;
//     border-radius: 4px;
//     background-color: ${Theme.whiteText};
//     top: -6px;
//     transition: top 75ms ease 0.12s, opacity 75ms ease;
//   }

//   &:after {
//     display: block;
//     content: '';
//     position: absolute;
//     width: 20px;
//     height: 3px;
//     border-radius: 4px;
//     background-color: ${Theme.whiteText};
//     bottom: -6px;
//     transition: bottom 75ms ease 0.12s,
//       transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
//   }
// `;
