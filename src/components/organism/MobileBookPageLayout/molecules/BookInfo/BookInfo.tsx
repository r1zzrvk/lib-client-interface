import { FC } from 'react'

import { ReadMore, Spacer, Text } from '@ui-kit'
import { LabelWithText } from '@components/atoms'
import { PageInfoBlock } from '@components/molecules'

import { theme } from '@constants'
import { EDateFormats, TBook } from '@types'
import { formatDate, formatIsoLang, removeHTMLFromString } from '@utils'

import { Styled } from './styled'
import { InfoSkeleton } from '../../atoms'

type TBookInfoProps = {
  isLoading: boolean
  volumeInfo?: TBook['volumeInfo']
}

export const BookInfo: FC<TBookInfoProps> = ({ volumeInfo, isLoading }) => {
  const averageRatingText = volumeInfo?.ratingsCount
    ? `${volumeInfo?.averageRating} (${volumeInfo?.ratingsCount} reviews)`
    : volumeInfo?.averageRating?.toString()
  const showAboutEdition =
    volumeInfo?.publishedDate || volumeInfo?.publisher || volumeInfo?.pageCount || volumeInfo?.language
  const showAboutWork = volumeInfo?.categories || volumeInfo?.averageRating || volumeInfo?.description

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
            {volumeInfo?.title}
          </Text>
          <Text
            color={theme.colors.main}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            fontWeightMob={theme.fonts.weight.regular}
            marginBottomMob={theme.space.md}
          >
            {volumeInfo?.authors?.join(', ')}
          </Text>
          {showAboutEdition && (
            <PageInfoBlock title="About this edition">
              {volumeInfo?.publishedDate && (
                <LabelWithText
                  label="Publish date:"
                  text={formatDate(volumeInfo?.publishedDate, EDateFormats.MMMM_DD_YYYY)}
                />
              )}
              {volumeInfo?.publisher && <LabelWithText label="Publisher:" text={volumeInfo?.publisher} />}
              {volumeInfo?.pageCount && <LabelWithText label="Page count:" text={volumeInfo?.pageCount.toString()} />}
              {volumeInfo?.language && <LabelWithText label="Language:" text={formatIsoLang(volumeInfo?.language)} />}
            </PageInfoBlock>
          )}
          {showAboutWork && (
            <>
              <Spacer sizeMob={theme.space.md} />
              <PageInfoBlock title="About the work">
                {volumeInfo?.categories?.length && (
                  <LabelWithText label="Genres:" text={volumeInfo?.categories.join(', ')} />
                )}
                {volumeInfo?.averageRating && <LabelWithText label="Google rating:" text={averageRatingText || ''} />}
                {(volumeInfo?.categories?.length || volumeInfo?.averageRating) && <Spacer sizeMob={theme.space.md} />}
              </PageInfoBlock>
              {volumeInfo?.description && (
                <ReadMore
                  text={removeHTMLFromString(volumeInfo?.description, ' ')}
                  textProps={{
                    color: theme.colors.grey,
                    fontSizeMob: theme.fonts.size.regular.md,
                    fontHeightMob: theme.fonts.height.regular.md,
                    fontWeightMob: theme.fonts.weight.regular,
                  }}
                />
              )}
            </>
          )}
        </>
      )}
      <Spacer sizeMob={theme.space.md} />
    </Styled.Wrapper>
  )
}
