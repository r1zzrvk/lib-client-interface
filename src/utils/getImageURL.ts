import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE } from '@constants'

export const getImageURL = (id: string): string => `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`
