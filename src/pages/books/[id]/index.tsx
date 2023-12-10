import { LayoutTemplate } from '@templates'
import { TBook, TPageDataProps } from '@types'
import { getBookData, getServerSidePageProps } from '@api'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { MobileBookPageLayout } from '@components/organism'
import { useBreakpoint } from '@hooks'

export const getServerSideProps = getServerSidePageProps

const BookPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const {
    query: { id: bookId },
    isReady,
  } = useRouter()
  const { isMob } = useBreakpoint()
  const [book, setBook] = useState<TBook | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isReady && bookId && typeof bookId === 'string') {
      setIsLoading(true)
      getBookData(bookId).then(book => setBook(book)).finally(() => setIsLoading(false))
    }
  }, [bookId, isReady, getBookData, setBook])

  console.log(book)

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
     {book && isMob && <MobileBookPageLayout {...book} isLoading={isLoading} />} 
    </LayoutTemplate>
  )
}

export default BookPage
