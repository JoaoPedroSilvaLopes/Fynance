import { forwardRef } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { TextInputProps } from '../../types';

import * as S from './text-input.styles';

const TextInput: React.FC<TextInputProps> = forwardRef(
  (
    {
      label,
      tooltip,
      error,
      leftIcon: LeftIcon,
      action,
      className,
      onChange,
      onlyNumbers,
      isRequired,
      variant,
      ...rest
    },
    ref
  ) => {
    const isInvalid = error !== undefined;

    return (
      <>
        {label && (
          <S.LabelGroup>
            <S.Label variant={variant}>{label}</S.Label>
            {isRequired && <S.IsRequired>*</S.IsRequired>}
          </S.LabelGroup>
        )}
        <S.InputWrapper
          isInvalid={isInvalid}
          isDisabled={rest.disabled === true}
          variant={variant}
          className={className}
        >
          {LeftIcon && <LeftIcon />}
          <FormControl
            ref={ref}
            isInvalid={isInvalid}
            onChange={
              onlyNumbers && onChange
                ? (e: any) => onChange(e.target.value.replace(/\D/g, ''))
                : onChange
            }
            className={`form-control ${isInvalid && 'is-invalid'}`}
            autoComplete="off"
            {...rest}
          />
          {action && action}
        </S.InputWrapper>
        {error !== undefined && (
          <Form.Text className="text-danger">{error}</Form.Text>
        )}
      </>
    );
  }
);

export default TextInput;
