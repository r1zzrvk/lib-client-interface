import { theme } from '@constants'
import { TList } from '@types'
import { Skeleton, Text } from '@ui-kit'
import { IconsSelector } from '@components/molecules'
import { Flexbox } from '@components/atoms'
import { FC, useState } from 'react'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'
import { ActionBlock } from './molecules'

type TListItemProps = {
  isBookmarks?: boolean
} & TList

export const ListItem: FC<TListItemProps> = ({ listItems, title, isBookmarks, isPinned }) => {
  const { isMob } = useBreakpoint()
  const [opened, setOpened] = useState(false)
  const [checked, setChecked] = useState(isBookmarks ? true : isPinned)

  const skeletonHeight = isMob ? 24 : 27
  const iconSize = isMob ? theme.icon_sizes.xs : theme.icon_sizes.sm

  return (
    <Styled.ListItem>
      <Flexbox justify="space-between" onClick={() => setOpened(!opened)}>
        <Flexbox align="center" gap={theme.space.xs2}>
          {title ? (
            <>
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
            </>
          ) : (
            <Skeleton height={skeletonHeight} width={100} radius={8} />
          )}
        </Flexbox>
        <Flexbox align="center" gap={theme.space.md}>
          {isPinned && (
            <Styled.Pin>
              <IconsSelector icon="pin_solid" color={theme.colors.main} size={iconSize} />
            </Styled.Pin>
          )}
          {isMob && (
            <Styled.Icon isActive={opened}>
              <IconsSelector icon="caretDown_solid" color={theme.colors.grey} size={iconSize} />
            </Styled.Icon>
          )}
        </Flexbox>
      </Flexbox>
      {(opened || !isMob) && (
        <ActionBlock
          checked={checked}
          onChecked={() => setChecked(!checked)}
          iconSize={iconSize}
          isBookmarks={isBookmarks}
        />
      )}
    </Styled.ListItem>
  )
}
