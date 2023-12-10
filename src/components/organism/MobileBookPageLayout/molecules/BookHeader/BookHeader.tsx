import { Flexbox } from '@components/atoms'
import { IconsSelector } from '@components/molecules'
import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { TBook } from '@types'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { ResponsiveImage, Skeleton, Spacer } from '@ui-kit'
import { Styled } from './styled'

type TBookHeaderProps = {
  id: TBook['id']
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
}

export const BookHeader: FC<TBookHeaderProps> = ({ id, isLoading, onBookmarkClick, isBookmarked }) => {
  const router = useRouter()
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`

  const handleBackClick = () => {
    router.back()
  }

  return (
    <>
      <Flexbox justify="space-between">
        <Styled.IconWrapper onClick={handleBackClick}>
          <IconsSelector size={theme.icon_sizes.sm} icon="caretLeft_solid" color={theme.colors.grey} isButton />
        </Styled.IconWrapper>
        {isLoading ? (
          <Skeleton radius={theme.radiuses.round} width={48} height={48} />
        ) : (
          <Styled.IconWrapper onClick={onBookmarkClick}>
            <IconsSelector
              size={theme.icon_sizes.sm}
              icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
              color={isBookmarked ? theme.colors.main : theme.colors.grey}
              isButton
            />
          </Styled.IconWrapper>
        )}
      </Flexbox>
      <Spacer size={0} sizeMob={theme.space.sm} />
      <Flexbox justify="center">
        {isLoading ? (
          <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
        ) : (
          <ResponsiveImage src={imageLink} height={360} width={230} isEverywhere />
        )}
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
    </>
  )
}
