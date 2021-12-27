import { Fragment } from 'react';
import { Header, LoadingText } from './style';
import {
  AmountContainer,
  ImgContainer,
  TextContainer,
  WaringText,
  BtnContainer,
  ConfirmBtn,
  BorderCancelBtn,
  CancelBtn
} from './style';
import { RightArrow } from '../../../../images';
import { Loader } from '../../../../components';
import { useSelector } from 'react-redux';
import { getConfig } from '../../../../utils';

interface Props {
  confirmTransaction: () => Promise<void>;
  closeModal: () => void;
  tokenAmount: string;
  token: string;
  rptAmount: number;
}

const Confirm = (props: Props) => {
  const { confirmTransaction, closeModal, tokenAmount, token, rptAmount } =
    props;

  const { loading } = useSelector((state: any) => state.stake);

  const handleConfirm = async () => {
    await confirmTransaction();
  };

  return (
    <Fragment>
      <Header>providing liquidity to the pool</Header>
      <AmountContainer className="notranslate">
        {tokenAmount} {token}
        <ImgContainer>
          <img src={RightArrow.default} alt="arrow" />
        </ImgContainer>
        {rptAmount} RPT
      </AmountContainer>

      <TextContainer>
        Attention! You are now depositing your stablecoins to the pool. Your
        stablecoins will be locked in the pools smart backed liquidity contracts
        for 14 days, starting from time of deposit. Withdrawals will only be
        available after 14 days. If you require the liquidity before that you
        should not contribute to the Liquidity Pool. Your USDT, USDC &amp; DAI
        will be deployed into the pool's automated yield optimization
        strategies.
      </TextContainer>

      <WaringText>YOUR CONTRIBUTION IS AT RISK!</WaringText>
      <BtnContainer>
        <ConfirmBtn onClick={handleConfirm} disabled={loading}>
          {loading ? <Loader /> : <span data-text="Confirm">Confirm</span>}
        </ConfirmBtn>
        <BorderCancelBtn>
          <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
        </BorderCancelBtn>
      </BtnContainer>
      {loading && <LoadingText>{getConfig().transactionText}</LoadingText>}
    </Fragment>
  );
};

export default Confirm;
