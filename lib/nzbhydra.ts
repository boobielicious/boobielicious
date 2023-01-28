export interface Item {
  /**
   * A globally unique (GUID) item identifier.
   */
  guid: string
  /**
   * Title of the found item.
   */
  title: string
  /**
   * The NZB url
   */
  url: string
  /**
   * Size in megabytes
   */
  size: number
  /**
   * The publishing date in RSS date object as specified by RFC822/2822. (not the Usenet date)
   */
  publishedAt: Date
  /**
   * Usenet date
   */
  createdAt: Date
}

interface AdditionalAttribute {
  '@attributes': {
    name: string
    value: string
  }
}

interface RawItem {
  title: string
  guid: string
  link: string
  comments: string
  pubDate: string
  category: string
  description: string
  enclosure: {
    '@attributes': {
      url: string
      length: string
      type: string
    }
  }
  attr: AdditionalAttribute[]
}

interface SearchResponse {
  channel: {
    title?: string
    response: {
      '@attributes': {
        offset: string
        total: string
      }
    }
    item?: RawItem[]
  }
}

/**
 * NZBHydra API
 */
export default class NZBHydra {
  private readonly apiKey: string
  private readonly endpoint: string

  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey
    this.endpoint = endpoint
  }

  private parseRawtem({ guid, title, enclosure, pubDate, attr }: RawItem): Item {
    return {
      guid,
      title,
      url: enclosure['@attributes'].url,
      size: Math.round(parseInt(enclosure['@attributes'].length, 10) / Math.pow(1024, 2)),
      publishedAt: new Date(pubDate),
      createdAt: attr.reduce((date: Date, attribute: AdditionalAttribute) => {
        if (attribute['@attributes'].name === 'usenetdate') {
          return new Date(attribute['@attributes'].value)
        }
        return date
      }, new Date())
    }
  }

  /**
   * The Search function searches the index for items matching the search criteria.
   * @param q Query
   */
  public async search(q: string, category = 6000, offset = 0, results: Item[] = []): Promise<Item[]> {
    const params = {
      t: 'search',
      apikey: this.apiKey,
      o: 'json',
      dl: 1,
      extended: 1,
      cat: category,
      offset,
      q
    }
    // console.info(`Searching NZBHydra for ${q} with offset ${offset}...`)

    // @ts-expect-error URLSearchParams only supports an object of strings hence a plain JavaScript object is not supported
    const url = `${this.endpoint}/api?${new URLSearchParams(params).toString()}`
    const response = await fetch(url, { headers: { 'User-Agent': 'Boobielicious' } })
    const { channel }: SearchResponse = await response.json()

    const { total: unparsedTotal } = channel.response['@attributes']
    const total = parseInt(unparsedTotal, 10)

    const newItems: Item[] = channel.item != null ? channel.item.map(this.parseRawtem) : []
    const allItems: Item[] = [...results, ...newItems]

    // console.info(
    //   `Found a total of ${total} items. Processed ${newItems.length} new items. Accumulated ${allItems.length} items so far.`
    // )
    if (allItems.length >= total || newItems.length === 0) return allItems
    return await this.search(q, category, offset + newItems.length, allItems)
  }
}

export const nzbhydra = new NZBHydra(process.env.NZBHYDRA_API_KEY, process.env.NZBHYDRA_ENDPOINT)
