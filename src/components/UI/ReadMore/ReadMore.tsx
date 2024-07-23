import { FC, useState } from 'react'

import { theme } from '@constants'

import { Link } from '../Link'
import { Text, TTextProps } from '../Text'

type TReadMoreProps = {
  text: string
  textProps: Partial<TTextProps>
  amountOfWords?: number
}

export const ReadMore: FC<TReadMoreProps> = ({ amountOfWords = 76, textProps, text }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const splittedText = text.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(' ') : text
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  return (
    <div>
      <Text {...textProps}>
        {beginText}
        {isExpanded || '...'}
        {isExpanded && endText}
        {itCanOverflow && (
          <Link color={theme.colors.blue} onClick={() => setIsExpanded(prev => !prev)} asButton>
            {isExpanded ? '\u0020Show less' : '\u0020Show more'}
          </Link>
        )}
      </Text>
    </div>
  )
}
