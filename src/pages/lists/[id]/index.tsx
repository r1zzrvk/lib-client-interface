import { getServerSidePageProps } from '@api'
import { useAppSelector, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { LayoutTemplate } from '@templates'
import { TPageDataProps } from '@types'
import { List } from '@components/organism'
import { useRouter } from 'next/router'
import { FC, useEffect, useMemo } from 'react'
import { ListPreloader } from '@components/molecules'
import { filterLists } from '@utils'

export const getServerSideProps = getServerSidePageProps

const ListPage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const {
    query: { id: listId },
    isReady,
  } = useRouter()
  const { uid } = useAppSelector(getUserData) || {}
  const id = (isReady && String(listId)) || undefined
  const [lists, getListsData, isLoading] = useLists({ uid, docId: id })
  const [allLists, getAllListsData] = useLists({ uid })
  const filteredLists = useMemo(() => filterLists(allLists), [allLists])

  useEffect(() => {
    if (id && isReady && !lists) {
      getListsData()
    }

    if (!allLists.length) {
      getAllListsData()
    }
  }, [allLists, getAllListsData, getListsData, id, isReady, lists])

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {uid && lists?.length && (
        <List
          uid={uid}
          list={lists?.[0]}
          updateList={() => getListsData()}
          allLists={filteredLists}
          updateAllLists={() => getAllListsData()}
        />
      )}
      {isLoading && <ListPreloader />}
    </LayoutTemplate>
  )
}

export default ListPage
