/* eslint-disable max-lines-per-function */
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { Flexbox, LabelWithText } from '@components/atoms'
import { PageInfoBlock } from '@components/molecules'
import { ActionIcon, Button, Menu, ReadMore, ResponsiveImage, Skeleton, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { useAppSelector, useBreakpoint, useSelectingLists } from '@hooks'
import { getUserAuth } from '@selectors'
import { EDateFormats, EPagePaths, TBook, TList } from '@types'
import { formatDate, formatIsoLang, getImageURL, removeHTMLFromString } from '@utils'

import { Styled } from './styled'

type TBookPageLayoutProps = {
  book: TBook | null
  lists: TList[]
  isLoading: boolean
  onBookmarkClick: () => void
  isBookmarked: boolean
  listWithBook: TList
  onAddToListClick: (listIds: string[], book: TBook) => void
}

export const BookPageLayout: FC<TBookPageLayoutProps> = ({
  book,
  lists,
  isLoading,
  onBookmarkClick,
  isBookmarked,
  listWithBook,
  onAddToListClick,
}) => {
  const router = useRouter()
  const { isTablet } = useBreakpoint()
  const isAuth = useAppSelector(getUserAuth)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const { volumeInfo, id } = book || {}
  const { menuItems, selectedListIds, onClear, checkAddedLists } = useSelectingLists({ lists, bookId: id || '' })
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

  const handleOpenMenu = () => {
    setIsMenuOpened(prev => !prev)
    checkAddedLists()
  }

  const handleSubmitClick = () => {
    if (menuItems.length && book) {
      onAddToListClick?.(selectedListIds, book)
      onClear()
      setIsMenuOpened(false)

      return
    }

    router.push(`${EPagePaths.MY_LISTS}/?createOne=true`)
  }

  useEffect(() => {
    if (lists.length) {
      checkAddedLists()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lists.length])

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
                  <Menu.Popover opened={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
                    <ActionIcon
                      size={theme.icon_sizes.md}
                      padding={theme.space.md}
                      icon={listWithBook ? 'check_solid' : 'plus_solid'}
                      color={theme.colors.grey}
                      backgroundColor={theme.colors.beige}
                      onClick={handleOpenMenu}
                    />
                    {menuItems?.length ? (
                      menuItems?.map(({ action, icon, title, color, id }) => (
                        <Menu.MenuItem
                          key={id}
                          onClick={() => action()}
                          title={title}
                          color={color}
                          icon={icon}
                          iconPosition="right"
                        />
                      ))
                    ) : (
                      <Styled.EmptyListsWrapper>
                        <Text
                          color={theme.colors.grey}
                          fontSizeMob={theme.fonts.size.regular.md}
                          fontHeightMob={theme.fonts.height.regular.md}
                        >
                          No lists found
                        </Text>
                      </Styled.EmptyListsWrapper>
                    )}
                    <Styled.ButtonWrapper>
                      <Button onClick={handleSubmitClick} height={30} borderRadius={8} isFluid>
                        {menuItems?.length ? 'Update' : 'Create a list'}
                      </Button>
                    </Styled.ButtonWrapper>
                  </Menu.Popover>
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
          <ResponsiveImage src={getImageURL(id || '')} height={496} width={310} isLg isMd isSm />
        )}
        <Flexbox justify="center">
          {isLoading && isTablet ? (
            <Skeleton radius={theme.radiuses.xs} height={360} width={230} />
          ) : (
            <ResponsiveImage src={getImageURL(id || '')} height={360} width={230} isTablet />
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
                <Menu.Popover opened={isMenuOpened} onClose={() => setIsMenuOpened(false)}>
                  <Button onClick={handleOpenMenu} size="lg" rightIcon={listWithBook ? 'check_solid' : 'plus_solid'}>
                    <Text
                      color={theme.colors.grey}
                      fontSize={theme.fonts.size.regular.md}
                      fontHeight={theme.fonts.height.regular.md}
                      fontWeight={theme.fonts.weight.regular}
                    >
                      {listWithBook ? 'In my list' : 'Add to list'}
                    </Text>
                  </Button>
                  {menuItems?.length ? (
                    menuItems?.map(({ action, icon, title, color, id }) => (
                      <Menu.MenuItem
                        key={id}
                        onClick={() => action()}
                        title={title}
                        color={color}
                        icon={icon}
                        iconPosition="right"
                      />
                    ))
                  ) : (
                    <Styled.EmptyListsWrapper>
                      <Text
                        color={theme.colors.grey}
                        fontSizeMob={theme.fonts.size.regular.md}
                        fontHeightMob={theme.fonts.height.regular.md}
                      >
                        No lists found
                      </Text>
                    </Styled.EmptyListsWrapper>
                  )}
                  <Styled.ButtonWrapper>
                    <Button onClick={handleSubmitClick} height={30} borderRadius={8} isFluid>
                      {menuItems?.length ? 'Update' : 'Create a list'}
                    </Button>
                  </Styled.ButtonWrapper>
                </Menu.Popover>
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
