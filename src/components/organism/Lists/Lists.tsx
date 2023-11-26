import { ItemList } from '@components/molecules'
import { useLists } from '@hooks'
import { TBook, TFirebaseUser, TList } from '@types'
import { FC, useState } from 'react'
import { List, ListsSkeleton } from './molecules'

type TListsProps = {
  uid: TFirebaseUser['uid']
}

export const Lists: FC<TListsProps> = ({ uid }) => {
  const [updatedList, updateList] = useState<TBook[]>([])
  const lists = useLists({ uid, list: updatedList })

  return (
    <div>
      {lists ? (
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
