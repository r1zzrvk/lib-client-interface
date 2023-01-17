import { Button, Card, Flexbox, ItemList, ItemListWrapper, SearchField, Spacer, Text } from '@components'
import { theme } from '@constants'
import { usePagination } from '@hooks'
import { FC, useState } from 'react'

const BooksPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const { packSize, showMore } = usePagination({ contentPerPage: 10, itemsCount: array.length })

  return (
    <>
      <Spacer size={theme.space.xl} />
      <SearchField onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <ItemListWrapper>
      {/* To do: сделать быстрый поиск по критериям кубами разных размеров */}
        <ItemList renderItem={() => <Card />} items={array.slice(0, packSize)} />
      </ItemListWrapper>
      <Spacer size={theme.space.xl} />
      {array.length > packSize && (
        <Flexbox align='center' direction='column'>
          <Button size="lg" onClick={showMore}>
            Show more
          </Button>
          <Spacer size={theme.space.xl} />
        </Flexbox>
      )}
    </>
  )
}

export default BooksPage