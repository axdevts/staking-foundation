import { useState } from 'react';
import { Header, LoadingText } from './style';
import { RightArrow } from '../../../../images';
import { AmountContainer, ImgContainer } from '../confirm/style';
import {
  WaitText,
  TrxId,
  CopyIconContainer,
  LoaderContainer,
  CopySuccess,
  StakeModalContainer,
  TrxIdContainer
} from './style';
import { CopyIcon } from '../../../../images';
import { getConfig, copyTextToClipboard } from '../../../../utils';
import { useSelector } from 'react-redux';

interface Props {
  tokenAmount: string;
  token: string;
  rptAmount: number;
  transactionId: string;
}

const Processing = (props: Props) => {
  const { tokenAmount, token, rptAmount, transactionId } = props;

  const [show, setShow] = useState(false);

  const { loading } = useSelector((state: any) => state.stake);

  const handleCopyClick = () => {
    copyTextToClipboard(transactionId);
    if (!show) {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  return (
    <StakeModalContainer>
      <Header>Deposit: Pending</Header>
      <AmountContainer className="notranslate">
        {tokenAmount} {token}
        <ImgContainer>
          <img src={RightArrow.default} alt="arrow" />
        </ImgContainer>
        {rptAmount} RPT
      </AmountContainer>
      <WaitText>
        Your transaction is in progress. Please wait for the confirmation.
      </WaitText>
      <LoaderContainer />
      <TrxIdContainer>
        <TrxId>{transactionId}</TrxId>
        <CopyIconContainer onClick={handleCopyClick}>
          <img src={CopyIcon.default} alt="copy" />
        </CopyIconContainer>
        <CopySuccess show={show}>Copied to clipboard</CopySuccess>
      </TrxIdContainer>
      {loading && <LoadingText>{getConfig().transactionText}</LoadingText>}
    </StakeModalContainer>
  );
};

export default Processing;
