import { Col, Form } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import {
  TextInput,
  Button,
  PasswordInput,
  LinkButton,
} from '../../../../components';
import { CadastroUsuarioFormInput } from '../../../../domain-types';
import { Link } from 'react-router-dom';

import * as S from './cadastro-form.styles';

type Props = {
  onSubmit: SubmitHandler<CadastroUsuarioFormInput>;
};

const CadastroForm: React.FC<Props> = ({ onSubmit }) => {
  const { control, formState, handleSubmit } =
    useFormContext<CadastroUsuarioFormInput>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Col className="mb-3">
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <TextInput
              placeholder="Insira seu Nome"
              leftIcon={FaUserCircle}
              error={formState.errors.nome?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-3">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              placeholder="Insira seu Email"
              leftIcon={MdOutlineAlternateEmail}
              error={formState.errors.email?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-3">
        <Controller
          name="senha"
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder="Insira sua Senha"
              error={formState.errors.senha?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-4">
        <Controller
          name="confirmarSenha"
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder="Confirme sua Senha"
              error={formState.errors.confirmarSenha?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-4">
        <Button
          type="submit"
          className="w-100"
          size="lg"
          disabled={!formState.isValid}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Col>
      <S.Footer className="mb-4">
        <Link to={'/login'}>
          <LinkButton>Retornar</LinkButton>
        </Link>
      </S.Footer>
    </Form>
  );
};

export default CadastroForm;
