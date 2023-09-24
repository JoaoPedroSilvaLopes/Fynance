import { useState } from 'react';

type Props = {
  disableScrollToTop?: boolean;
};

export type Output = {
  errors: string[];
  setErrors: (errors: string[]) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
};

type UseErrors = (props?: Props) => Output;

export const useErrors: UseErrors = (props) => {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = (message: string) => {
    if (!errors.includes(message)) {
      setErrors([...errors, message]);
    }
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    setErrors,
    addError,
    clearErrors,
  };
};
