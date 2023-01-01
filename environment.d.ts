/**
 * @see https://stackoverflow.com/a/53981706
 */

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      NZBHYDRA_ENDPOINT: string
      NZBHYDRA_API_KEY: string
      STASH_GRAPHQL_API: string
      TWITTER_BEARER_TOKEN: string
    }
  }
}

export {}
