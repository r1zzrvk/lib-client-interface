import { DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { fetchDatabaseDocs } from '@api'
import { TFirebaseUser, EDatabaseDocs, TList } from '@types'
import { getMappedLists } from '@utils'

type TUseDatabaseDocs = {
  uid: TFirebaseUser['uid'] | undefined
  docId?: string
  list?: TList | null
}

// if `docId` prop is empty, hook will return all lists
// `list` prop is used to update data

export function useLists({ uid, docId, list }: TUseDatabaseDocs): TList[] {
  const [data, setData] = useState<DocumentData | null>(null)

  useEffect(() => {
    if (uid) {
      fetchDatabaseDocs(uid).then(response => setData(response))
    }
  }, [uid, list])

  if (!docId) {
    return getMappedLists(data?.[EDatabaseDocs.LISTS])
  }

  return data?.[EDatabaseDocs.LISTS]?.[docId]
}
