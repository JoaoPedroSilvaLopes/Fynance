import { Button as BsButton, Spinner } from 'react-bootstrap';
import { ButtonProps } from '../../types';

import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({
  isLoading,
  isFull,
  leftIcon: LeftIcon,
  children,
  variant,
  ...rest
}) => {
  return (
    <S.ButtonWrapper isFull={isFull} variant={variant}>
      <BsButton {...rest}>
        {isLoading ? (
          <Spinner variant="light" size="sm" animation="border" />
        ) : (
          <>
            {LeftIcon && <LeftIcon />}
            <span>{children}</span>
          </>
        )}
      </BsButton>
    </S.ButtonWrapper>
  );
};

export default Button;
