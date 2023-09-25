import { ReactNode } from 'react';

import * as S from './card-glb.styles';

type Props = {
  nome: string;
  url: string;
  actions?: ReactNode[];
};

const CardGLB: React.FC<Props> = ({ nome, url, actions }) => {
  return (
    <S.Card>
      <S.Header>
        {nome}
        {actions && <S.Actions>
          {actions.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </S.Actions>}
      </S.Header>
      <model-viewer src={url} shadow-intensity="2" />
    </S.Card>
  );
};

export default CardGLB;
