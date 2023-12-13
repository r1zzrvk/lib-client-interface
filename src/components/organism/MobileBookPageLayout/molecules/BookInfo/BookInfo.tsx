import { theme } from '@constants'
import { EDateFormats, TBook } from '@types'
import { Spacer, Text } from '@ui-kit'
import { FC } from 'react'
import { formatDate, formatIsoLang, removeHTMLFromString } from '@utils'
import { LabelWithText } from '@components/atoms'
import { PageInfoBlock } from '@components/molecules'
import { Styled } from './styled'
import { InfoSkeleton } from '../../atoms'

type TBookInfoProps = {
  isLoading: boolean
  volumeInfo: TBook['volumeInfo']
}

export const BookInfo: FC<TBookInfoProps> = ({ volumeInfo, isLoading }) => {
  const {
    ratingsCount,
    averageRating,
    publishedDate,
    publisher,
    pageCount,
    language,
    categories,
    description,
    authors,
    title,
  } = volumeInfo
  const averageRatingText = ratingsCount ? `${averageRating} (${ratingsCount} reviews)` : averageRating?.toString()
  const showAboutEdition = publishedDate || publisher || pageCount || language
  const showAboutWork = categories || averageRating || description

  return (
    <Styled.Wrapper>
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <>
          <Text
            color={theme.colors.grey}
            fontSizeMob={theme.fonts.size.header.sm}
            fontHeightMob={theme.fonts.height.header.sm}
            fontWeightMob={theme.fonts.weight.semibold}
            marginBottomMob={theme.space.xs4}
          >
            {title}
          </Text>
          <Text
            color={theme.colors.main}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.regular}
            marginBottomMob={theme.space.md}
          >
            {authors?.join(', ')}
          </Text>
          {showAboutEdition && (
            <PageInfoBlock title="About this edition">
              {publishedDate && (
                <LabelWithText label="Publish date:" text={formatDate(publishedDate, EDateFormats.MMMM_DD_YYYY)} />
              )}
              {publisher && <LabelWithText label="Publisher:" text={publisher} />}
              {pageCount && <LabelWithText label="Page count:" text={pageCount.toString()} />}
              {language && <LabelWithText label="Language:" text={formatIsoLang(language)} />}
            </PageInfoBlock>
          )}
          {showAboutWork && (
            <>
              <Spacer sizeMob={theme.space.md} />
              <PageInfoBlock title="About the work">
                {categories?.length && <LabelWithText label="Genres:" text={categories.join(', ')} />}
                {averageRating && <LabelWithText label="Google rating:" text={averageRatingText} />}
                {(categories?.length || averageRating) && <Spacer sizeMob={theme.space.md} />}
              </PageInfoBlock>
              {description && (
                <Text
                  color={theme.colors.grey}
                  fontSizeMob={theme.fonts.size.regular.md}
                  fontHeightMob={theme.fonts.height.regular.md}
                  fontWeightMob={theme.fonts.weight.regular}
                >
                  {removeHTMLFromString(description, ' ')}
                </Text>
              )}
            </>
          )}
        </>
      )}
      <Spacer sizeMob={theme.space.md} />
    </Styled.Wrapper>
  )
}
