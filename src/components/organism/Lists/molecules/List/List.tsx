import { Flexbox, ItemListWrapper } from '@components/atoms'
import { ItemList, StatusIllustration } from '@components/molecules'
import { EMPTY_BOOKMARKS, theme } from '@constants'
import { useBreakpoint, usePagination } from '@hooks'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { Button, Card, Spacer, Text } from '@ui-kit'
import { useRouter } from 'next/router'
import { Dispatch, FC, SetStateAction } from 'react'
import { ListContainer } from '../../atoms'

type TListProps = {
  uid: TFirebaseUser['uid']
  updateList: Dispatch<SetStateAction<TBook[]>>
} & TList

export const List: FC<TListProps> = ({ listItems, listTitle, uid, updateList }) => {
  const { isMob } = useBreakpoint()
  const { firstIndex, packSize, showMore } = usePagination({ contentPerPage: 10, itemsCount: listItems?.length })
  const router = useRouter()
  const isShowMoreVisible = listItems?.length > 10 && listItems?.length > packSize

  const handleClickToCatalog = () => {
    router.push(EPagePaths.CATALOG)
  }

  return (
    <ListContainer>
      <Flexbox align="center" gap={theme.space.xs2}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.header.lg}
          fontWeight={theme.fonts.weight.medium}
          fontHeight={theme.fonts.height.header.lg}
          fontSizeMob={theme.fonts.size.header.sm}
          fontHeightMob={theme.fonts.height.header.sm}
          fontWeightMob={theme.fonts.weight.medium}
        >
          {listTitle}
        </Text>
        <Text
          color={theme.colors.main}
          fontSize={theme.fonts.size.header.lg}
          fontWeight={theme.fonts.weight.medium}
          fontHeight={theme.fonts.height.header.lg}
          fontSizeMob={theme.fonts.size.header.sm}
          fontHeightMob={theme.fonts.height.header.sm}
          fontWeightMob={theme.fonts.weight.medium}
        >
          {listItems.length}
        </Text>
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} size={theme.space.md} />
      <ItemListWrapper rowGap={theme.space.sm}>
        <ItemList
          renderItem={book => <Card {...book} key={book.id} bookmarks={listItems} uid={uid} updateList={updateList} />}
          items={listItems.slice(firstIndex, packSize)}
        />
      </ItemListWrapper>
      <StatusIllustration
        title={EMPTY_BOOKMARKS.title}
        altText={EMPTY_BOOKMARKS.altText}
        imgUrl={EMPTY_BOOKMARKS.imgUrl}
        subtitle={EMPTY_BOOKMARKS.subtitle}
        isVisible={!listItems?.length}
      />
      {!listItems?.length && (
        <Flexbox justify="center" align="center" direction="column">
          <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
          <Button isFluid={isMob} onClick={handleClickToCatalog} size="lg">
            View catalog
          </Button>
        </Flexbox>
      )}
      {isShowMoreVisible && (
        <Flexbox justify="center" align="center">
          <Button isFluid={isMob} size="lg" onClick={showMore}>
            Show more
          </Button>
        </Flexbox>
      )}
      <Spacer size={theme.space.xl} sizeMob={0} />
    </ListContainer>
  )
}
