/**
 * @see https://stackoverflow.com/a/53981706
 */

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      NZBGET_CATEGORY: string
      NZBGET_DOWNLOAD_PATH: string
      NZBGET_JSONRPC_API: string
      NZBGET_USERNAME: string
      NZBGET_PASSWORD: string
      NZBHYDRA_ENDPOINT: string
      NZBHYDRA_API_KEY: string
      REDIS_HOST: string
      REDIS_PORT: string
      REDIS_PASSWORD: string
      STASH_GRAPHQL_API: string
      TWITTER_BEARER_TOKEN: string
    }
  }
}

export {}
