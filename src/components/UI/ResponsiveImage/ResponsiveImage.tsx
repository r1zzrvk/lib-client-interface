import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

type TResponsiveImageProps = {
  src: string
} & ImageProps

export const ResponsiveImage: FC<TResponsiveImageProps> = ({ src, ...rest }) => <Image src={src} {...rest} />
