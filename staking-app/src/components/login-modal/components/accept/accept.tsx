import { Fragment, useState } from 'react';
import {
  Header,
  IconContainer,
  TextContainer,
  AcceptCont,
  AcceptBtn,
  CheckBoxLabel,
  CheckBox
} from './style';
import { AttentionIcon, CheckedIcon } from '../../../../images';
import { StoreageKey, Paths } from '../../../../utils';
import Loader from '../../../loader';
import { useHistory } from 'react-router-dom';

interface Props {
  handleAcceptTerms: () => Promise<void>;
}

const Accept = (props: Props) => {
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const { handleAcceptTerms } = props;

  const history = useHistory();

  const handleAccept = async () => {
    if (checked) {
      localStorage.setItem(StoreageKey.doNotShowAgain, 'true');
    } else {
      localStorage.setItem(StoreageKey.doNotShowAgain, 'false');
    }

    setLoading(true);
    await handleAcceptTerms();
    setLoading(false);
  };

  return (
    <Fragment>
      <Header>Attention</Header>
      <IconContainer>
        <img src={AttentionIcon.default} alt="attention" />
      </IconContainer>
      <TextContainer>Please accept the before continuing</TextContainer>
      <CheckBoxLabel>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <CheckBox>
          <img src={CheckedIcon.default} alt="checked" />
        </CheckBox>
        <span>Do not show it again</span>
      </CheckBoxLabel>

      <AcceptCont>
        <AcceptBtn onClick={handleAccept} disabled={loading}>
          {loading ? <Loader /> : 'I accept and agree'}
        </AcceptBtn>
      </AcceptCont>
    </Fragment>
  );
};

export default Accept;
