import { func, shape, string } from 'prop-types';

export const propTypes = {
  navigation: shape({ pop: func.isRequired }).isRequired,
  route: shape({ params: func.isRequired }).isRequired,
};

export const ItemPropTypes = {
  Item: string.isRequired,
};
