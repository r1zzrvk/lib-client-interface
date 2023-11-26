import { ItemList, ListsSkeleton } from '@components/molecules'
import { useAppDispatch, useLists } from '@hooks'
import { TBook, TFirebaseUser, TList } from '@types'
import { FC, useEffect, useState } from 'react'
import { setIsLoading } from '@reducers'
import { List } from './molecules'

type TListsProps = {
  uid: TFirebaseUser['uid']
}

export const Lists: FC<TListsProps> = ({ uid }) => {
  const dispatch = useAppDispatch()
  const [updatedList, updateList] = useState<TBook[]>([])
  const lists = useLists({ uid, list: updatedList })

  useEffect(() => {
    dispatch(setIsLoading(!lists))
  }, [dispatch, lists])

  return (
    <div>
      {lists.length ? (
        <ItemList
          renderItem={list => <List uid={uid} key={list.listTitle} updateList={updateList} {...list} />}
          items={lists as TList[]}
        />
      ) : (
        <ListsSkeleton />
      )}
    </div>
  )
}
