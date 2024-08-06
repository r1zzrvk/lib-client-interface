import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Flexbox } from '@components/atoms'
import { ActionIcon, Button, Menu, ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { EPagePaths, TBook, TList } from '@types'
import { useAppSelector, useSelectingLists } from '@hooks'
import { getUserAuth } from '@selectors'
import { getImageURL } from '@utils'

import { Styled } from './styled'

type TBookHeaderProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: (listIds: string[], book: TBook) => void
  book: TBook | null
  lists?: TList[]
}

export const BookHeader: FC<TBookHeaderProps> = ({
  book,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  listWithBook,
  lists = [],
  onAddToListClick,
}) => {
  const router = useRouter()
  const isAuth = useAppSelector(getUserAuth)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const { menuItems, selectedListIds, onClear, checkAddedLists } = useSelectingLists({ lists, bookId: book?.id || '' })

  const handleBackClick = () => {
    router.back()
  }

  const handleSubmitClick = () => {
    if (menuItems.length && book) {
      onAddToListClick?.(selectedListIds, book)
      onClear()
      setIsMenuOpened(false)

      return
    }

    router.push(`${EPagePaths.MY_LISTS}/?createOne=true`)
  }

  const handleOpenMenu = () => {
    setIsMenuOpened(prev => !prev)
    checkAddedLists()
  }

  useEffect(() => {
    if (lists.length) {
      checkAddedLists()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists.length])

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
        {isLoading || !book?.id ? (
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
        {isLoading || !book?.id ? (
          <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
        ) : (
          <ResponsiveImage src={getImageURL(book.id)} height={360} width={230} isEverywhere />
        )}
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
      {isAuth && (
        <>
          <Menu.Popover opened={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
            <Button onClick={handleOpenMenu} rightIcon={listWithBook ? 'check_solid' : 'plus_solid'} isFluid>
              <Text
                color={theme.colors.grey}
                fontSizeMob={theme.fonts.size.regular.md}
                fontHeightMob={theme.fonts.height.regular.md}
                fontWeightMob={theme.fonts.weight.regular}
              >
                {listWithBook ? 'In my list' : 'Add to list'}
              </Text>
            </Button>
            {menuItems?.length ? (
              menuItems?.map(({ action, icon, title, color, id }) => (
                <Menu.MenuItem
                  key={id}
                  onClick={() => action()}
                  title={title}
                  color={color}
                  icon={icon}
                  iconPosition="right"
                />
              ))
            ) : (
              <Styled.EmptyListsWrapper>
                <Text
                  color={theme.colors.grey}
                  fontSizeMob={theme.fonts.size.regular.md}
                  fontHeightMob={theme.fonts.height.regular.md}
                >
                  No lists found
                </Text>
              </Styled.EmptyListsWrapper>
            )}
            <Styled.ButtonWrapper>
              <Button onClick={handleSubmitClick} height={30} borderRadius={8} isFluid>
                {menuItems?.length ? 'Update' : 'Create a list'}
              </Button>
            </Styled.ButtonWrapper>
          </Menu.Popover>
          <Spacer sizeMob={theme.space.sm} />
        </>
      )}
    </>
  )
}
