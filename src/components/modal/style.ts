import styled from 'styled-components';
import { Theme } from '../../utils';

interface Props {
  show: boolean;
}

export const ModalWrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2e2e2ed9;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: ${(props) => (props.show ? '6' : '-3')};
  opacity: ${(props) => (props.show ? '1' : '0')};
`;

export const ModalBorder = styled.div`
  background-image: conic-gradient(
    from 215deg at 37.23% 50%,
    #eeeeee 0deg,
    #fffee2 14.87deg,
    rgba(255, 255, 255, 0.950883) 25.67deg,
    rgba(255, 186, 255, 0.850701) 38.19deg,
    rgba(255, 255, 255, 0.815523) 53deg,
    #79a2f2 72.26deg,
    #20282e 122.18deg,
    #29353c 138.07deg,
    rgba(255, 255, 255, 0.596267) 145.34deg,
    #ffe978 162.04deg,
    #79a2f2 175.13deg,
    rgba(255, 255, 255, 0.741036) 186.54deg,
    #79a2f2 199.54deg,
    #85839c 222.78deg,
    #ffffff 247.79deg,
    #51555e 320.65deg,
    #699cff 343.05deg,
    #ffffff 348.79deg,
    #79a2f2 354.77deg,
    #ffffff 360deg
  );
  position: relative;
  padding: 1px;
  width: 432px;
  border-radius: 12px;
  margin: 165px auto 0;

  @media screen and (max-width: 586px) {
    width: 95vw;
    margin: 10px;
    padding: 1px;
    height: auto;
  }
`;

export const ModalContainer = styled.div`
  width: 430px;
  padding: 27px 30px 41px 30px;
  background: ${Theme.primaryBg};
  box-shadow: ${Theme.modalShadow};
  border-radius: 10px;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 50px 30px 41px 30px;
  }

  @media (max-width: 500px) {
    max-height: 99%;
    overflow-y: auto;
  }
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: -25px;
  right: -30px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
