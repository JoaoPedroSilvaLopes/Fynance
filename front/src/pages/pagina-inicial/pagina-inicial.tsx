import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth, Cache } from '../../core';

const PaginaInicial: React.FC = () => {
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
    <>
      <div>Home Page</div>
      <button onClick={onLogout}>sair</button>
    </>
  );
};

export default PaginaInicial;
