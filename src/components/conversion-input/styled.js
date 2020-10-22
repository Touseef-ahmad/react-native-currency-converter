import styled from 'styled-components/native';
import { COLORS } from '../../styles';

export const StyledWrapper = styled.View`
  background-color: ${({ isEditable }) => (isEditable ? COLORS.white : COLORS.offWhite)};
  border-radius: 5px;
  flex-direction: row;
  margin: 10px 20px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${COLORS.white};
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 15px;
`;

export const StyledButtonText = styled.Text`
  color: ${COLORS.blue};
  font-size: 18px;
  font-weight: bold;
`;

export const StyledInput = styled.TextInput`
  color: ${COLORS.textLight};
  flex: 1;
  font-size: 16px;
  padding: 10px;
`;
