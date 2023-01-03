import { Buffer } from 'buffer'

interface NZBGetParams {
  endpoint: string
  credentials?: {
    username: string
    password: string
  }
}

export interface Item {
  NZBID: number
  NZBFilename: string
  NZBName: string
  URL: string
  FileSizeMB: number
  Kind: string
  Status: string
}

export interface HistoryItem extends Item {
  Kind: 'NZB' | 'URL' | 'DUP'
  Name: string
}

export interface GroupItem extends Item {
  Kind: 'NZB' | 'URL'
  Status:
    | 'QUEUED'
    | 'PAUSED'
    | 'DOWNLOADING'
    | 'FETCHING'
    | 'PP_QUEUED'
    | 'LOADING_PARS'
    | 'VERIFYING_SOURCES'
    | 'REPAIRING'
    | 'VERIFYING_REPAIRED'
    | 'RENAMING'
    | 'UNPACKING'
    | 'MOVING'
    | 'EXECUTING_SCRIPT'
    | 'PP_FINISHED'
}

interface Response<T> {
  version: string
  result: T
}

interface AppendParams {
  nzbFilename?: string
  nzbContent: string
  category?: string
  priority?: number
  addToTop?: boolean
  addPaused?: boolean
  dupeKey?: string
  dupeScore?: number
  dupeMode?: 'SCORE' | 'ALL' | 'FORCE'
  ppParameters?: any[]
}

export class NZBGet {
  private readonly endpoint: string
  private readonly credentials?: {
    username: string
    password: string
  }

  constructor({ endpoint, credentials }: NZBGetParams) {
    this.endpoint = endpoint
    this.credentials = credentials
  }

  private async request<T>(method: string, params: any[] = []): Promise<Response<T>> {
    const response = await fetch(this.endpoint, {
      body: JSON.stringify({
        method,
        params
      }),
      headers: {
        Accept: 'application/json',
        Authorization:
          this.credentials != null
            ? `Basic ${Buffer.from(`${this.credentials.username}:${this.credentials.password}`).toString('base64')}`
            : '',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    return await response.json()
  }

  public async listGroupItems(): Promise<GroupItem[]> {
    const { result } = await this.request<GroupItem[]>('listgroups', [0])
    return result
  }

  public async historyItems(hidden = false): Promise<HistoryItem[]> {
    const { result } = await this.request<HistoryItem[]>('history', [hidden])
    return result
  }

  public async append({
    addPaused = false,
    addToTop = false,
    category = '',
    dupeKey = '',
    dupeMode = 'SCORE',
    dupeScore = 0,
    nzbContent,
    nzbFilename = '',
    priority = 0,
    ppParameters = []
  }: AppendParams): Promise<number> {
    const { result } = await this.request<number>('append', [
      nzbFilename,
      nzbContent,
      category,
      priority,
      addToTop,
      addPaused,
      dupeKey,
      dupeScore,
      dupeMode,
      ppParameters
    ])
    return result
  }

  public async getAllItems(): Promise<Item[]> {
    const [groupItems, historyItems] = await Promise.all([this.listGroupItems(), this.historyItems()])
    return [...groupItems, ...historyItems]
  }
}
