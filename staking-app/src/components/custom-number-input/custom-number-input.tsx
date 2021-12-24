import { useState } from 'react';
import { MyNumberInput } from './style';

const CustomNumberInput = (props: any) => {
  const [value, setValue] = useState('');

  return (
    <MyNumberInput
      isNumericString={true}
      thousandSeparator={true}
      value={value}
      allowNegative={false}
      onValueChange={(vals: any) => {
        setValue(vals.value);
      }}
      {...props}
    />
  );
};

export default CustomNumberInput;
