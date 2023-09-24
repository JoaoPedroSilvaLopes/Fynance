import { FormProvider } from 'react-hook-form';
import { CadastroForm } from './components';
import { usePaginaCadastro } from './hooks';
import { MessageList } from '../../components';

import * as S from './pagina-cadastro.styles';

const PaginaCadastro: React.FC = () => {
  const { form, errors, onSubmit, clearErrors } = usePaginaCadastro();

  return (
    <S.Container>
      <S.Content>GLB Viewer</S.Content>
      <S.AuthContainer>
        {errors.length > 0 && (
          <MessageList variant="danger" items={errors} onClose={clearErrors} />
        )}
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
