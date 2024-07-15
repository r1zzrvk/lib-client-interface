import { useRouter } from 'next/router'
import { FC, useCallback, useState } from 'react'

import { Flexbox, ItemListWrapper } from '@components/atoms'
import { AddToListModal, BookCard, ItemList, StatusIllustration } from '@components/molecules'
import { ActionIcon, Button, Spacer, Text } from '@ui-kit'
import { CreateList } from '@components/organism'

import { BOOKMARK_LIST_ID, EMPTY_BOOKMARKS, theme } from '@constants'
import { useBreakpoint, useDialog, usePagination } from '@hooks'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { deleteList, updateList as updateBookOnList } from '@api'

import { ListContainer } from '../Lists/atoms'
import { Styled } from './styled'

type TListProps = {
  uid: TFirebaseUser['uid']
  list: TList
  updateList: () => void
  allLists: TList[]
  updateAllLists: () => void
}

export const List: FC<TListProps> = ({ list, uid, updateList, allLists, updateAllLists }) => {
  const router = useRouter()
  const { isMob } = useBreakpoint()
  const [isEditModalOpened, setIsEditModalOpened] = useState(false)
  const [isAddToListModalOpened, setIsAddToListModalOpened] = useState(false)
  const [selectedListIds, setSelectedListIds] = useState<TList['id'][]>([])
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null)
  const { dialog: Dialog, close, show } = useDialog()
  const { listItems, title, description, id } = list
  const { firstIndex, packSize, showMore } = usePagination({ contentPerPage: 10, itemsCount: listItems?.length })
  const isShowMoreVisible = listItems?.length > 10 && listItems?.length > packSize

  const handleDelete = () => {
    deleteList(uid, id)
      .then(() => updateList())
      .finally(() => {
        close()
        router.push(EPagePaths.MY_LISTS)
      })
  }

  const handleClickToCatalog = () => {
    router.push(EPagePaths.CATALOG)
  }

  const handleAddClick = (book: TBook) => {
    setSelectedBook(book)
    setIsAddToListModalOpened(true)
  }

  const handleModalClose = () => {
    setIsAddToListModalOpened(false)
    setSelectedBook(null)
    setSelectedListIds([])
  }

  const handleAddToCustomList = () => {
    if (uid && selectedBook) {
      selectedListIds.forEach(id => {
        updateBookOnList({
          book: selectedBook,
          lists: allLists,
          isBookmarks: false,
          uid,
          updateLists: () => updateList(),
          listId: id,
        })
      })

      handleModalClose()
    }
  }

  const handleSelectId = useCallback(
    (listId: string) => {
      const hasInArray = !!selectedListIds.find(item => item === listId)

      if (hasInArray) {
        setSelectedListIds(selectedListIds.filter(item => item !== listId))

        return
      }

      setSelectedListIds([...selectedListIds, listId])
    },
    [selectedListIds],
  )

  return (
    <ListContainer>
      <Styled.InfoBanner>
        <Flexbox direction="column">
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
        </Flexbox>
        {id === BOOKMARK_LIST_ID || (
          <>
            <Spacer size={theme.space.md} sizeMob={theme.space.md} />
            <Flexbox justify="space-between" gap={theme.space.lg}>
              <ActionIcon
                size={theme.icon_sizes.sm}
                icon="edit_solid"
                color={theme.colors.grey}
                onClick={() => setIsEditModalOpened(true)}
              />
              <ActionIcon size={theme.icon_sizes.sm} icon="trash_solid" color={theme.colors.grey} onClick={show} />
            </Flexbox>
          </>
        )}
      </Styled.InfoBanner>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      <ItemListWrapper rowGap={theme.space.sm}>
        <ItemList
          renderItem={book => (
            <BookCard
              key={book.id}
              book={book}
              uid={uid}
              lists={allLists}
              updateLists={() => updateAllLists()}
              onAddClick={handleAddClick}
            />
          )}
          items={listItems.slice(firstIndex, packSize)}
        />
      </ItemListWrapper>
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
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      <CreateList
        list={list}
        updateLists={() => updateList()}
        uid={uid}
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
      <AddToListModal
        bookId={selectedBook?.id}
        isOpened={isAddToListModalOpened}
        onClose={handleModalClose}
        lists={allLists}
        onSaveClick={handleAddToCustomList}
        onSelectList={id => handleSelectId(id)}
      />
    </ListContainer>
  )
}
