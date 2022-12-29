import { gql } from 'graphql-request'

import { StashPerformerFieldsFragment } from './fragments.graphql'

export const AllPerformersQuery = gql`
  query allPerformers {
    allPerformers {
      ...StashPerformerFields
    }
  }
  ${StashPerformerFieldsFragment}
`

export const FindPerformerQuery = gql`
  query findPerformer($id: ID!) {
    findPerformer(id: $id) {
      ...StashPerformerFields
    }
  }
  ${StashPerformerFieldsFragment}
`
