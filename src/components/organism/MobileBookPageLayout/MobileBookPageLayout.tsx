import { FC } from 'react'

import { TBook, TList } from '@types'

import { Styled } from './styled'
import { BookHeader, BookInfo } from './molecules'

type TMobileBookPageLayoutProps = {
  book: TBook | null
  isLoading: boolean
  isBookmarked: boolean
  listWithBook: TList
  onBookmarkClick: () => void
  onAddToListClick: (listIds: string[], book: TBook) => void
  lists?: TList[]
}

export const MobileBookPageLayout: FC<TMobileBookPageLayoutProps> = ({
  isLoading,
  onBookmarkClick,
  isBookmarked,
  listWithBook,
  lists,
  onAddToListClick,
  book,
}) => (
  <Styled.Background>
    <BookHeader
      book={book}
      isLoading={isLoading}
      onBookmarkClick={onBookmarkClick}
      isBookmarked={isBookmarked}
      listWithBook={listWithBook}
      lists={lists}
      onAddToListClick={onAddToListClick}
    />
    <BookInfo volumeInfo={book?.volumeInfo} isLoading={isLoading} />
  </Styled.Background>
)
