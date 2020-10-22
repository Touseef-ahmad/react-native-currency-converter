import { bool, func, shape, string } from 'prop-types';

export const propTypes = {
  item: string.isRequired,
  isBaseCurrency: bool.isRequired,
  navigation: shape({
    pop: func.isRequired,
  }).isRequired,
};
