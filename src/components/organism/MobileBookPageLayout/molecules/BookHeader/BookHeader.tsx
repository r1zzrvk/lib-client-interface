import { Flexbox } from '@components/atoms'
import { IconsSelector } from '@components/molecules'
import { BOOKMARK_LIST_ID, BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { TBook, TList } from '@types'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { ResponsiveImage, Skeleton, Spacer } from '@ui-kit'
import { useAppSelector, useLists } from '@hooks'
import { getUserData } from '@selectors'
import { updateBookmarkList } from '@api'
import { Styled } from './styled'

type TBookHeaderProps = TBook & {
  id: TBook['id']
  isLoading: boolean
}

export const BookHeader: FC<TBookHeaderProps> = ({ volumeInfo, id, isLoading, ...rest }) => {
  const router = useRouter()
  const { uid } = useAppSelector(getUserData) || {}
  const [updatedList, updateList] = useState<TList | null>(null)
  const bookmarks = useLists({ uid, docId: BOOKMARK_LIST_ID, list: updatedList })?.[0]
  const isActive = !!bookmarks?.listItems?.find(bookmark => bookmark.id === id)
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`

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
        {isLoading ? (
          <Skeleton radius={theme.radiuses.round} width={48} height={48} />
        ) : (
          <Styled.IconWrapper onClick={handleBookmarkClick}>
            <IconsSelector
              size={theme.icon_sizes.sm}
              icon={isActive ? 'bookmark_solid' : 'bookmark_regular'}
              color={isActive ? theme.colors.main : theme.colors.grey}
              isButton
            />
          </Styled.IconWrapper>
        )}
      </Flexbox>
      <Spacer size={0} sizeMob={theme.space.sm} />
      <Flexbox justify="center">
        {isLoading ? (
          <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
        ) : (
          <ResponsiveImage src={imageLink} height={360} width={230} isEverywhere />
        )}
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
    </>
  )
}
