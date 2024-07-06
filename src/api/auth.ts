import { NEW_BOOKMARK_LIST } from '@constants'
import { fetchDatabaseDocs, updateDocList } from './lists'

export const createBookmarksForNewUsers = (uid: string) => {
  if (uid) {
    fetchDatabaseDocs(uid).then(response => {
      if (!response) {
        updateDocList({ uid, list: NEW_BOOKMARK_LIST, isBookmarks: true })
      }
    })
  }
}
