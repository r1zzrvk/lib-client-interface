import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { EDateFormats, TBook } from '@types'
import { ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'
import { FC } from 'react'
import { Flexbox, LabelWithText } from '@components/atoms'
import { IconsSelector, PageInfoBlock } from '@components/molecules'
import { formatDate, formatIsoLang, removeHTMLFromString } from '@utils'
import { useAppSelector, useBreakpoint } from '@hooks'
import { useRouter } from 'next/router'
import { getUserAuth } from '@selectors'
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
  const isAuth = useAppSelector(getUserAuth)
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
              isAuth && (
                <Styled.IconWrapper onClick={onBookmarkClick}>
                  <IconsSelector
                    size={theme.icon_sizes.sm}
                    icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                    color={theme.colors.white}
                    isButton
                  />
                </Styled.IconWrapper>
              )
            )}
          </Flexbox>
        )}
        {isLoading && !isTablet ? (
          <Skeleton radius={theme.radiuses.xs} height={496} width={310} />
        ) : (
          <ResponsiveImage src={imageLink} height={496} width={310} isLg isMd isSm />
        )}
        <Flexbox justify="center">
          {isLoading && isTablet ? (
            <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
          ) : (
            <ResponsiveImage src={imageLink} height={360} width={230} isTablet />
          )}
        </Flexbox>
        <Flexbox justify="space-between" direction="column">
          <Flexbox direction="column">
            {isLoading ? (
              <>
                <Skeleton radius={theme.radiuses.xs} height={36} width={400} />
                <Spacer size={theme.space.xs3} />
              </>
            ) : (
              <Text
                color={theme.colors.grey}
                fontSize={theme.fonts.size.header.md}
                fontHeight={theme.fonts.height.header.md}
                fontWeight={theme.fonts.weight.semibold}
                marginBottom={theme.space.xs3}
              >
                {title}
              </Text>
            )}
            {isLoading ? (
              <>
                <Skeleton radius={8} height={24} width={150} />
                <Spacer size={theme.space.md} />
              </>
            ) : (
              <Text
                color={theme.colors.main}
                fontSize={theme.fonts.size.regular.lg}
                fontHeight={theme.fonts.height.regular.lg}
                fontWeight={theme.fonts.weight.regular}
                marginBottom={theme.space.md}
              >
                {authors?.join(', ')}
              </Text>
            )}
            {isLoading ? (
              <Skeleton radius={theme.radiuses.xs} height={150} width={300} />
            ) : (
              <>
                {showAboutEdition && (
                  <PageInfoBlock title="About this edition">
                    {publishedDate && (
                      <LabelWithText
                        label="Publish date:"
                        text={formatDate(publishedDate, EDateFormats.MMMM_DD_YYYY)}
                      />
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
              </>
            )}
          </Flexbox>
          {isTablet ||
            (isAuth && (
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
            ))}
        </Flexbox>
      </Flexbox>
      {isLoading ? (
        <>
          <Spacer size={theme.radiuses.lg} />
          <Skeleton radius={theme.radiuses.xs} height={300} />
        </>
      ) : (
        description && (
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
        )
      )}
    </Styled.Wrapper>
  )
}
