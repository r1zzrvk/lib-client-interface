import { TBook } from '@types'
import { FC } from 'react'
import { Styled } from './styled'
import { BookHeader, BookInfo } from './molecules'

type TMobileBookPageLayoutProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
} & TBook

export const MobileBookPageLayout: FC<TMobileBookPageLayoutProps> = ({
  volumeInfo,
  id,
  isLoading,
  onBookmarkClick,
  isBookmarked,
}) => (
  <Styled.Background>
    <BookHeader id={id} isLoading={isLoading} onBookmarkClick={onBookmarkClick} isBookmarked={isBookmarked} />
    <BookInfo volumeInfo={volumeInfo} isLoading={isLoading} />
  </Styled.Background>
)
