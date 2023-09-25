import { SectionProps } from '../../types';

import * as S from './section.styles';

const Section: React.FC<SectionProps> = ({
  title,
  isRequired,
  actions,
  children,
  ...rest
}) => {
  return (
    <>
      <S.Container {...rest}>
        <S.Title className={isRequired ? 'required' : ''}>{title}</S.Title>
        {actions && (
          <S.Actions>
            {actions.map((action, index) => (
              <span key={index}>{action}</span>
            ))}
          </S.Actions>
        )}
      </S.Container>

      {children}
    </>
  );
};

export default Section;
