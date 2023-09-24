import { HttpClientInput, HttpClientOutput } from "../types";

export interface HttpClient {
  request: <TRequest, TResponse>(
    input: HttpClientInput<TRequest>
  ) => Promise<HttpClientOutput<TResponse>>
}
