import { FC, useMemo, useState } from 'react'

import { ListCard, ListsSkeleton } from '@components/molecules'
import { CreateList } from '@components/organism'
import { Spacer, Text } from '@ui-kit'

import { deleteList } from '@api'
import { BOOKMARK_LIST_ID, theme } from '@constants'
import { useAppSelector, useDialog, useDidMount, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { TList } from '@types'
import { filterLists } from '@utils'

import { Styled } from './styled'

export const MyLists: FC = () => {
  const { uid } = useAppSelector(getUserData) || {}
  const [lists, getLists, isLoading] = useLists({ uid })
  const [isModalOpened, setIsModalOpened] = useState(false)
  const { dialog: Dialog, close, show } = useDialog()
  const [deletingListId, setDeletingListId] = useState<string>('')
  const [editingList, setEditingList] = useState<TList | null>(null)
  const filteredLists = useMemo(() => filterLists(lists), [lists])

  const handleEditClick = (list: TList) => {
    setEditingList(list)
    setIsModalOpened(true)
  }

  const handleClickDelete = (id: string) => {
    show()
    setDeletingListId(id)
  }

  const handleModalClose = () => {
    setEditingList(null)
    setIsModalOpened(false)
  }

  const handleDialogClose = () => {
    close()
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
      <Spacer size={theme.space.md} samespace />
      <Text
        color={theme.colors.main}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
      >
        This is where your personal lists are stored. You can manage and edit them here.
      </Text>
      {uid && !isLoading ? (
        <Styled.ListsWrapper>
          {filteredLists.map((list, i) => (
            <ListCard
              {...list}
              key={list.id}
              isBookmarks={list.id === BOOKMARK_LIST_ID}
              isLastIndex={i === filteredLists.length - 1}
              onEditClick={handleEditClick}
              onDeleteClick={handleClickDelete}
              updateLists={() => getLists()}
              uid={uid}
            />
          ))}
        </Styled.ListsWrapper>
      ) : (
        <ListsSkeleton />
      )}
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
      <Dialog
        title="Are you sure?"
        subtitle="This action cannot be undone"
        cancelButtonText="Сancel"
        submitButtonText="Delete"
        onCancel={close}
        onSubmit={handleConfirmDelete}
      />
    </Styled.Wrapper>
  )
}
