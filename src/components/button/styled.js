import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const StyledImage = styled.Image`
  margin-right: 10;
  width: 20;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const StyledText = styled.Text`
  color: ${COLORS.white};
  font-size: 16;
`;
