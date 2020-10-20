import { string, func } from 'prop-types';

export const propTypes = {
  text: string.isRequired,
  onButtonPress: func.isRequired,
};
