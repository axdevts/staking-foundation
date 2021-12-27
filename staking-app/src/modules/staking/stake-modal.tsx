import { Fragment } from "react";
import { Confirm, Processing, Success } from "./components";
import { StakeSteps } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { stakeToken } from "../../logic/actions";

interface Props {
  closeModal: () => void;
}

const StakeModal = (props: Props) => {
  const { closeModal } = props;

  const { tokenAmount, token, rptAmount, step, transactionId } = useSelector(
    (state: any) => state.stake
  );
  const { walletConnected, userAddress } = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch();

  const confirmTransaction = async (): Promise<void> => {
    if (walletConnected) {
      dispatch(stakeToken(token, tokenAmount, userAddress));
    }
  };

  const renderStep = () => {
    switch (step) {
      case StakeSteps.confirm:
        return (
          <Confirm
            confirmTransaction={confirmTransaction}
            closeModal={closeModal}
            tokenAmount={parseFloat(tokenAmount).toLocaleString()}
            token={token}
            rptAmount={rptAmount}
          />
        );
      case StakeSteps.processing:
        return (
          <Processing
            tokenAmount={parseFloat(tokenAmount).toLocaleString()}
            token={token}
            rptAmount={rptAmount}
            transactionId={transactionId}
          />
        );
      case StakeSteps.success:
        return (
          <Success
            tokenAmount={parseFloat(tokenAmount).toLocaleString()}
            token={token}
            rptAmount={rptAmount}
            transactionId={transactionId}
            closeModal={closeModal}
          />
        );
    }
  };

  return <Fragment>{renderStep()}</Fragment>;
};

export default StakeModal;
