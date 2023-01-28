import { type Status as Tweet } from 'twitter-d'

export interface UserTimelineParams {
  screen_name?: string
  trim_user?: boolean
  include_rts?: boolean
  count?: number
}

export class Twitter {
  private readonly bearerToken: string

  constructor(bearerToken: string) {
    this.bearerToken = bearerToken
  }

  async userTimeline(params: UserTimelineParams): Promise<Tweet[]> {
    const response = await fetch(
      // @ts-expect-error URLSearchParams only supports an object of strings hence a plain JavaScript object is not supported
      `https://api.twitter.com/1.1/statuses/user_timeline.json?${new URLSearchParams(params).toString()}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.bearerToken}`
        }
      }
    )
    return await response.json()
  }

  async getImages(screenName: string, count = 50): Promise<string[]> {
    const tweets = await this.userTimeline({
      screen_name: screenName,
      trim_user: true,
      // include_rts: false,
      count
    })
    return tweets
      .map(tweet => tweet.extended_entities?.media ?? [])
      .filter(mediaEntities => mediaEntities.length > 0)
      .reduce<string[]>(
        (images, mediaEntities) => [...images, ...mediaEntities.map(entity => entity.media_url_https)],
        []
      )
  }
}

export default Twitter

export const client = new Twitter(process.env.TWITTER_BEARER_TOKEN)
