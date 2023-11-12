/* eslint-disable no-console */
// todo: избавиться от логов
import { DocumentData, collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { EDatabaseDocs, TUpdateBookmarkList } from 'types/lists'
import { database } from './firebase'

export const updateBookmarkList = async ({ uid, list }: TUpdateBookmarkList) => {
  if (!uid) {
    return
  }

  const listsRef = doc(database, String(uid), EDatabaseDocs.LISTS)

  await setDoc(listsRef, {
    bookmarks: list,
  }).catch((e: Error) => console.log(e))
}

export const fetchDatabaseDocs = async (uid: string): Promise<DocumentData | null> => {
  if (!uid) {
    return null
  }
  const quarySnapshot = await getDocs(collection(database, uid))

  const temp: DocumentData = []

  quarySnapshot.forEach(doc => temp.push({ [doc.id]: doc.data() }))

  return temp[0]
}
