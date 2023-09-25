import { FaTrash } from "react-icons/fa"
import { ConfirmModal, ConfirmModalProps } from "../../../../components";
import { useErrors, ValidationError } from "../../../../core";
import { useRemoveFiles } from "../../hooks"

type Props = Pick<ConfirmModalProps, 'isOpen' | 'onHide'> & {
  id?: number
  name?: string
}

const RemoveIngredienteModal: React.FC<Props> = ({ isOpen, onHide, id, name }) => {
  const { clearErrors } = useErrors()
  const { mutate, isLoading } = useRemoveFiles()

  const onConfirm = () => {
    if ( id ) {
      mutate (
        { id },
        { onSuccess, onError }
      )
    }
  }

  const onSuccess = () => {
    onHide()
    //Alert.callSuccess({ title: 'Ingrediente Removido' })
  }

  const onClose = () => {
    clearErrors()
    onHide()
  }

  const onError = (error: unknown) => {
    if (error instanceof ValidationError) {
      onClose()
      // Alert.callError({
      //   title: (error as Error).name,
      //   description: error.errors[0]
      // })
    }

    else {
      onClose()
      // Alert.callError({
      //   title: (error as Error).name,
      //   description: (error as Error).message
      // })
    }
  }

  const modalConfigs: ConfirmModalProps = {
    title: 'Remoção de Arquivo GLB',
    message: `Tem certeza de que deseja excluir o arquivo ${name}?`,
    size: 'md',
    icon: FaTrash,
    isOpen,
    onHide,
    isLoading,
    onConfirm
  }

  return (
    <ConfirmModal {...modalConfigs}/>
  )
}

export default RemoveIngredienteModal
