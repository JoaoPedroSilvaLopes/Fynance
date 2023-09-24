import { Alert } from 'react-bootstrap'
import { MessageProps } from '../../types'

import * as S from './message.styles'

const Message: React.FC<MessageProps> = ({
  title,
  children,
  onClose,
  ...rest
}) => {
  return (
    <S.MessageWrapper>
      <Alert {...rest} onClose={onClose} dismissible={onClose !== undefined}>
        {title && <Alert.Heading>{title}</Alert.Heading>}
        {children}
      </Alert>
    </S.MessageWrapper>
  )
}

export default Message
