import { LinkButtonProps } from '../../types';

import * as S from './link-button.styles';

const LinkButton: React.FC<LinkButtonProps> = ({
  disabled = false,
  children,
  variant,
  ...rest
}) => {
  return (
    <S.LinkButtonWrapper variant={variant} disabled={disabled}>
      <a {...rest}>{children}</a>
    </S.LinkButtonWrapper>
  );
};

export default LinkButton;
