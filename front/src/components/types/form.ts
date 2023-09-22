import { ComponentType, InputHTMLAttributes, ReactNode } from 'react';
import { FormControlProps } from 'react-bootstrap';

export type TextInputProps = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    tooltip?: string;
    isRequired?: boolean;
    error?: string;
    required?: boolean;
    variant?: 'primary' | 'secondary';
    leftIcon?: ComponentType;
    action?: ReactNode;
    onlyNumbers?: boolean;
  };
