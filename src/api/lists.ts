/* eslint-disable no-console */
// todo: избавиться от логов
import { DocumentData, collection, doc, getDocs, setDoc, deleteField, updateDoc } from 'firebase/firestore'
import { EDatabaseDocs, TUpdateDocList } from '@types'
import { database } from './firebase'

// Function updates a list by ID. The ID also serves as the key for an object
// in the 'document' object. If the key doesn't exist, a new object will be created.

export const updateDocList = async ({ uid, list, isBookmarks }: TUpdateDocList) => {
  if (!uid) {
    return
  }

  const listsRef = doc(database, uid, EDatabaseDocs.LISTS)
  const listObject = !isBookmarks ? { [list.id]: [list] } : { bookmarks: [list] }

  await setDoc(listsRef, listObject, { merge: true }).catch((e: Error) => console.log(e))
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

export const deleteList = async (uid: string, listId: string) => {
  if (!uid) {
    return
  }

  const listRef = doc(database, uid, EDatabaseDocs.LISTS)

  await updateDoc(listRef, {
    [listId]: deleteField(),
  })
}
