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

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 31px;
`;

export const ConnectCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ConnectBtn = styled.button`
  width: 164px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
