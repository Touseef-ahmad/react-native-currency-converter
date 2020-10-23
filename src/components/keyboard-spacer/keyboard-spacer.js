import React, { useState, useEffect } from 'react';
import { Keyboard, Dimensions, Platform } from 'react-native';
import { StyledContainer } from './styled';
import { defaultProps, propTypes } from './prop-types';

export const KeyboardSpacer = ({ onToggle }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const updateKeyboardSpace = (event) => {
      if (!event.endCoordinates) {
        return;
      }

      const screenHeight = Dimensions.get('window').height;
      const newKeyboardSpace = screenHeight - event.endCoordinates.screenY;
      setKeyboardSpace(newKeyboardSpace);
      onToggle(true, newKeyboardSpace);
    };
    const showEvt = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const showListener = Keyboard.addListener(showEvt, updateKeyboardSpace);

    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onToggle(false, 0);
    };
    const hideEvt = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return <StyledContainer keyboardSpace={keyboardSpace} />;
};

KeyboardSpacer.propTypes = propTypes;
KeyboardSpacer.defaultProps = defaultProps;
