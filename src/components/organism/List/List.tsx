import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { Flexbox, ItemListWrapper } from '@components/atoms'
import { BookCard, ListPreloader, StatusIllustration } from '@components/molecules'
import { CreateList } from '@components/organism'
import { ActionIcon, Button, Skeleton, Spacer, Text } from '@ui-kit'

import { deleteList, updateList as updateBookOnList } from '@api'
import { BOOKMARK_LIST_ID, EMPTY_BOOKMARKS, theme } from '@constants'
import { useBreakpoint, useDialog, usePagination } from '@hooks'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'

import { Styled } from './styled'

type TListProps = {
  list: TList
  isLoading: boolean
  allLists: TList[]
  updateList: () => void
  updateAllLists: () => void
  uid?: TFirebaseUser['uid']
}

export const List: FC<TListProps> = ({ isLoading, list, uid, updateList, allLists, updateAllLists }) => {
  const router = useRouter()
  const { isMob } = useBreakpoint()
  const [isEditModalOpened, setIsEditModalOpened] = useState(false)
  const { dialog: Dialog, close, show } = useDialog()
  const { listItems, title, description, id } = list || {}
  const { firstIndex, packSize, showMore } = usePagination({ contentPerPage: 10, itemsCount: listItems?.length })
  const isShowMoreVisible = listItems?.length > 10 && listItems?.length > packSize
  const slicedItems = listItems?.slice(firstIndex, packSize)

  const handleDelete = () => {
    if (uid) {
      deleteList(uid, id)
        .then(() => updateList())
        .finally(() => {
          close()
          router.push(EPagePaths.MY_LISTS)
        })
    }
  }

  const handleClickToCatalog = () => {
    router.push(EPagePaths.CATALOG)
  }

  const handleAddToCustomList = (listsIds: string[], book: TBook) => {
    if (uid) {
      listsIds.forEach(id => {
        updateBookOnList({
          book,
          lists: allLists,
          isBookmarks: false,
          uid,
          updateLists: () => {
            updateList()
            updateAllLists()
          },
          listId: id,
        })
      })
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.InfoBanner>
        <Flexbox direction="column" gap={theme.space.xs3}>
          {isLoading || (
            <>
              <Text
                color={theme.colors.grey}
                fontSize={theme.fonts.size.header.lg}
                fontWeight={theme.fonts.weight.medium}
                fontHeight={theme.fonts.height.header.lg}
                fontSizeMob={theme.fonts.size.header.md}
                fontHeightMob={theme.fonts.height.header.md}
                fontWeightMob={theme.fonts.weight.medium}
              >
                {title}
              </Text>
              {description && (
                <Text
                  color={theme.colors.grey_light}
                  fontSize={theme.fonts.size.regular.lg}
                  fontWeight={theme.fonts.weight.medium}
                  fontHeight={theme.fonts.height.regular.lg}
                  fontSizeMob={theme.fonts.size.regular.md}
                  fontHeightMob={theme.fonts.height.regular.md}
                  fontWeightMob={theme.fonts.weight.regular}
                >
                  {description}
                </Text>
              )}
            </>
          )}
          {isLoading && (
            <>
              <Skeleton width={150} radius={8} height={32} />
              <Skeleton width={200} radius={8} height={24} />
            </>
          )}
        </Flexbox>
        {id === BOOKMARK_LIST_ID || (
          <>
            <Spacer size={theme.space.md} sizeMob={theme.space.md} />
            <Flexbox justify="end" gap={theme.space.sm}>
              <ActionIcon
                size={theme.icon_sizes.md}
                padding={theme.space.sm}
                icon="edit_solid"
                color={theme.colors.grey}
                onClick={() => setIsEditModalOpened(true)}
              />
              <ActionIcon
                size={theme.icon_sizes.md}
                padding={theme.space.sm}
                icon="trash_solid"
                color={theme.colors.grey}
                onClick={show}
              />
            </Flexbox>
          </>
        )}
      </Styled.InfoBanner>
      <Styled.ListsWrapper>
        <ItemListWrapper rowGap={theme.space.sm}>
          {isLoading ||
            slicedItems?.map((book, i) => (
              <BookCard
                key={book.id}
                book={book}
                uid={uid}
                lists={allLists}
                isLastIndex={i === slicedItems.length - 1}
                updateLists={() => updateAllLists()}
                onAddClick={handleAddToCustomList}
              />
            ))}
        </ItemListWrapper>
        {isLoading && <ListPreloader />}
        <StatusIllustration
          title={EMPTY_BOOKMARKS.title}
          altText={EMPTY_BOOKMARKS.altText}
          imgUrl={EMPTY_BOOKMARKS.imgUrl}
          subtitle={EMPTY_BOOKMARKS.subtitle}
          isVisible={!listItems?.length}
          buttonText="View catalog"
          onButtonClick={handleClickToCatalog}
          hasButton
        />
        {isShowMoreVisible && (
          <Flexbox justify="center" align="center">
            <Button isFluid={isMob} size="lg" onClick={showMore}>
              Show more
            </Button>
          </Flexbox>
        )}
      </Styled.ListsWrapper>
      <CreateList
        list={list}
        updateLists={() => updateList()}
        uid={uid || ''}
        onModalClose={() => setIsEditModalOpened(false)}
        isModalOpened={isEditModalOpened}
      />
      <Dialog
        title="Are you sure?"
        subtitle="This action cannot be undone"
        cancelButtonText="Сancel"
        submitButtonText="Delete"
        onCancel={close}
        onSubmit={handleDelete}
      />
    </Styled.Wrapper>
  )
}
