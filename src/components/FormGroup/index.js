import PropTypes from 'prop-types';

import { Container } from './style';

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

FormGroup.defaultProps = {
  error: '',
};
