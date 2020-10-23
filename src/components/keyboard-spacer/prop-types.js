import { object, func } from 'prop-types';

export const propTypes = {
  style: object,
  onToggle: func,
};

export const defaultProps = {
  style: {},
  onToggle: () => null,
};
