import { FC } from 'react'
import { theme } from '@constants'
import { TBook } from '@types'
import { IconsSelector } from '@components/molecules'
import { Divider } from '@ui-kit'
import { getImage, sliceItems, textLimiter } from '@utils'
import { Flexbox } from '@components/atoms'
import { Text } from '../Text'
import { Styled } from './styled'

export const Card: FC<TBook> = ({ volumeInfo }) => {
  const { title, imageLinks, categories, authors } = volumeInfo

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
          <Styled.Icon>
            <IconsSelector icon="bookmark_regular" color={theme.colors.grey} />
          </Styled.Icon>
        </Styled.ButtonBlock>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
