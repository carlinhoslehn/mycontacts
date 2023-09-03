import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './style';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup
        error="O e-mail é inválido"
      >
        <Input type="text" placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
