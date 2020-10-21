import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const screen = Dimensions.get('window');

export const StyledWrapper = styled.View`
  flex: 1;
  background-color: ${COLORS.blue};
`;
export const StyledErrorWrapper = styled.View`
  border-color: red;
  border-width: ${StyleSheet.hairlineWidth};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;
export const StyledContentWrapper = styled.View`
  padding-top: ${screen.height * 0.1};
`;

export const StyledLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20;
`;
export const StyledLogo = styled.Image`
  position: absolute;
  width: ${screen.width / 0.25};
  height: ${screen.width * 0.25};
`;
export const StyledLogoBackground = styled.Image`
  width: ${screen.width / 0.45};
  height: ${screen.width * 0.45};
`;

export const StyledTextHeader = styled.Text`
  color: ${COLORS.white};
  font-weight: bold;
  font-size: 30;
  text-align: center;
  margin-bottom: 20;
`;
export const StyledText = styled.Text`
  font-size: 14;
  color: ${COLORS.white};
  text-align: center;
`;
export const StyledErrorText = styled.Text`
  color: ${COLORS.white};
  font-size: 20;
  text-align: center;
`;
export const StyledInputContainer = styled.View`
  margin-bottom: 10;
`;
export const StyledHeader = styled.SafeAreaView`
  align-items: flex-end;
  margin: 20px 0;
`;
