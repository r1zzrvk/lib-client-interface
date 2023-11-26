import { fetchDatabaseDocs } from '@api'
import { TFirebaseUser, EDatabaseDocs, TBook, TList } from '@types'
import { DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { getMappedLists } from 'utils/getMappedLists'

type TUseDatabaseDocs = {
  uid: TFirebaseUser['uid'] | undefined
  docId?: string
  list?: TBook[] | TList[]
}

// if `docId` prop is empty, hook will return all lists
// `list` prop used for update data

export function useLists({ uid, docId, list }: TUseDatabaseDocs) {
  const [data, setData] = useState<DocumentData | null>(null)

  useEffect(() => {
    if (uid) {
      fetchDatabaseDocs(uid).then(response => setData(response))
    }
  }, [uid, list])

  if (!docId) {
    return getMappedLists(data?.[EDatabaseDocs.LISTS]) || []
  }

  return data?.[EDatabaseDocs.LISTS]?.[docId] || []
}
