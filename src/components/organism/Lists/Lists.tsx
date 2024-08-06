import { useRouter } from 'next/router'
import { FC, useEffect, useMemo, useState } from 'react'

import { ListCard, ListsSkeleton } from '@components/molecules'
import { Button } from '@ui-kit'

import { deleteList } from '@api'
import { BOOKMARK_LIST_ID } from '@constants'
import { useAppDispatch, useBreakpoint, useDialog, useDidMount, useLists } from '@hooks'
import { setIsLoading } from '@reducers'
import { EPagePaths, TFirebaseUser, TList } from '@types'
import { filterLists } from '@utils'

import { CreateList } from '../CreateList'
import { Styled } from './styled'

type TListsProps = {
  uid: TFirebaseUser['uid']
}

export const Lists: FC<TListsProps> = ({ uid }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { createOne } = router.query
  const { isMob } = useBreakpoint()
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

  const handleModalClose = () => {
    setEditingList(null)
    setIsModalOpened(false)
  }

  const handleClickDelete = (id: string) => {
    show()
    setDeletingListId(id)
  }

  const handleDialogClose = () => {
    close()
    setDeletingListId('')
  }

  const handleConfirmDelete = () => {
    if (deletingListId) {
      deleteList(uid, deletingListId)
        .then(() => getLists())
        .finally(() => handleDialogClose())
    }
  }

  useDidMount(() => {
    getLists()
  })

  useDidMount(() => {
    if (typeof createOne === 'string' && createOne === 'true') {
      setIsModalOpened(true)
      router.push(EPagePaths.MY_LISTS)
    }
  })

  useEffect(() => {
    dispatch(setIsLoading(!lists))
  }, [dispatch, lists])

  return (
    <div>
      <Button rightIcon="plus_solid" onClick={() => setIsModalOpened(true)} isFluid={isMob} size="lg">
        Create list
      </Button>
      <CreateList
        uid={uid}
        isModalOpened={isModalOpened}
        onModalClose={handleModalClose}
        updateLists={() => getLists()}
        list={editingList}
      />
      {lists?.length || !isLoading ? (
        <Styled.Wrapper>
          {filteredLists.map((list, i) => (
            <ListCard
              {...list}
              key={list.id}
              isLastIndex={i === filteredLists.length - 1}
              isBookmarks={list.id === BOOKMARK_LIST_ID}
              onEditClick={handleEditClick}
              onDeleteClick={handleClickDelete}
              updateLists={() => getLists()}
              uid={uid}
            />
          ))}
        </Styled.Wrapper>
      ) : (
        <ListsSkeleton />
      )}
      <Dialog
        title="Are you sure?"
        subtitle="This action cannot be undone"
        cancelButtonText="Сancel"
        submitButtonText="Delete"
        onCancel={close}
        onSubmit={handleConfirmDelete}
      />
    </div>
  )
}
