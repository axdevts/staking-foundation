import styled from 'styled-components';
import { Theme } from '../../utils';
import { Bg2 } from '../../images';

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 74px);
  position: relative;

  @media (max-width: 992px) {
    min-height: 100vh;
    padding-top: 120px;
  }
`;

export const ContentBox = styled.div`
  /* height: 100vh; */
  flex: 1;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

interface BorderProps {
  active: boolean;
}

export const MenuItem = styled.div`
  color: ${Theme.whiteText};
  font-size: 15px;
  font-weight: 700;
  border-bottom: 1px solid ${Theme.primaryBor};
  position: relative;
`;

export const Border = styled.div<BorderProps>`
  height: 46px;
  padding: 1px;
  border-radius: 6px;
  background-image: ${(props) =>
    props.active
      ? 'conic-gradient(from 180deg at 50% 50%, #EEEEEE 0deg, #FFFEE2 14.87deg, rgba(255, 255, 255, 0.950883) 25.67deg, rgba(255, 186, 255, 0.850701) 38.19deg, rgba(255, 255, 255, 0.815523) 53deg, #79A2F2 72.26deg, #FFE978 122.18deg, rgba(255, 186, 255, 0.850701) 138.07deg, rgba(255, 255, 255, 0.596267) 145.34deg, #FFE978 162.04deg, #79A2F2 175.13deg, rgba(255, 255, 255, 0.741036) 186.54deg, #79A2F2 199.54deg, rgba(255, 233, 120, 0.23) 222.78deg, #2B2A2A 247.79deg, rgba(133, 174, 255, 0.109315) 320.65deg, #699CFF 343.05deg, #FFFFFF 348.79deg, #79A2F2 354.77deg, #FFFFFF 360deg)'
      : 'transparent'};
`;

interface LinkContainerProps {
  active: boolean;
}

export const LinkContainer = styled.div<LinkContainerProps>`
  height: 44px;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 13px;
  padding-top: 13px;
  line-height: 20px;
  color: ${(props) => (props.active ? Theme.blueText : Theme.whiteText)};
  cursor: pointer;
  transition: 300ms all;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;

  &:hover {
    color: ${Theme.blueText};
  }

  &:after {
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: ${Theme.whiteText};
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 7px;
    padding-top: 7px;
  }
`;

export const ALinkContainer = styled.a<LinkContainerProps>`
  height: 44px;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 13px;
  padding-top: 13px;
  line-height: 20px;
  color: ${Theme.whiteText};
  border-radius: 6px;
  cursor: pointer;
  transition: 300ms all;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: auto;

  &:after {
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 7px;
    padding-top: 7px;
  }
`;

interface SideBarProps {
  show: boolean;
}

export const SideBar = styled.div<SideBarProps>`
  height: 100vh;
  width: 350px;
  padding-top: 50px;
  overflow-y: auto;
  background-color: ${Theme.primaryBg};
  transition: 300ms all;
  padding-left: 20px;
  padding-right: 20px;
  display: none;

  @media (max-width: 1000px) {
    display: ${(props) => props.show && 'block'};
    width: ${(props) => (props.show ? '350px' : '0')};
    opacity: ${(props) => (props.show ? '1' : '0')};
    z-index: 100;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface ContentBoxHeadProps {
  backgroundColor: string;
}

export const ContentBoxHead = styled.div<ContentBoxHeadProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};

  img {
    cursor: pointer;
    display: none;
    pointer-events: none;
    transition: 300ms all;
  }

  @media (max-width: 1000px) {
    padding: 23px 35px 0 35px;

    img {
      display: block;
      pointer-events: auto;
    }
  }
`;

export const LinkGroup = styled.div`
  width: 100%;
  height: 30px;
  padding: 7px 0 7px 65px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.whiteText};
  background-color: ${Theme.primaryBg};
  cursor: pointer;
  margin-top: 20px;
  transition: 300ms all;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${Theme.whiteText};
  }

  @media (max-width: 600px) {
    text-align: center;
    padding: 7px 0;
    justify-content: center;
  }
`;

interface LinkImgProps {
  open: boolean;
}

export const LinkImg = styled.img<LinkImgProps>`
  margin-left: 10px;
  transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: 300ms all;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  border: none;
  background: transparent;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;
