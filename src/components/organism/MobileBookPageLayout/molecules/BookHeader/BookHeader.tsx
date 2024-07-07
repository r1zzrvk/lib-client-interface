import { useRouter } from 'next/router'
import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { IconsSelector } from '@components/molecules'
import { Button, ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'

import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { TBook, TList } from '@types'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'

import { Styled } from './styled'

type TBookHeaderProps = {
  id: TBook['id']
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: () => void
}

export const BookHeader: FC<TBookHeaderProps> = ({
  id,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  listWithBook,
  onAddToListClick,
}) => {
  const router = useRouter()
  const isAuth = useAppSelector(getUserAuth)
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`

  const handleBackClick = () => {
    router.back()
  }

  return (
    <>
      <Flexbox justify="space-between">
        {/* TODO: вынести в отдельный компонент и использовать везде с иконками */}
        <Styled.IconWrapper onClick={handleBackClick}>
          <IconsSelector size={theme.icon_sizes.sm} icon="caretLeft_solid" color={theme.colors.grey} isButton />
        </Styled.IconWrapper>
        {isLoading ? (
          <Skeleton radius={theme.radiuses.round} width={48} height={48} />
        ) : (
          isAuth && (
            <Styled.IconWrapper onClick={onBookmarkClick}>
              <IconsSelector
                size={theme.icon_sizes.xs}
                icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                color={isBookmarked ? theme.colors.main : theme.colors.grey}
                isButton
              />
            </Styled.IconWrapper>
          )
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
      {isAuth && (
        <>
          {/* TODO: добавить иконку в компонент кнопки с пропом left/right section */}
          <Button onClick={onAddToListClick} isFluid>
            <Flexbox justify="center" align="center" gap={theme.space.xs2}>
              <Text
                color={theme.colors.grey}
                fontSizeMob={theme.fonts.size.regular.md}
                fontHeightMob={theme.fonts.height.regular.md}
                fontWeightMob={theme.fonts.weight.regular}
              >
                {listWithBook ? 'In my list' : 'Add to list'}
              </Text>
              <IconsSelector
                size={theme.icon_sizes.xs}
                icon={listWithBook ? 'check_solid' : 'plus_solid'}
                color={theme.colors.grey}
              />
            </Flexbox>
          </Button>
          <Spacer sizeMob={theme.space.sm} />
        </>
      )}
    </>
  )
}
