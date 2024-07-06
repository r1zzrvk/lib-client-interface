import { Flexbox, ItemListWrapper } from '@components/atoms'
import { AddToListModal, BookCard, IconsSelector, ItemList, StatusIllustration } from '@components/molecules'
import { BOOKMARK_LIST_ID, EMPTY_BOOKMARKS, theme } from '@constants'
import { useBreakpoint, usePagination } from '@hooks'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { Button, Modal, Spacer, Text } from '@ui-kit'
import { useRouter } from 'next/router'
import { FC, useCallback, useState } from 'react'
import { CreateList } from '@components/organism'
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
  const [isDialogOpened, setIsDialogOpened] = useState(false)
  const [selectedListIds, setSelectedListIds] = useState<TList['id'][]>([])
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null)
  const { listItems, title, description, id } = list
  const { firstIndex, packSize, showMore } = usePagination({ contentPerPage: 10, itemsCount: listItems?.length })
  const isShowMoreVisible = listItems?.length > 10 && listItems?.length > packSize

  const handleDelete = () => {
    deleteList(uid, id)
      .then(() => updateList())
      .finally(() => router.push(EPagePaths.MY_LISTS))
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
              <Styled.IconWrapper onClick={() => setIsEditModalOpened(true)}>
                <IconsSelector size={theme.icon_sizes.sm} icon="edit_solid" color={theme.colors.grey} isButton />
              </Styled.IconWrapper>
              <Styled.IconWrapper onClick={() => setIsDialogOpened(true)}>
                <IconsSelector size={theme.icon_sizes.sm} icon="trash_solid" color={theme.colors.grey} isButton />
              </Styled.IconWrapper>
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
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      <CreateList
        list={list}
        updateLists={() => updateList()}
        uid={uid}
        onModalClose={() => setIsEditModalOpened(false)}
        isModalOpened={isEditModalOpened}
      />
      {/* TODO: вынести в отдельный компонент */}
      <Modal isOpen={isDialogOpened} onClose={() => setIsDialogOpened(false)} size="sm" title="Are you sure?">
        <Styled.Dialog>
          <Text
            color={theme.colors.main}
            fontSize={theme.fonts.size.header.sm}
            fontWeight={theme.fonts.weight.regular}
            fontHeight={theme.fonts.height.header.sm}
            fontSizeMob={theme.fonts.size.header.xs}
            fontHeightMob={theme.fonts.height.header.xs}
            fontWeightMob={theme.fonts.weight.regular}
          >
            This action cannot be undone
          </Text>
          <Spacer size={theme.space.md} sizeMob={theme.space.md} />
          <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
            <Button onClick={() => handleDelete()} isFluid={isMob} size="lg">
              Delete
            </Button>
            <Button onClick={() => setIsDialogOpened(false)} isFluid={isMob} size="sm" isGhost>
              Сancel
            </Button>
          </Flexbox>
        </Styled.Dialog>
      </Modal>
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
