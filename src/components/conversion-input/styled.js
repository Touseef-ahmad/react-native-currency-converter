import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const StyledWrapper = styled.View`
  background-color: ${({ isEditable }) => (isEditable ? COLORS.white : COLORS.offWhite)};
  margin: 10px 20px;
  flex-direction: row;
  border-radius: 5;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${COLORS.white};
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
`;
export const StyledButtonText = styled.Text`
  font-size: 18;
  color: ${COLORS.blue};
  font-weight: bold;
`;
export const StyledInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16;
  color: ${COLORS.textLight};
`;
