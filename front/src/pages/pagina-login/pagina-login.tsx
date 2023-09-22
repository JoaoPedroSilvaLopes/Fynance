import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginForm } from './components';
import {
  LoginUsuarioFormInput,
  loginUsuarioValidationSchema,
} from '../../domain-types';
import { Cache, useResponsive } from '../../core';
import { LogoIcon } from '../../assets'

import * as S from './pagina-login.styles';

const PaginaLogin: React.FC = () => {
  const form = useForm<LoginUsuarioFormInput>({
    resolver: yupResolver(loginUsuarioValidationSchema),
    mode: 'onChange',
  });

  const isLogged = useState(false);
  const { isMobile } = useResponsive()
  const [isCheck, setIsCheck] = useState(false);
  const rememberedUserWeb = Cache.get({ key: 'rememberedUserWeb' });

  const handleCheckValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsCheck(isChecked);
    if (isCheck) {
      Cache.remove({ key: 'rememberedUserWeb' });
    }
  };

  const onSubmit: SubmitHandler<LoginUsuarioFormInput> = async (data) => {
    console.log('Entrou');
  };

  useEffect(() => {
    if (isLogged && isCheck) {
      const email = form.getValues('email');
      Cache.set({ key: 'rememberedUserWeb', value: email });
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
  

  return (
    <>
      <S.Container>
        <S.AuthContainer>
          <S.Title>FAZER LOGIN</S.Title>
          <S.Children>
            <FormProvider {...form}>
              <LoginForm
                onSubmit={onSubmit}
                isCheck={isCheck}
                handleCheckValue={handleCheckValue}
              />
            </FormProvider>
          </S.Children>
        </S.AuthContainer>
        <S.Content>GLB Viewer</S.Content>
      </S.Container>
      {/* <S.WaveIco1n >
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </S.WaveIco1n> */}
      {/* {isMobile && <S.WaveIcon />} */}
    </>
  );
};

export default PaginaLogin;
