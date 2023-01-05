import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../generated/stash'

export const stash = getSdk(new GraphQLClient(process.env.STASH_GRAPHQL_API))
