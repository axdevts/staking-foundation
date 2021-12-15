import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

export const LoaderComponent = styled.div`
  width: 15px;
  height: 15px;
  border: 3px solid #ffffff;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 700ms linear infinite;
`;
