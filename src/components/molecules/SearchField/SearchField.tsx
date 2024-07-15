import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { Input } from '@ui-kit'

import { theme } from '@constants'
import { EPagePaths } from '@types'
import { useBreakpoint } from '@hooks'

export const SearchField: FC = () => {
  const router = useRouter()
  const { isMob, isTablet } = useBreakpoint()
  const [searchTerm, setSearchTerm] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !!searchTerm) {
      router.push(`${EPagePaths.CATALOG}?searchTerm=${searchTerm}`)
    }
  }

  return (
    <Input
      value={searchTerm}
      placeholder="Search for books"
      type="text"
      color={theme.colors.beige}
      fluid={isMob || isTablet}
      onChange={e => setSearchTerm(e.target.value)}
      onKeyDown={e => handleKeyDown(e)}
      onClear={() => setSearchTerm('')}
      hasIcon
      isClearable
    />
  )
}
