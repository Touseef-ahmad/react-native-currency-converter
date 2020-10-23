import { func, Node, string } from 'prop-types';

export const propTypes = {
  rightIcon: Node,
  text: string.isRequired,
  onPress: func.isRequired,
};
export const defaultProps = {
  rightIcon: null,
};
