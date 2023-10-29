import React, { FC, useState } from 'react'
import { Input } from '@ui-kit'
import { theme } from '@constants'
import { EPagePaths } from '@types'
import { useRouter } from 'next/router'

export const SearchField: FC = () => {
  const router = useRouter()
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
      fluid
      onChange={e => setSearchTerm(e.target.value)}
      hasIcon
      onKeyDown={e => handleKeyDown(e)}
    />
  )
}
