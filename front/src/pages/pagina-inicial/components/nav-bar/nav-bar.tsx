import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth, Cache } from '../../../../core';
import { Button } from '../../../../components';

import * as S from './nav-bar.styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { saveAccessToken } = useAuth();

  const onLogout = () => {
    Cache.remove({ key: 'accessToken' });
    const acessToken = Cache.get({ key: 'accessToken' });
    saveAccessToken(acessToken);
    queryClient.removeQueries();
    navigate('/login');
  };

  return (
    <S.Container>
      <S.StartWrapper>
      </S.StartWrapper>
      <S.MiddleWrapper>GLB Viewer</S.MiddleWrapper>
      <S.EndWrapper>
        <Button onClick={onLogout}>Sair</Button>
      </S.EndWrapper>
    </S.Container>
  );
};

export default NavBar;
