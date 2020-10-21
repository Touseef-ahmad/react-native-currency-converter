import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export const StyledRow = styled.TouchableOpacity`
  padding: 20px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const StyledText = styled.Text`
  font-size: 16;
  color: ${COLORS.textColor};
`;
export const StyledSeperator = styled.View`
  background-color: ${COLORS.borderColor};
  height: ${StyleSheet.hairlineWidth};
`;
