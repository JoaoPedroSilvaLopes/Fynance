import { Button, Modal } from '../../general'
import { ConfirmModalProps, ModalProps } from '../../types'

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  isLoading,
  onConfirm,
  size = 'sm',
  ...rest
}) => {
  const confirmButton = (
    <Button variant="secondary" isLoading={isLoading} size='lg' onClick={onConfirm}>
      Confirmar
    </Button>
  )

  const defaultConfigs: ModalProps = {
    size,
    actions: [confirmButton]
  }

  return (
    <Modal {...defaultConfigs} {...rest}>
      <p>{message}</p>
    </Modal>
  )
}

export default ConfirmModal
