import { Dispatch, FC, SetStateAction } from 'react'
import { theme } from '@constants'
import { TBook, TFirebaseUser } from '@types'
import { IconsSelector } from '@components/molecules'
import { Divider } from '@ui-kit'
import { getImage, sliceItems, textLimiter } from '@utils'
import { Flexbox } from '@components/atoms'
import { updateBookmarkList } from '@api'
import { Text } from '../Text'
import { Styled } from './styled'

type TCardProps = {
  bookmarks: TBook[]
  uid?: TFirebaseUser['uid']
  updateList?: Dispatch<SetStateAction<TBook[]>>
} & TBook

export const Card: FC<TCardProps> = ({ volumeInfo, bookmarks, id, uid, updateList, ...rest }) => {
  const { title, imageLinks, categories, authors } = volumeInfo

  const isActive = !!bookmarks?.find(bookmark => bookmark.id === id)

  const handleBookmarkClick = async () => {
    if (uid) {
      if (isActive) {
        updateBookmarkList({ uid, list: bookmarks.filter(item => item.id !== id) })

        updateList?.(bookmarks)
        return
      }

      updateBookmarkList({
        uid,
        list: [
          ...bookmarks,
          {
            id,
            volumeInfo,
            ...rest,
          },
        ],
      })

      updateList?.(bookmarks)
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Image
        src={getImage(imageLinks)}
        alt="book cover"
        width={110}
        height={170}
        objectFit="cover"
        isEverywhere
      />
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
            <Styled.Icon>
              <IconsSelector
                icon={isActive ? 'bookmark_solid' : 'bookmark_regular'}
                color={isActive ? theme.colors.main : theme.colors.grey}
                onClick={handleBookmarkClick}
              />
            </Styled.Icon>
          )}
        </Styled.ButtonBlock>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
