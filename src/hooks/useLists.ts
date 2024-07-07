import { DocumentData } from 'firebase/firestore'
import { useState } from 'react'

import { fetchDatabaseDocs } from '@api'
import { TFirebaseUser, EDatabaseDocs, TList } from '@types'
import { getMappedLists } from '@utils'

type TUseDatabaseDocs = {
  uid: TFirebaseUser['uid'] | undefined
  docId?: string
}

// if `docId` prop is empty, hook will return all lists

export function useLists({ uid, docId }: TUseDatabaseDocs): [TList[], () => void, boolean] {
  const [data, setData] = useState<DocumentData | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getListsData = async () => {
    if (uid) {
      setIsLoading(true)

      await fetchDatabaseDocs(uid)
        .then(response => setData(response))
        .finally(() => setIsLoading(false))
    }
  }

  if (!docId) {
    return [getMappedLists(data?.[EDatabaseDocs.LISTS]), getListsData, isLoading]
  }

  return [data?.[EDatabaseDocs.LISTS]?.[docId], getListsData, isLoading]
}
