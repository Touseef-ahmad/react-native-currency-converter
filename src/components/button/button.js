import React from 'react';
import { StyledImage, StyledTouchableOpacity, StyledText } from './styled';
import { REVERSE_IMAGE } from '../../utils';
import { propTypes } from './prop-types';

export const Button = ({ text, onButtonPress }) => (
  <StyledTouchableOpacity onPress={onButtonPress}>
    <StyledImage source={REVERSE_IMAGE} resizeMode='contain' />
    <StyledText>{text}</StyledText>
  </StyledTouchableOpacity>
);

Button.propTypes = propTypes;
