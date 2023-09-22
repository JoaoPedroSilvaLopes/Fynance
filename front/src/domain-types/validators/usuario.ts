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

export const cadastroUsuarioValidationSchema = yup.object({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  email: yup
    .string()
    .required('O campo é obrigatório')
    .email('Insira um email válido')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  senha: yup
    .string()
    .required('O campo é obrigatório')
    .min(8, 'O campo deve possuir no mínimo 8 caracteres')
    .matches(/[a-z]/, 'O campo deve possuir uma letra minúscula')
    .matches(/[A-Z]/, 'O campo deve possuir uma letra maiúscula')
    .matches(/[0-9]/, 'O campo deve possuir um número')
    .matches(
      /[^a-zA-Z0-9]/,
      'O campo deve possuir um caractere especial (@,!,#, etc).'
    ),
  confirmarSenha: yup
    .string()
    .required('O campo é obrigatório')
    .oneOf([yup.ref('senha')], 'As senhas devem coincidir'),
});
