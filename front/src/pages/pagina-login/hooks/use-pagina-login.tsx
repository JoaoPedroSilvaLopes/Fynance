import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  LoginUsuarioFormInput,
  loginUsuarioValidationSchema,
} from '../../../domain-types';
import { useAuth, Cache, ValidationError, useErrors } from '../../../core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLogin } from '.';

export const usePaginaLogin = () => {
  const { getCurrentAccount, saveAccessToken } = useAuth();
  const { errors, setErrors, addError, clearErrors } = useErrors();

  const form = useForm<LoginUsuarioFormInput>({
    resolver: yupResolver(loginUsuarioValidationSchema),
    mode: 'onChange',
  });
  const [isCheck, setIsCheck] = useState(false);

  const login = useLogin();
  const isLogged = getCurrentAccount();
  const navigate = useNavigate();
  const location = useLocation();

  const rememberedUserWeb = Cache.get({ key: 'rememberedUserWeb' });
  const identificacao = form.getValues('email');

  const handleCheckValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsCheck(isChecked);
    isCheck && Cache.remove({ key: 'rememberedUserWeb' });
  };

  const onSubmit: SubmitHandler<LoginUsuarioFormInput> = async (data) => {
    try {
      const accessToken = await login.mutateAsync({
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
    if (isLogged && isCheck) {
      Cache.set({ key: 'rememberedUserWeb', value: identificacao });
    }
  }, [isLogged]);

  useEffect(() => {
    if (rememberedUserWeb) {
      form.setValue('email', rememberedUserWeb);
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, []);

  useEffect(() => {
    if (getCurrentAccount()) {
      navigate('/');
    }
  }, []);

  return {
    form,
    errors,
    isCheck,
    onSubmit,
    clearErrors,
    handleCheckValue,
  };
};
