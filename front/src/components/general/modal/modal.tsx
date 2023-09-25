import { Modal as BsModal } from 'react-bootstrap'
import { Button } from '../../general'
import { ModalProps } from '../../types'

import * as S from './modal.styles'

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  icon: Icon,
  title,
  actions,
  size,
  children,
  ...rest
}) => {
  return (
    <S.ModalWrapper
      show={isOpen}
      backdrop="static"
      size={size === 'md' ? undefined : size}
      centered
      {...rest}
    >
      <BsModal.Header closeButton>
        <BsModal.Title>
          {Icon && <Icon />} {title}
        </BsModal.Title>
      </BsModal.Header>

      <BsModal.Body>{children}</BsModal.Body>

      <BsModal.Footer>
        <Button variant="danger" size='lg'  onClick={rest['onHide']}>
          Fechar
        </Button>
        {actions?.map(action => action)}
      </BsModal.Footer>
    </S.ModalWrapper>
  )
}

export default Modal
