import { FC, useMemo } from 'react'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { getPagesArray } from '@utils'

import { ActionIcon } from '../ActionIcon'
import { Button } from '../Button'
import { Styled } from './styled'

type TPaginatorProps = {
  totalPages: number
  currentPage: number
  nextPage: () => void
  prevPage: () => void
  setPage: (page: number) => void
  goToFirstPage?: () => void
}

export const Paginator: FC<TPaginatorProps> = ({
  totalPages,
  currentPage,
  nextPage,
  prevPage,
  setPage,
  goToFirstPage,
}) => {
  const { isLg, isMd } = useBreakpoint()
  const isDesktop = isMd || isLg
  const defaultPages = !isDesktop ? 5 : 10
  const leftSide = !isDesktop ? 2 : 4
  const rightSide = !isDesktop ? 2 : 5
  const middlePage = !isDesktop ? 3 : 5
  const leftPages = currentPage > middlePage ? currentPage - leftSide : 0
  const rightPages = currentPage > middlePage ? currentPage + rightSide : defaultPages
  const pages = useMemo(() => getPagesArray(totalPages), [totalPages])

  return (
    <Flexbox justify="center" align="center" direction="column">
      <Flexbox justify="center" align="center" gap={theme.space.xs2}>
        <Styled.ArrowButton isInvisible={currentPage === 1}>
          <ActionIcon
            onClick={prevPage}
            icon="caretLeft_solid"
            color={theme.colors.grey}
            disabled={currentPage === 1}
          />
        </Styled.ArrowButton>
        {pages
          .filter(page => page >= leftPages && page <= rightPages)
          .map(item => (
            <Styled.PageButton key={item} onClick={() => setPage(item)} isActive={currentPage === item}>
              {item}
            </Styled.PageButton>
          ))}
        <Styled.ArrowButton isInvisible={currentPage === pages.length}>
          <ActionIcon
            onClick={nextPage}
            icon="caretRight_solid"
            color={theme.colors.grey}
            disabled={currentPage === pages.length}
          />
        </Styled.ArrowButton>
      </Flexbox>
      {currentPage > middlePage && goToFirstPage && (
        <Button isGhost onClick={goToFirstPage}>
          Go to first page
        </Button>
      )}
    </Flexbox>
  )
}
