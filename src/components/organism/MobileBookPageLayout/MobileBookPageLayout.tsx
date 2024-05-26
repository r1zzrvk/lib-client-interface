import { TBook, TList } from '@types'
import { FC } from 'react'
import { Styled } from './styled'
import { BookHeader, BookInfo } from './molecules'

type TMobileBookPageLayoutProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: () => void
} & TBook

export const MobileBookPageLayout: FC<TMobileBookPageLayoutProps> = ({
  volumeInfo,
  id,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  listWithBook,
  onAddToListClick,
}) => (
  <Styled.Background>
    <BookHeader
      id={id}
      isLoading={isLoading}
      onBookmarkClick={onBookmarkClick}
      isBookmarked={isBookmarked}
      listWithBook={listWithBook}
      onAddToListClick={onAddToListClick}
    />
    <BookInfo volumeInfo={volumeInfo} isLoading={isLoading} />
  </Styled.Background>
)
