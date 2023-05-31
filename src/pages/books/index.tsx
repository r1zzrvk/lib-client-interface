import { FC, useEffect, useState } from 'react'
import { Button, Card, Spacer } from '@ui-kit'
import { theme } from '@constants'
import { usePagination } from '@hooks'
import { PaddingTemplate } from '@templates'
import { TBook } from '@types'
import { booksApi } from 'serviceApi'
import { ItemList, SearchField } from '@components/molecules'
import { Flexbox, ItemListWrapper } from '@components/atoms'

const BooksPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchField, setSearchField] = useState('')
  const [books, setBooks] = useState<TBook[] | null>(null)
  const { packSize, showMore } = usePagination({ contentPerPage: 8, itemsCount: books ? books.length : 0 })

  useEffect(() => {
    if (searchField) {
      booksApi.search(searchField).then(({ data }) => setBooks(data.items))
    }
  }, [searchField])

  return (
    <PaddingTemplate>
      <Spacer size={theme.space.xl} />
      <SearchField onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} onChange={setSearchField} />
      <ItemListWrapper>
        {/* To do: сделать быстрый поиск по критериям кубами разных размеров */}
       {books && <ItemList renderItem={book => <Card {...book} />} items={books.slice(0, packSize)} />} 
      </ItemListWrapper>
      <Spacer size={theme.space.xl} />
      {books && books.length > packSize && (
        <Flexbox align="center" direction="column">
          <Button size="lg" onClick={showMore}>
            Show more
          </Button>
          <Spacer size={theme.space.xl} />
        </Flexbox>
      )}
    </PaddingTemplate>
  )
}

export default BooksPage
