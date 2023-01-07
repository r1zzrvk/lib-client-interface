import { Modal, SearchField, Spacer } from '@components'
import { theme } from '@constants'
import { FC, useState } from 'react'

const BooksPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
  <>
    <Spacer size={theme.space.xl}/>  
    <SearchField onClick={() => setIsOpen(true)} isOpen={isOpen}/>
  </>
)}

export default BooksPage
