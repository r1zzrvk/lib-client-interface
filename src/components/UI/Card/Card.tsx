import { FC, MouseEvent } from 'react'

import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { TBook, TFirebaseUser } from '@types'
import { sliceItems, textLimiter } from '@utils'

import { Text } from '../Text'
import { Styled } from './styled'
import { ActionIcon } from '../ActionIcon'

type TCardProps = {
  book: TBook
  uid?: TFirebaseUser['uid']
  isBookmarked?: boolean
  isAtLeastOneList?: boolean
  onCardClick?: (id?: string) => void
  onAddClick?: () => void
  onBookmarkClick?: () => void
}

export const Card: FC<TCardProps> = ({
  uid,
  onAddClick,
  onBookmarkClick,
  onCardClick,
  book,
  isBookmarked,
  isAtLeastOneList,
}) => {
  const imageLink = `${BOOKS_IMAGE_PATH}${book.id}${BOOKS_IMAGE_SIZE}`
  const { title, authors } = book.volumeInfo

  const handleCardClick = () => {
    onCardClick?.(book.id)
  }

  const handleAddToListClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()

    onAddClick?.()
  }

  const handleClickBookmark = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()

    onBookmarkClick?.()
  }

  return (
    <Styled.Wrapper onClick={handleCardClick}>
      <Styled.Image src={imageLink} alt="book cover" width={120} height={180} objectFit="cover" isEverywhere />
      <Styled.Content>
        <div>
          <Text
            color={theme.colors.grey}
            marginBottom={theme.space.xs2}
            marginBottomMob={theme.space.xs3}
            fontSize={theme.fonts.size.header.xs}
            fontHeight={theme.fonts.height.header.xs}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.medium}
          >
            {textLimiter(title, 30)}
          </Text>
          <Text
            color={theme.colors.main}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.medium}
            marginBottomMob={theme.space.xs3}
          >
            {authors && sliceItems(authors, 1)}
          </Text>
        </div>
        <Styled.ButtonBlock>
          {uid && (
            <>
              <ActionIcon
                icon={isAtLeastOneList ? 'check_solid' : 'plus_solid'}
                color={isAtLeastOneList ? theme.colors.main : theme.colors.grey}
                onClick={handleAddToListClick}
              />
              <ActionIcon
                icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                color={isBookmarked ? theme.colors.main : theme.colors.grey}
                onClick={handleClickBookmark}
              />
            </>
          )}
        </Styled.ButtonBlock>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
