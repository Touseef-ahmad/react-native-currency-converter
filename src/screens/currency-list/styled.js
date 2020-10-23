import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const StyledWrapper = styled.View`
  background-color: ${COLORS.white};
  flex: 1;
`;

export const StyledFooterComponent = styled.View`
  padding-bottom: ${({ insets }) => insets.bottom};
`;
