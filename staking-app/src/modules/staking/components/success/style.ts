import styled from 'styled-components';
import { Theme } from '../../../../utils';

export const Header = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.whiteText};
  text-transform: capitalize;
`;

export const WarningText = styled.div`
  font-weight: 700;
  margin-top: 15px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: ${Theme.warning}; ;
`;

export const ThanksBtnCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
`;

export const ThanksBtn = styled.button`
  width: 160px;
  height: 48px;
  font-size: 14px;
  line-height: 19px;
`;
