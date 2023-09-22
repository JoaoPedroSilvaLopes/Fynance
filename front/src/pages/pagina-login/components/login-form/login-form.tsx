import { ChangeEvent } from 'react';
import { Col, Form } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';

import {
  TextInput,
  Button,
  PasswordInput,
  LinkButton,
} from '../../../../components';
import { LoginUsuarioFormInput } from '../../../../domain-types';

import * as S from './login-form.styles';
import { Link } from 'react-router-dom';

type Props = {
  isCheck: boolean;
  onSubmit: SubmitHandler<LoginUsuarioFormInput>;
  handleCheckValue?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm: React.FC<Props> = ({
  onSubmit,
  isCheck,
  handleCheckValue,
}) => {
  const { control, formState, handleSubmit } =
    useFormContext<LoginUsuarioFormInput>();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Col className="mb-3">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              placeholder="E-mail"
              variant="secondary"
              leftIcon={FaUserCircle}
              error={formState.errors.email?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-4">
        <Controller
          name="senha"
          control={control}
          render={({ field }) => (
            <PasswordInput
              placeholder="Senha"
              variant="secondary"
              error={formState.errors.senha?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <S.FormCheck
        className="mb-4"
        inline
        label="Lembrar-me"
        checked={isCheck}
        onChange={handleCheckValue}
      />
      <Col className="mb-4">
        <Button
          type="submit"
          variant="secondary"
          className="w-100"
          size="lg"
          disabled={!formState.isValid}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Col>
      <S.Footer className="mb-4">
        <S.FooterMessage>Não possui conta?</S.FooterMessage>
        <Link to={'/cadastro'}>
          <LinkButton variant="secondary">Registre-se</LinkButton>
        </Link>
      </S.Footer>
    </Form>
  );
};

export default LoginForm;
