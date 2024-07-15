import { FC, useMemo } from 'react'

import { Flexbox } from '@components/atoms'

import { getPagesArray } from '@utils'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'
import { Button } from '../Button'
import { Spacer } from '../Spacer'
import { ActionIcon } from '../ActionIcon'

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
  const { isMob } = useBreakpoint()
  const defaultPages = isMob ? 5 : 10
  const leftSide = isMob ? 2 : 4
  const rightSide = isMob ? 2 : 5
  const middlePage = isMob ? 3 : 5
  const leftPages = currentPage > middlePage ? currentPage - leftSide : 0
  const rightPages = currentPage > middlePage ? currentPage + rightSide : defaultPages
  const pages = useMemo(() => getPagesArray(totalPages), [totalPages])

  return (
    <Flexbox justify="center" align="center" direction="column">
      <Flexbox justify="center" align="center" gap={theme.space.xs2}>
        <ActionIcon onClick={prevPage} icon="caretLeft_solid" color={theme.colors.grey} disabled={currentPage === 1} />
        {pages
          .filter(page => page >= leftPages && page <= rightPages)
          .map(item => (
            <Styled.PageButton key={item} onClick={() => setPage(item)} isActive={currentPage === item}>
              {item}
            </Styled.PageButton>
          ))}
        <ActionIcon
          onClick={nextPage}
          icon="caretRight_solid"
          color={theme.colors.grey}
          disabled={currentPage === pages.length}
        />
      </Flexbox>
      {currentPage > middlePage && goToFirstPage ? (
        <Button isGhost onClick={goToFirstPage}>
          Go to first page
        </Button>
      ) : (
        <Spacer size={theme.space.xl2} samespace />
      )}
    </Flexbox>
  )
}
