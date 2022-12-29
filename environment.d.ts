/**
 * @see https://stackoverflow.com/a/53981706
 */

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      STASH_GRAPHQL_API: string
    }
  }
}

export {}
