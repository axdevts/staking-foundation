import { useState, Fragment } from 'react';
import { Connect, Accept, Select } from './components';
import { ConnectSteps } from '../../utils';
import { WalletTypes, StoreageKey } from '../../utils';
import wallet from '../../utils/wallet';

interface Props {
  closeModal: () => void;
}

const LoginModal = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(ConnectSteps.select);
  const [selectedWallet, setSelectedWallet] = useState(WalletTypes.default);
  const { closeModal } = props;

  const selectWallet = (walletType: number) => {
    setSelectedWallet(walletType);
    setCurrentStep(ConnectSteps.connect);
  };

  const handleAcceptTerms = async (): Promise<void> => {
    try {
      //@ts-ignore
      await wallet.setProvider(selectedWallet);
      await wallet.login(selectedWallet);
      localStorage.setItem(StoreageKey.walletType, selectedWallet.toString());
      closeModal();
      setCurrentStep(ConnectSteps.select);
    } catch (e) {
      console.log('something went wrong in login wallet', e);
    }
  };

  const handleConnect = async (): Promise<void> => {
    const doNotShowAgain = localStorage.getItem(StoreageKey.doNotShowAgain);

    if (doNotShowAgain === 'true') {
      await handleAcceptTerms();
    } else {
      setCurrentStep(ConnectSteps.accept);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case ConnectSteps.select:
        return <Select selectWallet={selectWallet} />;
      case ConnectSteps.connect:
        return (
          <Connect
            handleConnect={handleConnect}
            selectedWallet={selectedWallet}
          />
        );
      case ConnectSteps.accept:
        return <Accept handleAcceptTerms={handleAcceptTerms} />;
      default:
        return null;
    }
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default LoginModal;
