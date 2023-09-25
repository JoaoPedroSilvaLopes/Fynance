import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft as ArrowIcon } from 'react-icons/fa'
import { Button } from '../../components'

import * as S from './pagina-nao-encontrada.styles'

const PaginaNaoEncontrada: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <S.Container>
      <S.Code>404</S.Code>
      <S.Title>Algo deu errado aqui</S.Title>
      <S.Description>
        Estamos trabalhando nisso e vamos corrigí-lo o mais rápido possível
      </S.Description>
      <Button
        leftIcon={ArrowIcon}
        size='lg'
        onClick={() => navigate('/')}
      >
        Voltar
      </Button>
    </S.Container>
  )
}

export default PaginaNaoEncontrada
