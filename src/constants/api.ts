import { AuthErrorCodes } from 'firebase/auth'

export const CLIENT_ID = '1008380682623-7icg3j1r6a509qakdjojp31iebm038q4.apps.googleusercontent.com'
export const GOOGLE_API = 'https://www.googleapis.com/'
export const BOOKS_PATH = 'books/v1/volumes/'
export const BOOKS_IMAGE_PATH = 'https://books.google.com/books/publisher/content/images/frontcover/'
export const BOOKS_IMAGE_SIZE = '?fife=w480-h690'

export const LIBRARY_SERVER_API = 'https://library-server-orpin.vercel.app/'
export const HEADER_PATH = `${LIBRARY_SERVER_API}header`
export const FOOTER_PATH = `${LIBRARY_SERVER_API}footer`
export const BOOKMARK_LIST_ID = 'bookmarks'
export const USER_AVATAR_LINK = 'https://i.ibb.co/dkgB7Dh/User-Avatar.png'

export const FirebaseErrorCodesAndMessages: Record<string, string> = {
  [AuthErrorCodes.EMAIL_EXISTS]: 'Email is already in use by an existing user',
  [AuthErrorCodes.INVALID_PASSWORD]: 'Incorrect email or password',
  [AuthErrorCodes.INVALID_EMAIL]: 'Incorrect email or password',
  [AuthErrorCodes.USER_DELETED]: 'This user does not exist',
}

export const FirebaseErrorCodes: Record<string, string> = AuthErrorCodes
