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
    url: '/Usuarios',
    method: 'POST',
    body: {
      nome: data.nome,
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
