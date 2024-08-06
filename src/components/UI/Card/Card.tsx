import { FC, MouseEvent, useState } from 'react'

import { theme } from '@constants'
import { TBook, TFirebaseUser } from '@types'
import { getImageURL, sliceItems, textLimiter } from '@utils'

import { ActionIcon } from '../ActionIcon'
import { Button } from '../Button'
import { Menu, TMenuItem } from '../Menu'
import { Text } from '../Text'
import { Styled } from './styled'

type TCardProps = {
  book: TBook
  href: string
  uid?: TFirebaseUser['uid']
  menuItems?: TMenuItem[]
  isBookmarked?: boolean
  isAtLeastOneList?: boolean
  onSubmitClick?: () => void
  onBookmarkClick?: () => void
  onAddClick?: () => void
}

export const Card: FC<TCardProps> = ({
  uid,
  onSubmitClick,
  onBookmarkClick,
  onAddClick,
  href,
  book,
  isBookmarked,
  isAtLeastOneList,
  menuItems,
}) => {
  const { title, authors } = book.volumeInfo
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const handleAddToListClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    onAddClick?.()
    setIsMenuOpened(prev => !prev)
  }

  const handleClickBookmark = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()

    onBookmarkClick?.()
  }

  const handleActionClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, action: () => void) => {
    e.preventDefault()
    action()
  }

  const handleSubmitClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()

    onSubmitClick?.()
    setIsMenuOpened(false)
  }

  return (
    <Styled.Wrapper href={`${href}${book.id}`}>
      <Styled.Image
        src={getImageURL(book.id)}
        alt="book cover"
        width={120}
        height={180}
        objectFit="cover"
        isEverywhere
      />
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
              <Menu.Popover opened={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
                <ActionIcon
                  icon={isAtLeastOneList ? 'check_solid' : 'plus_solid'}
                  size={theme.icon_sizes.md}
                  padding={theme.space.xs}
                  color={isAtLeastOneList ? theme.colors.main : theme.colors.grey}
                  onClick={handleAddToListClick}
                />
                {menuItems?.length ? (
                  menuItems?.map(({ action, icon, title, color, id }) => (
                    <Menu.MenuItem
                      key={id}
                      onClick={e => handleActionClick(e, action)}
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
              <ActionIcon
                icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                size={theme.icon_sizes.md}
                padding={theme.space.xs}
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
