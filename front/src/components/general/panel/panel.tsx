import { Section } from '../../general';
import { PanelProps } from '../../types';

import * as S from './panel.styles';

const Panel: React.FC<PanelProps> = ({
  title,
  actions = [],
  children,
  className,
}) => {
  return (
    <S.Container className={className}>
      {title && (
        <S.Header>
          <Section actions={actions} title={title} />
        </S.Header>
      )}
      <S.Content isTitle={title ? true : false}>{children}</S.Content>
    </S.Container>
  );
};

export default Panel;
