import {
  ModalContainer,
  ModalWrapper,
  ModalBorder,
  CrossIconContainer,
  ModalHeader,
  ModalBody,
  InputTitle,
  InputBox,
  StatusBox,
  WhitelistBox,
  StatusBtn,
  ButtonField,
  SaveButton
} from './style';
import { CloseIcon } from '../../images';

interface Props {
  show: boolean;
  closeModal: () => void;
}

const Modal = (props: Props) => {
  const { show, closeModal } = props;

  return (
    <ModalWrapper show={show}>
      <ModalBorder>
        <ModalContainer>
          <CrossIconContainer onClick={closeModal}>
            <img src={CloseIcon.default} alt="close" />
          </CrossIconContainer>
          <ModalHeader>Add New Wallet</ModalHeader>
          <ModalBody>
            <InputTitle>Wallet Address</InputTitle>
            <InputBox />
            <StatusBox>Status</StatusBox>
            <WhitelistBox>Whitelisted</WhitelistBox>
          </ModalBody>
          <ButtonField>
            <SaveButton>
              <span data-text="Save">Save</span>
            </SaveButton>
          </ButtonField>
        </ModalContainer>
      </ModalBorder>
    </ModalWrapper>
  );
};

export default Modal;
