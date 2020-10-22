import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

export const StyledRow = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px;
`;

export const StyledText = styled.Text`
  color: ${COLORS.textColor};
  font-size: 16;
`;

export const StyledSeperator = styled.View`
  background-color: ${COLORS.borderColor};
  height: ${StyleSheet.hairlineWidth};
`;
