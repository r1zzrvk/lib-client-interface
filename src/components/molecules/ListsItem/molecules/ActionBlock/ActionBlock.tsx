import { useRouter } from 'next/router'
import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { SwitchToggle } from '@ui-kit'
import { FC } from 'react'
import { EPagePaths, TList } from '@types'
import { IconWithLabel } from '../IconWithLabel'

type TActionBlockProps = {
  list: TList
  checked: boolean
  iconSize: number
  onChecked: () => void
  isBookmarks?: boolean
  onDelete: (id: string) => void
  onEdit: (list: TList) => void
}

export const ActionBlock: FC<TActionBlockProps> = ({
  checked,
  onChecked,
  iconSize,
  isBookmarks,
  list,
  onDelete,
  onEdit,
}) => {
  const router = useRouter()

  return (
    <Flexbox height={28} align="center" justify="space-between" gap={theme.space.sm}>
      <Flexbox gap={theme.space.md} align="center">
        <IconWithLabel
          icon="link_solid"
          label="Go to list"
          iconSize={iconSize}
          onClick={() => router.push(`${EPagePaths.MY_LISTS}/${list.id}`)}
        />
        {isBookmarks || (
          <>
            <IconWithLabel icon="edit_solid" label="Edit" iconSize={iconSize} onClick={() => onEdit(list)} />
            <IconWithLabel icon="trash_solid" label="Delete" iconSize={iconSize} onClick={() => onDelete(list.id)} />
          </>
        )}
      </Flexbox>
      {isBookmarks || <SwitchToggle checked={checked} onChange={onChecked} size="md" label="Pinned" />}
    </Flexbox>
  )
}
