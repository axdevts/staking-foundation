import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { Theme } from '../../utils';

export const MyNumberInput = styled(NumberFormat)`
  width: 200px;
  height: 40px;
  background: ${Theme.primaryBg};
  border: 1px solid ${Theme.btnBor};
  box-sizing: border-box;
  border-radius: ${Theme.primaryBorRadius};
  padding: 8px 12px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${Theme.linkColor};
  transition: 300ms all;

  :focus {
    border: 1px solid ${Theme.linkColor};
  }
`;
