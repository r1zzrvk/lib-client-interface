import { FC, useState } from 'react'
import { ItemList, ListItem, StatusIllustration } from '@components/molecules'
import { Spacer, Text } from '@ui-kit'
import { NO_CREATED_LISTS, NO_LISTS, theme } from '@constants'
import { TList } from '@types'
import { useAppSelector, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { Styled } from './styled'

export const MyLists: FC = () => {
  const { uid } = useAppSelector(getUserData) || {}
  const [updatedList] = useState<TList | null>(null)
  const lists = useLists({ uid, list: updatedList })

  return (
    <Styled.Wrapper direction="column">
      <Spacer size={theme.space.md} sizeMob={theme.space.sm} />
      <ListItem {...lists[0]} isBookmarks />
      <Spacer size={theme.space.md} sizeMob={theme.space.sm} />
      <Text
        color={theme.colors.grey}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        fontSize={theme.fonts.size.regular.lg}
        fontHeight={theme.fonts.height.regular.lg}
      >
        Created lists
      </Text>
      <ItemList items={lists.slice(1)} renderItem={list => <ListItem {...list} key={list.id} />} />
      <StatusIllustration
        imgUrl={NO_LISTS.imgUrl}
        altText={NO_LISTS.altText}
        title={NO_LISTS.title}
        subtitle={NO_LISTS.subtitle}
        width={200}
        height={150}
        isVisible={!lists}
      />
      <StatusIllustration
        imgUrl={NO_CREATED_LISTS.imgUrl}
        altText={NO_CREATED_LISTS.altText}
        title={NO_CREATED_LISTS.title}
        subtitle={NO_CREATED_LISTS.subtitle}
        width={200}
        height={150}
        isVisible={!lists.slice(1).length}
      />
      <Spacer size={theme.space.xl} sizeMob={theme.space.lg} />
    </Styled.Wrapper>
  )
}
