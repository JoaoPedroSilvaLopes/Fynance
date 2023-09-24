import { Cache, SetupApiConfig } from '../../core'

export const setupApiConfig: SetupApiConfig = () => {
  const accessToken = Cache.get({ key: 'accessToken' })

  return {
    baseUrl: 'https://localhost:7178',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}
