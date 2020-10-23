import React from 'react';
import { StyledWrapper, StyledButton, StyledButtonText, StyledInput } from './styled';
import { propTypes } from './prop-types';

export const ConversionInput = ({ isEditable, text, onButtonPress, ...props }) => (
  <StyledWrapper isEditable={isEditable}>
    <StyledButton onPress={onButtonPress}>
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
    <StyledInput {...props} />
  </StyledWrapper>
);

ConversionInput.propTypes = propTypes;
