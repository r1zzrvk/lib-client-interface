import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { EPagePaths, TBook, TFirebaseUser, TList } from '@types'
import { IconsSelector } from '@components/molecules'
import { Divider } from '@ui-kit'
import { sliceItems, textLimiter } from '@utils'
import { Flexbox } from '@components/atoms'
import { updateBookmarkList } from '@api'
import { useRouter } from 'next/router'
import { Text } from '../Text'
import { Styled } from './styled'

type TCardProps = {
  bookmarks: TList
  uid?: TFirebaseUser['uid']
  updateList?: Dispatch<SetStateAction<TList | null>>
} & TBook

export const Card: FC<TCardProps> = ({ volumeInfo, bookmarks, id, uid, updateList, ...rest }) => {
  const router = useRouter()
  const { title, categories, authors } = volumeInfo
  const { listItems } = bookmarks || {}
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`

  const isActive = !!listItems?.find(bookmark => bookmark.id === id)

  const handleCardClick = () => {
    router.push(`${EPagePaths.CATALOG}/${id}`)
  }

  const handleBookmarkClick = async (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.stopPropagation()

    if (uid) {
      if (isActive) {
        updateBookmarkList({
          uid,
          list: {
            ...bookmarks,
            listItems: listItems.filter(item => item.id !== id),
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
            ...listItems,
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
    <Styled.Wrapper onClick={handleCardClick}>
      <Styled.Image src={imageLink} alt="book cover" width={106} height={170} objectFit="cover" isEverywhere />
      <Styled.Content>
        <div>
          <Text
            color={theme.colors.grey}
            marginBottom={theme.space.xs2}
            marginBottomMob={theme.space.xs3}
            fontSize={theme.fonts.size.header.xs}
            fontHeight={theme.fonts.height.header.xs}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.medium}
          >
            {textLimiter(title, 30)}
          </Text>
          <Divider />
          <Text color={theme.colors.grey} fontWeight={theme.fonts.weight.regular}>
            {sliceItems(categories)}
          </Text>
        </div>
        <Styled.ButtonBlock>
          <Flexbox direction="column">
            <Text
              color={theme.colors.main}
              fontWeight={theme.fonts.weight.medium}
              fontSizeMob={theme.fonts.size.regular.sm}
              fontHeightMob={theme.fonts.height.regular.sm}
              fontWeightMob={theme.fonts.weight.medium}
              marginBottomMob={theme.space.xs3}
            >
              {authors && sliceItems(authors, 1)}
            </Text>
          </Flexbox>
          {uid && (
            <Styled.Icon onClick={e => handleBookmarkClick(e)}>
              <IconsSelector
                icon={isActive ? 'bookmark_solid' : 'bookmark_regular'}
                color={isActive ? theme.colors.main : theme.colors.grey}
              />
            </Styled.Icon>
          )}
        </Styled.ButtonBlock>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
