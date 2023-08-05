import React, { FC, useState } from 'react'
import { Input, Spacer } from '@ui-kit'
import { theme } from '@constants'
import { Background } from '@components/atoms'
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
    <Background color={theme.colors.main}>
      <Spacer sizeMob={theme.space.sm} />
      <Input
        value={searchTerm}
        placeholder="Search for books"
        type="text"
        color={theme.colors.beige}
        fluid
        onChange={e => setSearchTerm(e.target.value)}
        hasIcon
        isClearable
        onClear={() => setSearchTerm('')}
        onKeyDown={e => handleKeyDown(e)}
      />
    </Background>
  )
}
