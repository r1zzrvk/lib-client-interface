import { fetchDatabaseDocs } from '@api'
import { TFirebaseUser, EDatabaseDocs, TBook } from '@types'
import { DocumentData } from 'firebase/firestore'
import { useEffect, useState } from 'react'

type TUseDatabaseDocs<T> = {
  uid: TFirebaseUser['uid'] | undefined
  docId?: string
  list?: T
}

export function useLists<T>({ uid, docId, list }: TUseDatabaseDocs<T>) {
  const [data, setData] = useState<DocumentData | null>(null)

  useEffect(() => {
    if (uid) {
      fetchDatabaseDocs(uid).then(response => setData(response))
    }
  }, [uid, list])

  if (!docId) {
    return data?.[EDatabaseDocs.LISTS] || []
  }

  return (data?.[EDatabaseDocs.LISTS]?.[docId] as TBook[]) || []
}
