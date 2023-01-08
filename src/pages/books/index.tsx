import { Button, Card, Flexbox, ItemList, ItemListWrapper, SearchField, Spacer } from '@components'
import { theme } from '@constants'
import { usePagination } from '@hooks'
import { FC, useState } from 'react'

const BooksPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  const {} = usePagination({ contentPerPage: 8, itemsCount: array.length })
  const [packSize, setPackSize] = useState(array.length - 8)

  const handleClick = () => {
    setPackSize(packSize - 8)
  }
  return (
    <>
      <Spacer size={theme.space.xl} />
      <SearchField onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <ItemListWrapper>
        <ItemList renderItem={() => <Card />} items={array.slice(packSize)} />
      </ItemListWrapper>
      <Spacer size={theme.space.xl} />
      <Flexbox justify='center'>
      <Button size="lg" onClick={handleClick}>
        Show more
      </Button>
      </Flexbox>
      <Spacer size={theme.space.xl} />
    </>
  )
}

// много загуглить надо с последних коммитов

export default BooksPage
