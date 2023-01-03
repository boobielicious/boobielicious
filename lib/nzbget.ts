import { Buffer } from 'buffer'

interface NZBGetParams {
  endpoint: string
  credentials?: {
    username: string
    password: string
  }
}

interface HistoryItem {
  NZBID: number
  Kind: 'NZB' | 'URL' | 'DUP'
  Name: string
  URL: string
  Status: string
}

interface GroupItem {
  NZBID: number
  NZBName: string
  Kind: 'NZB' | 'URL'
  URL: string
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
  nzbFilename: string
  nzbContent: string
  category?: string
  priority?: boolean
  addToTop?: boolean
  addPaused?: boolean
  dupeKey?: string
  dupeScore?: number
  dupeMode?: string
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
    addPaused,
    addToTop,
    category,
    dupeKey,
    dupeMode,
    dupeScore,
    nzbContent,
    nzbFilename,
    priority,
    ppParameters
  }: AppendParams): Promise<number> {
    const { result } = await this.request<number>('append', [
      nzbFilename,
      nzbContent,
      category ?? '',
      priority ?? 0,
      addToTop ?? false,
      addPaused ?? false,
      dupeKey ?? '',
      dupeScore ?? 0,
      dupeMode ?? '',
      ppParameters ?? []
    ])
    return result
  }

  public async getAllItems(): Promise<any[]> {
    const [groupItems, historyItems] = await Promise.all([this.listGroupItems(), this.historyItems()])
    return [...groupItems, ...historyItems]
  }
}
