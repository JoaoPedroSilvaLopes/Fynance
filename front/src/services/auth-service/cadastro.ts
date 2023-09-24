import {
  setupApiConfig,
  HttpStatusCode,
  HttpClient,
  UnexpectedError,
} from '../../core';
import { CadastroUsuarioFormInput } from '../../domain-types';

type Input = {
  data: CadastroUsuarioFormInput;
};

export const cadastroUsuario = async ({ data }: Input): Promise<string> => {
  const response = await HttpClient.of(setupApiConfig()).request({
    url: '/auth/cadastro',
    method: 'POST',
    body: {
      email: data.email,
      password: data.senha,
      confirmPassword: data.confirmarSenha,
    },
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body.accessToken as string;
    default:
      throw new UnexpectedError();
  }
};
