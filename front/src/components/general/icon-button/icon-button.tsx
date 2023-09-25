import { IconButtonProps } from '../../types';
import Button from '../button/button';
import * as S from './icon-button.styles';

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, ...rest }) => {
  return (
    <S.ButtonWrapper>
      <Button {...rest}>
        <Icon />
      </Button>
    </S.ButtonWrapper>
  );
};

export default IconButton;
