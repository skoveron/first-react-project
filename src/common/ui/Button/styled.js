import styled from 'styled-components';

export const StyledButton = styled.button`
  color: red;
  ${(props) => {
      console.log(props);
  }}
`;