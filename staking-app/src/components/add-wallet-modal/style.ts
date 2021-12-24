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
  z-index: ${(props) => (props.show ? '6' : '-3')};
  opacity: ${(props) => (props.show ? '1' : '0')};
  backdrop-filter: blur(14px);
`;

export const ModalBorder = styled.div`
  background: conic-gradient(
    from 215deg at 50% 50%,
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
  width: 605px;
  border-radius: 12px;
  margin: 165px auto 0;
`;
export const ModalContainer = styled.div`
  width: 603px;
  padding: 52px;
  background: #0a0f12;
  box-shadow: ${Theme.modalShadow};
  border-radius: 12px;
  position: relative;
  backdrop-filter: blur(14px);

  @media (max-width: 600px) {
    width: 90%;
    margin: 10px auto 0 auto;
    padding: 50px 30px 41px 30px;
  }

  @media (max-width: 500px) {
    max-height: 90%;
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

  @media (max-width: 600px) {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ModalHeader = styled.div`
  font-size: 24px;
  color: #fff;
  line-height: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid #444444;
`;

export const ModalBody = styled.div`
  padding-top: 37px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  width: 456px;
`;

export const InputTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const InputBox = styled.input`
  margin-top: 14px;
  width: 456px;
  height: 40px;
  background: #23272e;
  border-radius: 6px;
  padding: 12px 17px;
  color: #fff;
  border: none;
`;

export const StatusBox = styled.div`
  margin-top: 37px;
`;

export const WhitelistBox = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBtn = styled.div`
  width: 68px;
  height: 39px;
  background: #23272e;
  border-radius: 86px;
  padding: 2px 5px;
`;

export const SaveButton = styled.button`
  width: 164px;
  height: 40px;
  margin: 56px auto 0;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
  }
`;
export const ButtonField = styled.div`
  text-align: center;
`;
