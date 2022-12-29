import { gql } from 'graphql-request'

export const StashPerformerFieldsFragment = gql`
  fragment StashPerformerFields on Performer {
    id
    name
    aliases
    photo: image_path
    measurements
    hasFakeBoobs: fake_tits
    twitter
    instagram
    isFavorite: favorite
    sceneCount: scene_count
  }
`
