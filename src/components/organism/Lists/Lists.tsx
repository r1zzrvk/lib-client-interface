import { ItemList, ListItem, ListsSkeleton } from '@components/molecules'
import { useAppDispatch, useBreakpoint, useDidMount, useLists } from '@hooks'
import { EPagePaths, TFirebaseUser, TList } from '@types'
import { FC, useEffect, useMemo, useState } from 'react'
import { setIsLoading } from '@reducers'
import { Button, Modal, Spacer, Text } from '@ui-kit'
import { BOOKMARK_LIST_ID, theme } from '@constants'
import { filterLists } from '@utils'
import { deleteList } from '@api'
import { Flexbox } from '@components/atoms'
import { useRouter } from 'next/router'
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
  const [isDialogOpened, setIsDialogOpened] = useState(false)
  const [deletingListId, setDeletingListId] = useState<string>('')
  const [editingList, setEditingList] = useState<TList | null>(null)
  const filtedLists = useMemo(() => filterLists(lists), [lists])

  const handleEditClick = (list: TList) => {
    setEditingList(list)
    setIsModalOpened(true)
  }

  const handleModalClose = () => {
    setEditingList(null)
    setIsModalOpened(false)
  }

  const handleClickDelete = (id: string) => {
    setIsDialogOpened(true)
    setDeletingListId(id)
  }

  const handleDialogClose = () => {
    setIsDialogOpened(false)
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
    <Styled.PaddingContainer>
      <Button onClick={() => setIsModalOpened(true)} isFluid={isMob} size="lg">
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
        </Styled.Wrapper>
      ) : (
        <ListsSkeleton />
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
            This action cannot be undone
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
    </Styled.PaddingContainer>
  )
}
