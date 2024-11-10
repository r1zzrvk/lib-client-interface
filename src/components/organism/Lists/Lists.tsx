import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { ListCard, ListsSkeleton, StatusIllustration } from '@components/molecules'

import { deleteList } from '@api'
import { BOOKMARK_LIST_ID, NOTHING_FOUND } from '@constants'
import { useAppDispatch, useDialog, useDidMount, useFilterLists, useLists } from '@hooks'
import { setIsLoading } from '@reducers'
import { EPagePaths, TBadge, TFirebaseUser, TList } from '@types'

import { CreateList } from '../CreateList'
import { defaultBadge } from './constants'
import { SearchBlock } from './molecules'
import { Styled } from './styled'

type TListsProps = {
  uid: TFirebaseUser['uid']
}

export const Lists: FC<TListsProps> = ({ uid }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { createOne } = router.query
  const [lists, getLists, isLoading] = useLists({ uid })

  const [isAddListModalOpened, setIsAddListModalOpened] = useState(false)
  const { dialog: Dialog, close, show } = useDialog()

  const [deletingListId, setDeletingListId] = useState<string>('')
  const [editingList, setEditingList] = useState<TList | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBadge, setSelectedBadge] = useState<TBadge | null>(defaultBadge)
  const filteredLists = useFilterLists({ lists, searchType: selectedBadge?.value, query: searchTerm })

  const handleEditClick = (list: TList) => {
    setEditingList(list)
    setIsAddListModalOpened(true)
  }

  const handleModalClose = () => {
    setEditingList(null)
    setIsAddListModalOpened(false)
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
      setIsAddListModalOpened(true)
      router.push(EPagePaths.MY_LISTS)
    }
  })

  useEffect(() => {
    dispatch(setIsLoading(!lists))
  }, [dispatch, lists])

  return (
    <div>
      <SearchBlock
        searchTerm={searchTerm}
        selectedBadge={selectedBadge}
        setSearchTerm={setSearchTerm}
        setSelectedBadge={setSelectedBadge}
        onAddClick={() => setIsAddListModalOpened(true)}
      />
      <CreateList
        uid={uid}
        isModalOpened={isAddListModalOpened}
        onModalClose={handleModalClose}
        updateLists={() => getLists()}
        list={editingList}
      />
      {lists?.length || !isLoading ? (
        <Styled.Wrapper>
          {filteredLists?.map((list, i) => (
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
          <StatusIllustration
            title={NOTHING_FOUND.title}
            altText={NOTHING_FOUND.altText}
            imgUrl={NOTHING_FOUND.imgUrl}
            subtitle={NOTHING_FOUND.subtitle}
            isVisible={!filteredLists?.length && !isLoading}
          />
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
