import {
  ModalContainer,
  ModalWrapper,
  CrossIconContainer,
  ModalBorder
} from './style';
import { CloseIcon } from '../../images';

interface Props {
  children: React.ReactNode;
  show: boolean;
  closeModal: () => void;
}

const Modal = (props: Props) => {
  const { children, show, closeModal } = props;

  return (
    <ModalWrapper show={show}>
      <ModalBorder>
        <ModalContainer>
          <CrossIconContainer onClick={closeModal}>
            <img src={CloseIcon.default} alt="close" />
          </CrossIconContainer>
          {children}
        </ModalContainer>
      </ModalBorder>
    </ModalWrapper>
  );
};

export default Modal;
