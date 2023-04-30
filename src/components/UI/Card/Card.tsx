import { FC, useEffect, useState } from 'react'
import { theme } from '@constants'
import { TBook } from '@types'
import { IconsSelector } from '@components'
import { useBreakpoint } from '@hooks'
import { getImage, sliceItems, textLimiter } from '@utils'
import { Text } from '../Text'
import { Styled } from './styled'
import { Button } from '../Button'

export const Card: FC<TBook> = ({ volumeInfo }) => {
  const { title, imageLinks, categories, authors } = volumeInfo
  const { isMob, isTablet, isSm, isMd, isLg } = useBreakpoint()
  const [limit, setLimit] = useState(30)

  useEffect(() => {
    if (isMob) {
      setLimit(30)
    }

    if (isTablet) {
      setLimit(65)
    }

    if (isSm) {
      setLimit(40)
    }

    if (isMd) {
      setLimit(55)
    }

    if (isLg) {
      setLimit(90)
    }
  }, [isLg, isMd, isMob, isSm, isTablet])

  return (
    <Styled.Wrapper>
      <Styled.Image src={getImage(imageLinks)} alt="asd" />
      <Styled.Content>
        <div>
          <Text
            color={theme.colors.grey}
            marginBottom={theme.space.xs2}
            marginBottomMob={theme.space.xs3}
            fontSize={theme.fonts.size.header.sm}
            fontHeight={theme.fonts.height.header.sm}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.semibold}
          >
            {textLimiter(title, limit)}
          </Text>
          <Text
            color={theme.colors.main}
            fontWeight={theme.fonts.weight.semibold}
            fontSizeMob={theme.fonts.size.regular.sm}
            fontHeightMob={theme.fonts.height.regular.sm}
            fontWeightMob={theme.fonts.weight.medium}
            marginBottomMob={theme.space.xs3}
          >
            {sliceItems(authors, 1)}
          </Text>
          <Text color={theme.colors.grey} fontWeight={theme.fonts.weight.regular}>
            {sliceItems(categories)}
          </Text>
        </div>
        <Styled.ButtonBlock>
          <Styled.Icon>
            <IconsSelector icon="bookmark_regular" color={theme.colors.grey} />
          </Styled.Icon>
          {!isMob && <Button size="lg">More</Button>}
        </Styled.ButtonBlock>
      </Styled.Content>
    </Styled.Wrapper>
  )
}
