import { FC, useEffect, useState } from 'react'
import { Card, Paginator, Spacer } from '@ui-kit'
import { theme } from '@constants'
import { useDebouncedCallback, usePagination } from '@hooks'
import { THeaderFooter, TResponse } from '@types'
import { getStaticPageProps, searchBook } from 'api'
import { ItemList, SearchField } from '@components/molecules'
import { ItemListWrapper } from '@components/atoms'
import { LayoutTemplate } from '@templates'

export const getStaticProps = getStaticPageProps

const BooksPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [searchData, setSearchData] = useState<TResponse | null>(null)
  const { items, totalItems } = searchData || {}
  const { packSize, page, totalPages, nextPage, prevPage, setPage } = usePagination({ contentPerPage: 10, itemsCount: totalItems || 0 })

  useEffect(() => {
    if (searchField) {
      searchBook({ searchTerm: searchField, page: page }).then((data) => setSearchData(data))
    }
  }, [searchField, page])

  const handleSearchChange = useDebouncedCallback((term: string) => {
    setSearchField(term)
  }, 300)

  return (
    <LayoutTemplate headerFooterData={headerFooterData} >
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm}/>
      <SearchField onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} onChange={handleSearchChange}/>
      <ItemListWrapper>
        {/* To do: сделать быстрый поиск по критериям кубами разных размеров
            обработать кейс, когда ничего не найдено + обработать ошибку запроса
        */}
        {items && <ItemList renderItem={book => <Card {...book} />} items={items.slice(0, packSize)} />}
      </ItemListWrapper>
      <Spacer size={theme.space.xl} />
      {totalPages > 1 && <Paginator totalPages={totalPages} currentPage={page} nextPage={nextPage} prevPage={prevPage} setPage={setPage} />}
      <Spacer size={theme.space.xs} samespace/>
    </LayoutTemplate>
  )
}

export default BooksPage
