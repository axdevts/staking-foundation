import styled from 'styled-components';
import { Color, Theme, LayoutProps } from '../../utils';
import { CustomNumberInput } from '../../components';

export const HomeWrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 780px) {
    margin: 40px auto;
    height: 100%;
  }
`;

interface HeaderTextProps {
  textAlign?: string;
  margin?: string;
  maxWidth?: string;
  width?: string;
}

export const MainContainer = styled.div<HeaderTextProps>`
  margin: 0 auto;
  width: 100%;
  border-radius: ${Theme.secondaryBorRadius};
  background-color: #2e2e2ed9;
  box-shadow: -3px -8px 8px 1px rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  padding: 60px 15px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 0.625rem;
`;

export const SectionTitle = styled.div`
  border: 5px solid white;
  text-align: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 2rem;
    letter-spacing: -1.2px;
    line-height: 1.375;
    color: ${Theme.whiteText};
    padding: 0.75rem;
  }
`;

export const ConnectBtn = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  transition: 0.4s;
  min-width: 175px;
  color: ${Theme.whiteText};
  background-color: ${Theme.redText};
  border-radius: ${Theme.btnBorRadius};
  font-size: 1.1rem;
  line-height: 1.88;
  text-align: center;
  padding: 0.75rem 1.5625rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ViewMore = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  color: ${Theme.whiteText};
  background-color: ${Color.successPrimary};
  box-shadow: ${Theme.primaryBoxShadow};
  border-radius: ${Theme.secondaryBorRadius};
`;

export const ViewMoreContainer = styled.div`
  display: flex;
  position: relative;
  padding: 0.75rem 1.25rem;
  align-items: center;
  justify-content: space-between;

  strong {
    span {
      text-decoration: underline;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const Success = styled.div`
  font-size: 0.8125rem;
  line-height: 1.63;
  color: ${Color.successPrimary};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50rem;
  padding: 0.25rem 1rem;
  background-color: ${Theme.whiteText};
`;

export const CloseBtn = styled.div`
  color: ${Theme.whiteText};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
  cursor: pointer;
  margin-top: -2px;

  &:hover {
    color: ${Theme.blackText};
  }
`;

export const ContainerGrp = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 1.875rem;

  & > div:last-child {
    margin-right: 0;
  }
`;

export const Container = styled.div`
  margin-bottom: 1.875rem;
  max-width: 345px;
  padding: 0 15px;
  background-color: ${Theme.cardBg};
  text-align: center;
  transition: 0.3s;
  border-radius: 10px;
  padding: 1.875rem;
  width: 33%;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
    width: 50%;
  }

  @media screen and (max-width: 576px) {
    flex: 0 0 66.66667%;
    width: 66.66667%;
  }
`;

export const Title = styled.div<LayoutProps>`
  color: ${(props) => (props.color == 'red' ? Theme.redText : Theme.blackText)};
  font-size: 0.8125rem;
  line-height: 1.63;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SubTitle = styled.div`
  margin-top: 1.875rem;
  font-size: 3rem;
  letter-spacing: -1.8px;
  line-height: 1.21;
  color: ${Theme.darkText};
  font-weight: 700;
`;

export const Amount = styled.div`
  margin-top: 1.875rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid #e7e9ed;
  border-bottom: 1px solid #e7e9ed;
  letter-spacing: -0.2px;
  line-height: 29px;
  font-size: 1.1875rem;
  padding: 1.25rem 0;

  span {
    font-weigth: bold;
  }
`;

export const SubmitBtn = styled.div`
  cursor: pointer;
  background-color: black;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  color: white;
  transition: 0.4s;
  margin-top: 0.75rem;
  font-weight: 700;
  padding: 0.75rem;
  font-size: 1.1rem;
  border-radius: 8px;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const DesText = styled.div`
  font-size: 0.9375rem;
  letter-spacing: -0.1px;
  line-height: 1.73;
  opacity: 0.7;
  color: #13151c;
  margin-top: 0.75rem;
`;

export const InputerContainer = styled.div`
  margin-top: 1.875rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid #e7e9ed;
  border-bottom: 1px solid #e7e9ed;
  letter-spacing: -0.2px;
  line-height: 29px;
  font-size: 1.1875rem;
  padding: 0.9rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MinusBtn = styled.button`
  cursor: pointer;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
  background-color: #343a40;
  margin-right: 8px;
  border: none;
`;

export const PlusBtn = styled.button`
  cursor: pointer;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
  background-color: #343a40;
  margin-left: 8px;
  border: none;
`;

export const MyNumberInput = styled(CustomNumberInput)`
  color: #000;
  display: inline-block;
  vertical-align: top;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  padding: 0 2px;
  min-width: 35px;
  text-align: center;
  background-color: white;
  border: 0;
  width: 2%;

  ::placeholder {
    color: ${Theme.darkText};
  }

  /* :focus {
    border: 0;
  } */

  @media (max-width: 1000px) {
    font-size: 18px;
    text-align: center;
  }
`;
