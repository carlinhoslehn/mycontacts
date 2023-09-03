import PropTypes from 'prop-types';
import { Container, Overlay, Footer } from './style';
import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do Modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>

        </Footer>

      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
