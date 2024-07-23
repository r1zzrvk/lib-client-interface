import { useRouter } from 'next/router'
import { FC } from 'react'

import { Flexbox, LabelWithText } from '@components/atoms'
import { PageInfoBlock } from '@components/molecules'
import { ActionIcon, Button, ReadMore, ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'

import { BOOKS_IMAGE_PATH, BOOKS_IMAGE_SIZE, theme } from '@constants'
import { useAppSelector, useBreakpoint } from '@hooks'
import { getUserAuth } from '@selectors'
import { EDateFormats, TBook, TList } from '@types'
import { formatDate, formatIsoLang, removeHTMLFromString } from '@utils'

import { Styled } from './styled'

type TBookPageLayoutProps = {
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: () => void
} & Partial<TBook>

export const BookPageLayout: FC<TBookPageLayoutProps> = ({
  id,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  volumeInfo,
  listWithBook,
  onAddToListClick,
}) => {
  const router = useRouter()
  const { isTablet } = useBreakpoint()
  const isAuth = useAppSelector(getUserAuth)
  const imageLink = `${BOOKS_IMAGE_PATH}${id}${BOOKS_IMAGE_SIZE}`
  const averageRatingText = volumeInfo?.ratingsCount
    ? `${volumeInfo?.averageRating} (${volumeInfo?.ratingsCount} reviews)`
    : volumeInfo?.averageRating?.toString()
  const showAboutEdition =
    volumeInfo?.publishedDate || volumeInfo?.publisher || volumeInfo?.pageCount || volumeInfo?.language
  const showAboutWork = volumeInfo?.categories || volumeInfo?.averageRating
  const imageLayout = isTablet ? 'column' : 'row'

  const handleBackClick = () => {
    router.back()
  }

  return (
    <Styled.Wrapper>
      <Flexbox gap={theme.space.sm} direction={imageLayout}>
        {isTablet && (
          <Flexbox justify="space-between">
            <ActionIcon
              icon="caretLeft_solid"
              color={theme.colors.grey}
              backgroundColor={theme.colors.beige}
              size={theme.icon_sizes.md}
              padding={theme.space.md}
              onClick={handleBackClick}
            />
            {isLoading ? (
              <Skeleton radius={theme.radiuses.round} width={48} height={48} />
            ) : (
              isAuth && (
                <Flexbox gap={theme.space.sm}>
                  <ActionIcon
                    size={theme.icon_sizes.md}
                    padding={theme.space.md}
                    icon={listWithBook ? 'check_solid' : 'plus_solid'}
                    color={theme.colors.grey}
                    backgroundColor={theme.colors.beige}
                    onClick={onAddToListClick}
                  />
                  <ActionIcon
                    size={theme.icon_sizes.md}
                    padding={theme.space.md}
                    icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                    color={theme.colors.grey}
                    backgroundColor={theme.colors.beige}
                    onClick={onBookmarkClick}
                  />
                </Flexbox>
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
                {volumeInfo?.title}
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
                {volumeInfo?.authors?.join(', ')}
              </Text>
            )}
            {isLoading ? (
              <Skeleton radius={theme.radiuses.xs} height={150} width={300} />
            ) : (
              <>
                {showAboutEdition && (
                  <PageInfoBlock title="About this edition">
                    {volumeInfo?.publishedDate && (
                      <LabelWithText
                        label="Publish date:"
                        text={formatDate(volumeInfo?.publishedDate, EDateFormats.MMMM_DD_YYYY)}
                      />
                    )}
                    {volumeInfo?.publisher && <LabelWithText label="Publisher:" text={volumeInfo?.publisher} />}
                    {volumeInfo?.pageCount && (
                      <LabelWithText label="Page count:" text={volumeInfo?.pageCount.toString()} />
                    )}
                    {volumeInfo?.language && (
                      <LabelWithText label="Language:" text={formatIsoLang(volumeInfo?.language)} />
                    )}
                  </PageInfoBlock>
                )}
                {showAboutWork && (
                  <>
                    <Spacer size={theme.space.md} />
                    <PageInfoBlock title="About the work">
                      {volumeInfo?.categories?.length && (
                        <LabelWithText label="Genres:" text={volumeInfo?.categories.join(', ')} />
                      )}
                      {volumeInfo?.averageRating && (
                        <LabelWithText label="Google rating:" text={averageRatingText || ''} />
                      )}
                      {(volumeInfo?.categories?.length || volumeInfo?.averageRating) && (
                        <Spacer sizeMob={theme.space.md} />
                      )}
                    </PageInfoBlock>
                  </>
                )}
              </>
            )}
          </Flexbox>
          {isTablet ||
            (isAuth && (
              <Flexbox align="center" gap={theme.space.sm}>
                <Button onClick={onAddToListClick} size="lg" rightIcon={listWithBook ? 'check_solid' : 'plus_solid'}>
                  <Text
                    color={theme.colors.grey}
                    fontSize={theme.fonts.size.regular.md}
                    fontHeight={theme.fonts.height.regular.md}
                    fontWeight={theme.fonts.weight.regular}
                  >
                    {listWithBook ? 'In my list' : 'Add to list'}
                  </Text>
                </Button>
                <ActionIcon
                  icon={isBookmarked ? 'bookmark_solid' : 'bookmark_regular'}
                  onClick={onBookmarkClick}
                  color={theme.colors.white}
                  backgroundColor={theme.colors.main}
                  size={theme.icon_sizes.md}
                  padding={theme.space.md}
                />
              </Flexbox>
            ))}
        </Flexbox>
      </Flexbox>
      {isLoading ? (
        <>
          <Spacer size={theme.radiuses.lg} />
          <Skeleton radius={theme.radiuses.xs} height={300} />
        </>
      ) : (
        volumeInfo?.description && (
          <Styled.Description>
            <ReadMore
              text={removeHTMLFromString(volumeInfo?.description, ' ')}
              textProps={{
                color: theme.colors.grey,
                fontSize: theme.fonts.size.regular.md,
                fontHeight: theme.fonts.height.regular.md,
                fontWeight: theme.fonts.weight.regular,
              }}
            />
          </Styled.Description>
        )
      )}
    </Styled.Wrapper>
  )
}
