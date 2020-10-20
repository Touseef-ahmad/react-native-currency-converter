import { func, ReactComponentLike, string } from 'prop-types';

export const propTypes = {
  rightIcon: ReactComponentLike.isRequired,
  text: string.isRequired,
  onPress: func.isRequired,
};
