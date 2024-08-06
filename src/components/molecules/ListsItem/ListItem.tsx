import { FC, MouseEvent, useState } from 'react'

import { Flexbox } from '@components/atoms'
import { ActionIcon, Menu, Skeleton, Text } from '@ui-kit'

import { updateDocList } from '@api'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { EPagePaths, TFirebaseUser, TList } from '@types'

import { Icon } from '../Icon'
import { useMenuItems } from './hooks'
import { Styled } from './styled'
import { cutDescription } from './utils'

type TListItemProps = {
  uid: TFirebaseUser['uid']
  onEditClick: (list: TList) => void
  onDeleteClick: (id: string) => void
  isBookmarks?: boolean
  updateLists?: () => void
} & TList

export const ListItem: FC<TListItemProps> = ({
  isBookmarks,
  updateLists,
  uid,
  onEditClick,
  onDeleteClick,
  ...rest
}) => {
  const { isPinned, description, id, listItems, title } = rest
  const { isMob } = useBreakpoint()
  const [isMenuOpened, setMenuOpened] = useState(false)
  const [isChecked, setIsChecked] = useState(isPinned)
  const skeletonHeight = isMob ? 24 : 27
  const iconSize = isMob ? theme.icon_sizes.md : theme.icon_sizes.lg
  const iconPadding = isMob ? theme.space.xs : theme.space.sm

  const handlePin = () => {
    setIsChecked(!isChecked)
    updateDocList({
      uid,
      list: {
        description,
        id,
        isPinned: !isChecked,
        lastUpdate: new Date().toISOString(),
        listItems,
        title,
      },
      isBookmarks: false,
    }).then(() => updateLists?.())
  }

  const menuItems = useMenuItems({
    isBookmarks: !!isBookmarks,
    list: rest,
    onDeleteClick,
    onEditClick,
    onPin: handlePin,
  })

  const handleOpenMenu = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    setMenuOpened(prev => !prev)
  }

  const handleActionClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, action: () => void) => {
    e.preventDefault()
    setMenuOpened(false)
    action()
  }

  return (
    <Styled.ListItem href={`${EPagePaths.MY_LISTS}/${id}`}>
      <Flexbox justify="space-between" gap={theme.space.lg}>
        <Flexbox align="center" gap={theme.space.xs2}>
          {title ? (
            <Flexbox direction="column" gap={theme.space.xs2}>
              <Flexbox gap={theme.space.xs2} align="center">
                <Text
                  color={theme.colors.grey}
                  fontHeightMob={theme.fonts.height.regular.md}
                  fontSizeMob={theme.fonts.size.regular.md}
                  fontWeightMob={theme.fonts.weight.medium}
                  fontSize={theme.fonts.size.regular.lg}
                  fontHeight={theme.fonts.height.regular.lg}
                  fontWeight={theme.fonts.weight.medium}
                >
                  {title}
                </Text>
                <Text
                  color={theme.colors.main}
                  fontHeightMob={theme.fonts.height.regular.lg}
                  fontSizeMob={theme.fonts.size.regular.lg}
                  fontWeightMob={theme.fonts.weight.medium}
                  fontSize={theme.fonts.size.regular.lg}
                  fontHeight={theme.fonts.height.regular.lg}
                  fontWeight={theme.fonts.weight.medium}
                >
                  {listItems?.length}
                </Text>
              </Flexbox>
              <Text
                color={theme.colors.grey_light}
                fontHeightMob={theme.fonts.height.regular.sm}
                fontSizeMob={theme.fonts.size.regular.sm}
                fontWeightMob={theme.fonts.weight.medium}
                fontSize={theme.fonts.size.regular.md}
                fontHeight={theme.fonts.height.regular.md}
                fontWeight={theme.fonts.weight.medium}
              >
                {cutDescription(description, isMob ? 10 : 0)}
              </Text>
            </Flexbox>
          ) : (
            <Skeleton height={skeletonHeight} width={100} radius={8} />
          )}
        </Flexbox>
        <Flexbox align={isMob ? 'center' : 'flex-start'} gap={theme.space.xs}>
          {isPinned && !isBookmarks && (
            <Styled.Pin>
              <Icon icon="pin_solid" color={theme.colors.main} size={iconSize} />
            </Styled.Pin>
          )}
          <Menu.Popover opened={isMenuOpened} onClose={() => setMenuOpened(false)}>
            <ActionIcon
              icon="ellipsis_vertical_solid"
              color={theme.colors.grey}
              size={iconSize}
              padding={iconPadding}
              onClick={handleOpenMenu}
            />
            {menuItems.map(({ action, icon, title, color, id }) => (
              <Menu.MenuItem
                key={id}
                onClick={e => handleActionClick(e, action)}
                title={title}
                color={color}
                icon={icon}
              />
            ))}
          </Menu.Popover>
        </Flexbox>
      </Flexbox>
    </Styled.ListItem>
  )
}
