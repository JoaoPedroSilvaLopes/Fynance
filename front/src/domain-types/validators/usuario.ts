import * as yup from 'yup';

export const loginUsuarioValidationSchema = yup.object({
  email: yup
    .string()
    .required('O campo é obrigatório')
    .email('Insira um e-mail válido')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  senha: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
});
