import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CadastroUsuarioFormInput,
  cadastroUsuarioValidationSchema,
} from '../../../domain-types';
import { useAuth, ValidationError, useErrors, Cache } from '../../../core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLogin } from '.';

export const usePaginaCadastro = () => {
  const { getCurrentAccount, saveAccessToken } = useAuth();
  const { errors, setErrors, addError, clearErrors } = useErrors();

  const form = useForm<CadastroUsuarioFormInput>({
    resolver: yupResolver(cadastroUsuarioValidationSchema),
    mode: 'onChange',
  });
  const cadastro = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit: SubmitHandler<CadastroUsuarioFormInput> = async (data) => {
    try {
      const accessToken = await cadastro.mutateAsync({
        data,
      });
      onSuccess(accessToken);
    } catch (error) {
      onError(error as Error);
    }
  };

  const onSuccess = (accessToken: string) => {
    saveAccessToken(accessToken);
    if (location.state !== null) {
      navigate((location.state as any).from.pathname);
    } else {
      Cache.remove({ key: 'rememberedUserWeb' });
      navigate('/');
    }
  };

  const onError = (error: Error) => {
    if (error instanceof ValidationError) {
      setErrors(error.errors);
    } else {
      addError(error.message);
    }
  };

  useEffect(() => {
    if (getCurrentAccount()) {
      navigate('/');
    }
  }, []);

  return {
    form,
    errors,
    onSubmit,
    clearErrors,
  };
};
