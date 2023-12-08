import { LayoutTemplate } from '@templates'
import { TBook, TPageDataProps } from '@types'
import { getBookData, getServerSidePageProps } from '@api'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

export const getServerSideProps = getServerSidePageProps

const BookPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const { query: { id: bookId }, isReady } = useRouter()
  const [book, setBook] = useState<TBook | null>(null)

  useEffect(() => {
    if (isReady && bookId && typeof bookId === 'string') {
      getBookData(bookId).then((book) => setBook(book))
    }
  }, [bookId, isReady, getBookData, setBook])

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {book?.volumeInfo.title}
    </LayoutTemplate>
  )
}

export default BookPage
