import { bool, string, func } from 'prop-types';

export const propTypes = {
  isEditable: bool.isRequired,
  text: string.isRequired,
  onButtonPress: func.isRequired,
};
