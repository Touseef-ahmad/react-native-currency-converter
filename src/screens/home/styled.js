import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const screen = Dimensions.get('window');

export const StyledWrapper = styled.View`
  background-color: ${COLORS.blue};
  flex: 1;
`;

export const StyledErrorWrapper = styled.View`
  align-items: center;
  border-color: red;
  border-width: ${StyleSheet.hairlineWidth};
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledContentWrapper = styled.View`
  padding-top: ${screen.height * 0.1};
`;

export const StyledLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledLogo = styled.Image`
  height: ${screen.width * 0.25};
  position: absolute;
  width: ${screen.width / 0.25};
`;

export const StyledLogoBackground = styled.Image`
  height: ${screen.width * 0.45};
  width: ${screen.width / 0.45};
`;

export const StyledTextHeader = styled.Text`
  color: ${COLORS.white};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledText = styled.Text`
  color: ${COLORS.white};
  font-size: 14px;
  text-align: center;
`;

export const StyledErrorText = styled.Text`
  color: ${COLORS.white};
  font-size: 20px;
  text-align: center;
`;

export const StyledInputContainer = styled.View`
  margin-bottom: 10px;
`;

export const StyledHeader = styled.SafeAreaView`
  align-items: flex-end;
  margin: 20px 0px;
`;
