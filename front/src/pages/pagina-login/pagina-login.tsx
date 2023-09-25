import { FormProvider } from 'react-hook-form';
import { LoginForm } from './components';
import { usePaginaLogin } from './hooks';
import { MessageList } from '../../components';

import * as S from './pagina-login.styles';

const PaginaLogin: React.FC = () => {
  const { form, errors, isCheck, onSubmit, clearErrors, handleCheckValue } =
    usePaginaLogin();

  return (
    <S.Container>
      <S.AuthContainer>
        <S.Children>
          <S.Title>FAZER LOGIN</S.Title>
          {errors.length > 0 && (
            <MessageList
              variant="danger"
              items={errors}
              onClose={clearErrors}
            />
          )}
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
  );
};

export default PaginaLogin;
