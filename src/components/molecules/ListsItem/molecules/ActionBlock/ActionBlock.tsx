import { useRouter } from 'next/router'
import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { SwitchToggle } from '@ui-kit'
import { FC } from 'react'
import { EPagePaths } from '@types'
import { IconWithLabel } from '../IconWithLabel'

type TActionBlockProps = {
  checked: boolean
  iconSize: number
  onChecked: () => void
  isBookmarks?: boolean
}

export const ActionBlock: FC<TActionBlockProps> = ({ checked, onChecked, iconSize, isBookmarks }) => {
  const router = useRouter()

  return (
    <Flexbox height={28} align="center" justify="space-between" gap={theme.space.sm}>
      <Flexbox gap={theme.space.md} align="center" onClick={() => router.push(EPagePaths.MY_LISTS)}>
        <IconWithLabel icon="link_solid" label="Go to list" iconSize={iconSize} />
        {isBookmarks || (
          <>
            <IconWithLabel icon="edit_solid" label="Edit" iconSize={iconSize} />
            <IconWithLabel icon="trash_regular" label="Delete" iconSize={iconSize} />
          </>
        )}
      </Flexbox>
      <SwitchToggle checked={checked} onChange={onChecked} size="md" label="Pinned" disabled={isBookmarks} />
    </Flexbox>
  )
}
