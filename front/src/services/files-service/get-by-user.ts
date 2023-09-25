import { FileGlb } from 'src/domain-types';
import {
  setupApiConfig,
  HttpStatusCode,
  HttpClient,
  UnexpectedError,
} from '../../core';

export const getByUser = async (): Promise<FileGlb[]> => {
  const response = await HttpClient.of(setupApiConfig()).request({
    url: '/modelos-usuarios',
    method: 'GET',
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body;
    default:
      throw new UnexpectedError();
  }
};
