import NextImage, { ImageProps } from 'next/image'
import { FC } from 'react'
import { Styled } from './styled'

type TResponsiveImageProps = {
  src: string
  isMob?: boolean
  isTablet?: boolean
  isSm?: boolean
  isMd?: boolean
  isLg?: boolean
  isEverywhere?: boolean
} & ImageProps

export const ResponsiveImage: FC<TResponsiveImageProps> = ({
  src,
  isEverywhere = false,
  isMob = false,
  isTablet = false,
  isSm = false,
  isMd = false,
  isLg = false,
  ...rest
}) => {
  if (isEverywhere) {
    return (
      <Styled.Image isMob isLg isMd isSm isTablet>
        <NextImage src={src} {...rest} />
      </Styled.Image>
    )
  }

  return (
    <Styled.Image isMob={isMob} isLg={isLg} isMd={isMd} isSm={isSm} isTablet={isTablet}>
      <NextImage src={src} {...rest} />
    </Styled.Image>
  )
}
