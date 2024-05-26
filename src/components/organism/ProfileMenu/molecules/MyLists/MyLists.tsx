import { FC, useMemo, useState } from 'react'
import { ItemList, ListItem, ListsSkeleton, StatusIllustration } from '@components/molecules'
import { Button, Modal, Spacer, Text } from '@ui-kit'
import { BOOKMARK_LIST_ID, NO_LISTS, theme } from '@constants'
import { useAppSelector, useBreakpoint, useDidMount, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { filterLists } from '@utils'
import { TList } from '@types'
import { CreateList } from '@components/organism'
import { deleteList } from '@api'
import { Flexbox } from '@components/atoms'
import { Styled } from './styled'

export const MyLists: FC = () => {
  const { uid } = useAppSelector(getUserData) || {}
  const { isMob } = useBreakpoint()
  const [lists, getLists, isLoading] = useLists({ uid })
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isDialogOpened, setIsDialogOpened] = useState(false)
  const [deletingListId, setDeletingListId] = useState<string>('')
  const [editingList, setEditingList] = useState<TList | null>(null)
  const filtedLists = useMemo(() => filterLists(lists), [lists])

  const handleEditClick = (list: TList) => {
    setEditingList(list)
    setIsModalOpened(true)
  }

  const handleClickDelete = (id: string) => {
    setIsDialogOpened(true)
    setDeletingListId(id)
  }

  const handleModalClose = () => {
    setEditingList(null)
    setIsModalOpened(false)
  }

  const handleDialogClose = () => {
    setIsDialogOpened(false)
    setDeletingListId('')
  }

  const handleConfirmDelete = () => {
    if (deletingListId && uid) {
      deleteList(uid, deletingListId)
        .then(() => getLists())
        .finally(() => handleDialogClose())
    }
  }

  useDidMount(() => {
    getLists()
  })

  return (
    <Styled.Wrapper direction="column">
      {uid && !isLoading ? (
        <Styled.ListsWrapper>
          <ItemList
            items={filtedLists}
            renderItem={list => (
              <ListItem
                {...list}
                key={list.id}
                isBookmarks={list.id === BOOKMARK_LIST_ID}
                onEditClick={handleEditClick}
                onDeleteClick={handleClickDelete}
                updateLists={() => getLists()}
                uid={uid}
              />
            )}
          />
        </Styled.ListsWrapper>
      ) : (
        <ListsSkeleton />
      )}
      <StatusIllustration
        imgUrl={NO_LISTS.imgUrl}
        altText={NO_LISTS.altText}
        title={NO_LISTS.title}
        subtitle={NO_LISTS.subtitle}
        width={200}
        height={150}
        isVisible={!filtedLists.slice(1).length}
      />
      <Spacer size={theme.space.xl} sizeMob={theme.space.lg} />
      {uid && (
        <CreateList
          uid={uid}
          isModalOpened={isModalOpened}
          onModalClose={handleModalClose}
          updateLists={() => getLists()}
          list={editingList}
        />
      )}
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
            Deletion cannot be undone
          </Text>
          <Spacer size={theme.space.md} sizeMob={theme.space.md} />
          <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
            <Button onClick={() => handleConfirmDelete()} isFluid={isMob} size="lg">
              Delete
            </Button>
            <Button onClick={() => setIsDialogOpened(false)} isFluid={isMob} size="sm" isGhost>
              Сancel
            </Button>
          </Flexbox>
        </Styled.Dialog>
      </Modal>
    </Styled.Wrapper>
  )
}
