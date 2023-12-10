import { Flexbox } from '@components/atoms'
import { IconsSelector } from '@components/molecules'
import { BOOKMARK_LIST_ID, theme } from '@constants'
import { TBook, TList } from '@types'
import { getImage } from '@utils'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { ResponsiveImage, Spacer } from '@ui-kit'
import { useAppSelector, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { updateBookmarkList } from '@api'
import { Styled } from './styled'

type TBookHeaderProps = TBook & {
  id: TBook['id']
}

export const BookHeader: FC<TBookHeaderProps> = ({ volumeInfo, id, ...rest }) => {
  const router = useRouter()
  const { uid } = useAppSelector(getUserData) || {}
  const { imageLinks } = volumeInfo
  const [updatedList, updateList] = useState<TList | null>(null)
  const bookmarks = useLists({ uid, docId: BOOKMARK_LIST_ID, list: updatedList })?.[0]
  const isActive = !!bookmarks?.listItems?.find(bookmark => bookmark.id === id)

  const handleBackClick = () => {
    router.back()
  }

  const handleBookmarkClick = async () => {
    if (uid) {
      if (isActive) {
        updateBookmarkList({
          uid,
          list: {
            ...bookmarks,
            listItems: bookmarks.listItems.filter(item => item.id !== id),
          },
        })

        updateList?.(bookmarks)
        return
      }

      updateBookmarkList({
        uid,
        list: {
          ...bookmarks,
          listItems: [
            ...bookmarks.listItems,
            {
              id,
              volumeInfo,
              ...rest,
            },
          ],
        },
      })

      updateList?.(bookmarks)
    }
  }

  return (
    <>
      <Flexbox justify="space-between">
        <Styled.IconWrapper onClick={handleBackClick}>
          <IconsSelector size={theme.icon_sizes.sm} icon="caretLeft_solid" color={theme.colors.grey} isButton />
        </Styled.IconWrapper>
        <Styled.IconWrapper onClick={handleBookmarkClick}>
          <IconsSelector
            size={theme.icon_sizes.sm}
            icon={isActive ? 'bookmark_solid' : 'bookmark_regular'}
            color={isActive ? theme.colors.main : theme.colors.grey}
            isButton
          />
        </Styled.IconWrapper>
      </Flexbox>
      <Spacer size={0} sizeMob={theme.space.sm} />
      <Flexbox justify="center">
        <ResponsiveImage src={getImage(imageLinks)} height={360} width={230} isEverywhere />
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
    </>
  )
}
