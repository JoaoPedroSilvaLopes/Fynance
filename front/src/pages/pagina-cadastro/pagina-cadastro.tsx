import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  CadastroUsuarioFormInput,
  cadastroUsuarioValidationSchema
} from '../../domain-types';
import { CadastroForm } from './components';

import * as S from './pagina-cadastro.styles';

const PaginaCadastro: React.FC = () => {
  const form = useForm<CadastroUsuarioFormInput>({
    resolver: yupResolver(cadastroUsuarioValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<CadastroUsuarioFormInput> = async (data) => {
    console.log('Entrou');
  };

  return (
    <S.Container>
      <S.Content>GLB Viewer</S.Content>
      <S.AuthContainer>
        <S.Title>CADASTRO</S.Title>
        <S.Children>
          <FormProvider {...form}>
            <CadastroForm onSubmit={onSubmit} />
          </FormProvider>
        </S.Children>
      </S.AuthContainer>
    </S.Container>
  );
};

export default PaginaCadastro;
