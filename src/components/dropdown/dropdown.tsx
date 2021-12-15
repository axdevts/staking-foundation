import { useState } from 'react';
import {
  DropdownContainer,
  DropdownWrapper,
  OptionsContainer,
  Options
} from './style';
import { SelectArrow } from '../../images';

interface Props {
  initialValue: string;
  handleSelect: (option: string) => void;
  optionItems: Array<string>;
}

const Dropdown = (props: Props) => {
  const { initialValue, handleSelect, optionItems } = props;

  const [show, setShow] = useState(false);

  const handleOptions = (option: string) => {
    handleSelect(option);
    setShow(false);
  };

  return (
    <DropdownWrapper>
      <DropdownContainer show={show} onClick={() => setShow(!show)}>
        {initialValue}
        <img src={SelectArrow.default} alt="select arrow" />
      </DropdownContainer>
      {show && (
        <OptionsContainer>
          {optionItems.map((v) => (
            <Options key={v} onClick={() => handleOptions(v)}>
              {v}
            </Options>
          ))}
        </OptionsContainer>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
