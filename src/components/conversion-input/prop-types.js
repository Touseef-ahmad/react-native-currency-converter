import { bool, string, func } from 'prop-types';

export const propTypes = {
  editable: bool.isRequired,
  text: string.isRequired,
  onButtonPress: func.isRequired,
};
