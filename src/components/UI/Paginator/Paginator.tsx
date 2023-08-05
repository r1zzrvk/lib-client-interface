import { FC } from 'react'
import { getPagesArray } from '@utils'
import { theme } from '@constants'
import { Flexbox } from '@components/atoms'
import { IconsSelector } from '@components/molecules'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'
import { Button } from '../Button'
import { Spacer } from '../Spacer'

type TPaginatorProps = {
  totalPages: number
  currentPage: number
  nextPage: () => void
  prevPage: () => void
  setPage: (page: number) => void
}

export const Paginator: FC<TPaginatorProps> = ({ totalPages, currentPage, nextPage, prevPage, setPage }) => {
  const { isMob } = useBreakpoint()
  const defaultPages = isMob ? 5 : 10
  const leftSide = isMob ? 2 : 4
  const rightSide = isMob ? 2 : 5
  const middlePage = isMob ? 3 : 5
  const leftPages = currentPage > middlePage ? currentPage - leftSide : 0
  const rightPages = currentPage > middlePage ? currentPage + rightSide : defaultPages
  const pages = getPagesArray(totalPages)

  return (
    <Flexbox justify="center" align="center" direction="column">
      <Flexbox justify="center" align="center" gap={theme.space.xs2}>
        <Styled.ArrowButton onClick={prevPage} isInvisible={currentPage === 1} disabled={currentPage === 1} isLeft>
          <IconsSelector icon="caretLeft_solid" color={theme.colors.grey} />
        </Styled.ArrowButton>
        {pages
          .filter(page => page >= leftPages && page <= rightPages)
          .map(item => (
            <Styled.PageButton key={item} onClick={() => setPage(item)} isActive={currentPage === item}>
              {item}
            </Styled.PageButton>
          ))}
        <Styled.ArrowButton
          onClick={nextPage}
          isInvisible={currentPage === pages.length}
          disabled={currentPage === pages.length}
        >
          <IconsSelector icon="caretRight_solid" color={theme.colors.grey} />
        </Styled.ArrowButton>
      </Flexbox>
      {currentPage > middlePage ? (
        <Button isGhost onClick={() => setPage(1)}>
          Go to first page
        </Button>
      ) : (
        <Spacer size={theme.space.xl2} samespace />
      )}
    </Flexbox>
  )
}
