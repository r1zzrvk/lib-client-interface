import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { EDateFormats, TBook } from '@types'
import { ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'
import { FC } from 'react'
import { Flexbox, LabelWithText } from '@components/atoms'
import { IconsSelector, PageInfoBlock } from '@components/molecules'
import { formatDate, formatIsoLang, removeHTMLFromString } from '@utils'
import { useBreakpoint } from '@hooks'
import { useRouter } from 'next/router'
import { Styled } from './styled'

type TBookPageLayoutProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
} & TBook

export const BookPageLayout: FC<TBookPageLayoutProps> = ({
  id,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  volumeInfo,
}) => {
  const {
    title,
    authors,
    publishedDate,
    ratingsCount,
    averageRating,
    publisher,
    pageCount,
    language,
    categories,
    description,
  } = volumeInfo
  const router = useRouter()
  const { isTablet } = useBreakpoint()
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`
  const averageRatingText = ratingsCount ? `${averageRating} (${ratingsCount} reviews)` : averageRating?.toString()
  const showAboutEdition = publishedDate || publisher || pageCount || language
  const showAboutWork = categories || averageRating
  const imageLayout = isTablet ? 'column' : 'row'

  const handleBackClick = () => {
    router.back()
  }

  return (
    <Styled.Wrapper>
      <Flexbox gap={theme.space.sm} direction={imageLayout}>
        {isTablet && (
          <Flexbox justify="space-between">
            <Styled.IconWrapper onClick={handleBackClick}>
              <IconsSelector size={theme.icon_sizes.sm} icon="caretLeft_solid" color={theme.colors.white} isButton />
            </Styled.IconWrapper>
            {isLoading ? (
              <Skeleton radius={theme.radiuses.round} width={48} height={48} />
            ) : (
              <Styled.IconWrapper onClick={onBookmarkClick}>
                <IconsSelector
                  size={theme.icon_sizes.sm}
                  icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                  color={theme.colors.white}
                  isButton
                />
              </Styled.IconWrapper>
            )}
          </Flexbox>
        )}
        <ResponsiveImage src={imageLink} height={496} width={310} isLg isMd isSm />
        <Flexbox justify="center">
          <ResponsiveImage src={imageLink} height={360} width={230} isTablet />
        </Flexbox>
        <Flexbox justify="space-between" direction="column">
          <Flexbox direction="column">
            <Text
              color={theme.colors.grey}
              fontSize={theme.fonts.size.header.md}
              fontHeight={theme.fonts.height.header.md}
              fontWeight={theme.fonts.weight.semibold}
              marginBottom={theme.space.xs3}
            >
              {title}
            </Text>
            <Text
              color={theme.colors.main}
              fontSize={theme.fonts.size.regular.lg}
              fontHeight={theme.fonts.height.regular.lg}
              fontWeight={theme.fonts.weight.regular}
              marginBottom={theme.space.md}
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
                <Spacer size={theme.space.md} />
                <PageInfoBlock title="About the work">
                  {categories?.length && <LabelWithText label="Genres:" text={categories.join(', ')} />}
                  {averageRating && <LabelWithText label="Google rating:" text={averageRatingText} />}
                  {(categories?.length || averageRating) && <Spacer sizeMob={theme.space.md} />}
                </PageInfoBlock>
              </>
            )}
          </Flexbox>
          {isTablet || (
            <Styled.ActionWrapper justify="center" align="center" gap={theme.space.xs3} onClick={onBookmarkClick}>
              <Text
                color={theme.colors.grey}
                fontSize={theme.fonts.size.regular.md}
                fontHeight={theme.fonts.height.regular.md}
                fontWeight={theme.fonts.weight.regular}
              >
                {isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
              </Text>
              <IconsSelector
                size={theme.icon_sizes.sm}
                icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                color={isBookmarked ? theme.colors.main : theme.colors.grey}
                isButton
              />
            </Styled.ActionWrapper>
          )}
        </Flexbox>
      </Flexbox>
      {description && (
        <Styled.Description>
          <Text
            color={theme.colors.grey}
            fontSize={theme.fonts.size.regular.md}
            fontHeight={theme.fonts.height.regular.md}
            fontWeight={theme.fonts.weight.regular}
          >
            {removeHTMLFromString(description, ' ')}
          </Text>
        </Styled.Description>
      )}
    </Styled.Wrapper>
  )
}
