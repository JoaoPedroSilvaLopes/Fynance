import { FileFormInput } from '../../domain-types';
import {
  setupApiConfig,
  HttpStatusCode,
  HttpClient,
  UnexpectedError,
} from '../../core';

export const add = async (data: FileFormInput): Promise<void> => {
  const response = await HttpClient.of(setupApiConfig()).request({
    url: '/modelo-glb/FileGLB',
    method: 'POST',
    body: {
      arquivo: data.file
    }
  });

  switch (response.statusCode) {
    case HttpStatusCode.Created:
      return;
    default:
      throw new UnexpectedError();
  }
};
