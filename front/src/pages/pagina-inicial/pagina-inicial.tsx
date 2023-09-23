import { CardGLB, Panel } from '../../components'
import { NavBar } from './components';

import * as S from './pagina-inicial.styles';

const PaginaInicial: React.FC = () => {
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
    </>
  );
};

export default PaginaInicial;
