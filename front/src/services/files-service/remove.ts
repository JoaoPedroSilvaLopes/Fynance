import {
  setupApiConfig,
  HttpStatusCode,
  HttpClient,
  UnexpectedError,
} from '../../core';

type Input = {
  id: number;
};

export const remove = async ({ id }: Input): Promise<void> => {
  const response = await HttpClient.of(setupApiConfig()).request({
    url: `/modelo-glb/FileGLB${id}`,
    method: 'DELETE',
  });

  switch (response.statusCode) {
    case HttpStatusCode.NoContent:
      return;
    default:
      throw new UnexpectedError();
  }
};
