import styled, { keyframes } from 'styled-components';
import { Theme, Color } from '../../../../utils';

export const StakeModalContainer = styled.div`
  padding: 0;

  @media (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.whiteText};
  text-transform: capitalize;
`;

export const WaitText = styled.div`
  margin-top: 29px;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.whiteText};
  text-align: left;
`;

export const TrxIdContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  background-color: ${Theme.primaryBg};
  padding: 6px 10px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const TrxId = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: ${Theme.linkColor};
  cursor: pointer;
  word-break: break-all;
  margin-right: 18px;
`;

export const CopyIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const spinAnimation = keyframes`
  from { 
    transform: rotate(0deg) 
  }
  to { 
    transform: rotate(359deg) 
  }
`;

export const LoaderContainer = styled.div`
  margin: 12px auto 0 auto;
  width: 52px;
  height: 52px;
  border-left: 5px solid ${Theme.primaryBg};
  border-top: 5px solid ${Theme.linkColor};
  border-right: 5px solid ${Theme.linkColor};
  border-bottom: 5px solid ${Theme.linkColor};
  border-radius: 50%;
  animation: ${spinAnimation} 2000ms linear infinite;
`;

interface CopyProps {
  show: boolean;
}

export const CopySuccess = styled.div<CopyProps>`
  padding: 17px 16px 10px 16px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${Theme.whiteText};
  position: absolute;
  background-color: ${Color.blackSecondary};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -46px;
  right: -57px;
  transition: 300ms all;
  opacity: ${(props) => (props.show ? '1' : '0')};
  z-index: 1000;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: ${Color.blackSecondary};
    position: absolute;
    top: -5px;
    right: 50%;
    transform: rotate(45deg) translateX(50%) translateY(-50%);
  }

  @media (max-width: 600px) {
    bottom: -70px;
    right: 50%;
    transform: translateX(50%);
    width: 160px;
  }
`;

export const LoadingText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${Theme.whiteText};
`;
