import { CardGLB, Panel } from '../../components'
import { NavBar } from './components';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth, Cache } from '../../core';

import * as S from './pagina-inicial.styles';

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
      <NavBar />
      <S.LayoutContainer>
        <S.CurrencyModel></S.CurrencyModel>
        <Panel title='Seus Modelos'>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
        </Panel>
        <Panel title='Seus Modelos'>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
          <CardGLB url={"../../../Conjunto_Atenas_OFF_NATOFF_V01.glb"}/>
          <CardGLB url={"../../../Poltrona Fardos_V07.glb"}/>
        </Panel>
      </S.LayoutContainer>
      <button onClick={onLogout}>sair</button>
    </>
  );
};

export default PaginaInicial;
