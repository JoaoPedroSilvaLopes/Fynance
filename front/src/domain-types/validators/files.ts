import * as yup from 'yup';

export const fileValidationSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  file: yup
    .mixed()
    .required('File is required')
});
