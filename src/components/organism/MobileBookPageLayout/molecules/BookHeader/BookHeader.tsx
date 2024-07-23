import { useRouter } from 'next/router'
import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { ActionIcon, Button, ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'

import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { TBook, TList } from '@types'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'

type TBookHeaderProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: () => void
  id?: TBook['id']
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
        <ActionIcon
          onClick={handleBackClick}
          size={theme.icon_sizes.md}
          padding={theme.space.md}
          icon="caretLeft_solid"
          color={theme.colors.grey}
        />
        {isLoading || !id ? (
          <Skeleton radius={theme.radiuses.round} width={48} height={48} />
        ) : (
          isAuth && (
            <ActionIcon
              onClick={onBookmarkClick}
              size={theme.icon_sizes.md}
              padding={theme.space.md}
              icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
              color={isBookmarked ? theme.colors.main : theme.colors.grey}
            />
          )
        )}
      </Flexbox>
      <Spacer size={0} sizeMob={theme.space.sm} />
      <Flexbox justify="center">
        {isLoading || !id ? (
          <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
        ) : (
          <ResponsiveImage src={imageLink} height={360} width={230} isEverywhere />
        )}
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
      {isAuth && (
        <>
          <Button onClick={onAddToListClick} rightIcon={listWithBook ? 'check_solid' : 'plus_solid'} isFluid>
            <Text
              color={theme.colors.grey}
              fontSizeMob={theme.fonts.size.regular.md}
              fontHeightMob={theme.fonts.height.regular.md}
              fontWeightMob={theme.fonts.weight.regular}
            >
              {listWithBook ? 'In my list' : 'Add to list'}
            </Text>
          </Button>
          <Spacer sizeMob={theme.space.sm} />
        </>
      )}
    </>
  )
}
