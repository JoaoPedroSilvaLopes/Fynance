import { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { TextInputProps } from '../../types'
import { TextInput } from '..'

import * as S from './password-input.style'

const PasswordInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const passwordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <TextInput
      value={value}
      onChange={onChange}
      type={isPasswordVisible ? 'text' : 'password'}
      leftIcon={FaLock}
      action={
        <S.Button type="button" onClick={passwordToggle}>
          {isPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </S.Button>
      }
      {...rest}
    />
  )
}

export default PasswordInput
