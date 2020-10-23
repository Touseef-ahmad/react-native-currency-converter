import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const StyledImage = styled.Image`
  margin-right: 10px;
  width: 20px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledText = styled.Text`
  color: ${COLORS.white};
  font-size: 16px;
`;
