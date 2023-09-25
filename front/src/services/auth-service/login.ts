import {
  setupApiConfig,
  HttpStatusCode,
  HttpClient,
  UnexpectedError,
} from '../../core';
import { LoginUsuarioFormInput } from '../../domain-types';

type Input = {
  data: LoginUsuarioFormInput;
};

export const loginUsuario = async ({ data }: Input): Promise<string> => {
  const response = await HttpClient.of(setupApiConfig()).request({
    url: '/auth/UsuariosAuth',
    method: 'POST',
    body: {
      email: data.email,
      senha: data.senha,
    },
  });


  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body.token as string;
    default:
      throw new UnexpectedError();
  }
};
