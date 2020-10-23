import React from 'react';
import { StyledText, StyledRow, StyledSeperator } from './styled';
import { defaultProps, propTypes } from './prop-types';

export const RowItem = ({ rightIcon, text, onPress }) => (
  <StyledRow onPress={onPress}>
    <StyledText>{text}</StyledText>
    {rightIcon}
  </StyledRow>
);
export const RowSeperator = () => <StyledSeperator />;

RowItem.propTypes = propTypes;
RowItem.defaultProps = defaultProps;
