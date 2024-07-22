import { Query } from '@/type'
import { atom } from 'recoil'

export const queryState = atom<Query>({
  key: 'query',
  default: {
    numPage: 1
  }
})
