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
  margin-top: 13px;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin-top: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${Theme.whiteText};
  text-align: center;

  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const AcceptCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const AcceptBtn = styled.button`
  width: 164px;
  height: 40px;
  margin: 56px auto 0;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;

export const CheckBox = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${Theme.primaryBg};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;

  img {
    opacity: 0;
    width: 12px;
    height: 10px;
  }

  input {
    display: none;
  }

  input:checked + ${CheckBox} img {
    opacity: 1;
  }

  span {
    font-size: 12px;
    line-height: 20px;
    color: ${Theme.linkColor};
    margin-left: 6px;
  }
`;
