import { NewznabItem } from '@prisma/client'
import { cache } from 'react'

import {
  getPerformer as fetchPerformer,
  getPerformers as fetchPerformers,
  searchNewznab as search
} from '../lib/boobielicious'
import { Performer } from '../lib/performer'

export const getPerformer = cache(async (id: string): Promise<Performer | undefined> => await fetchPerformer(id))
export const getPerformers = cache(async (): Promise<Performer[]> => await fetchPerformers())
export const searchNewznab = cache(
  async (q: string, stashId: string): Promise<NewznabItem[]> => await search(q, stashId)
)
