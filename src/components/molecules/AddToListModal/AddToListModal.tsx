import { FC } from 'react'
import { useRouter } from 'next/router'

import { Flexbox } from '@components/atoms'
import { Button, Modal, Spacer, Text } from '@ui-kit'

import { BOOKMARK_LIST_ID, theme } from '@constants'
import { EPagePaths, TBook, TList } from '@types'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'
import { SelectListItem } from '../SelectListItem'
import { IconsSelector } from '../IconsSelector'

type TAddToListModalProps = {
  lists: TList[]
  isOpened: boolean
  onClose: () => void
  onSaveClick: () => void
  onSelectList: (id: string) => void
  bookId?: TBook['id']
}

export const AddToListModal: FC<TAddToListModalProps> = ({
  isOpened,
  onClose,
  lists,
  onSaveClick,
  bookId,
  onSelectList,
}) => {
  const { isMob } = useBreakpoint()
  const router = useRouter()
  const listsWithoutBookmarks = lists.filter(({ id }) => id !== BOOKMARK_LIST_ID)

  if (!bookId) {
    return null
  }

  const handleClickCreate = () => {
    router.push(`${EPagePaths.MY_LISTS}/?createOne=true`)
  }

  return (
    <Modal isOpen={isOpened} onClose={onClose} size="sm" title="Select list">
      <Styled.Wrapper>
        {listsWithoutBookmarks.length ? (
          <Styled.List>
            {listsWithoutBookmarks.map(list => (
              <SelectListItem key={list.id} list={list} bookId={bookId} onSelectList={id => onSelectList(id)} />
            ))}
          </Styled.List>
        ) : (
          <>
            <Spacer size={theme.space.sm} sizeMob={theme.space.xs2} />
            <Text
              color={theme.colors.grey}
              fontSize={theme.fonts.size.regular.md}
              fontSizeMob={theme.fonts.size.regular.md}
              fontHeight={theme.fonts.height.regular.md}
              fontHeightMob={theme.fonts.height.regular.md}
            >
              You don&apos;t have any lists created yet
            </Text>
          </>
        )}
        <Spacer size={theme.space.md} sizeMob={theme.space.md} />
        <Flexbox justify="end" direction={isMob ? 'column-reverse' : 'row'}>
          <Button onClick={onClose} isGhost size="sm" isFluid={isMob}>
            Сancel
          </Button>
          {listsWithoutBookmarks.length ? (
            <Button onClick={() => onSaveClick()} size="lg" isFluid={isMob} type="button">
              Save
            </Button>
          ) : (
            <Button onClick={handleClickCreate} size="lg" isFluid={isMob} type="button">
              <Flexbox justify="center" align="center" gap={theme.space.xs2}>
                <Text
                  color={theme.colors.grey}
                  fontSizeMob={theme.fonts.size.regular.md}
                  fontHeightMob={theme.fonts.height.regular.md}
                  fontWeightMob={theme.fonts.weight.regular}
                >
                  Create one
                </Text>
                <IconsSelector size={theme.icon_sizes.xs} icon="link_solid" color={theme.colors.grey} />
              </Flexbox>
            </Button>
          )}
        </Flexbox>
      </Styled.Wrapper>
    </Modal>
  )
}
