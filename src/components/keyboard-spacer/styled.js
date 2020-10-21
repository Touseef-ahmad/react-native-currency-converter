import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({ keyboardSpace }) => keyboardSpace};
`;
