import { FC } from 'react'

import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

import { Modal } from '../Modal'
import { Styled } from './styled'
import { Text } from '../Text'
import { Spacer } from '../Spacer'
import { Button } from '../Button'

export type TDialogWindowProps = {
  isOpened: boolean
  title: string
  subtitle: string
  submitButtonText?: string
  cancelButtonText?: string
  onClose: () => void
  onSubmit?: () => void
  onCancel?: () => void
}

export const DialogWindow: FC<TDialogWindowProps> = ({
  isOpened,
  onClose,
  title,
  subtitle,
  onSubmit,
  onCancel,
  cancelButtonText,
  submitButtonText,
}) => {
  const { isMob } = useBreakpoint()

  return (
    <Modal isOpen={isOpened} onClose={onClose} size="sm" title={title}>
      <Styled.Dialog>
        <Text
          color={theme.colors.main}
          fontSize={theme.fonts.size.header.sm}
          fontWeight={theme.fonts.weight.regular}
          fontHeight={theme.fonts.height.header.sm}
          fontSizeMob={theme.fonts.size.header.xs}
          fontHeightMob={theme.fonts.height.header.xs}
          fontWeightMob={theme.fonts.weight.regular}
        >
          {subtitle}
        </Text>
        <Spacer size={theme.space.md} sizeMob={theme.space.md} />
        <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
          {submitButtonText && (
            <Button type="button" onClick={onSubmit} isFluid={isMob} size="lg">
              {submitButtonText}
            </Button>
          )}
          {cancelButtonText && (
            <Button type="button" onClick={onCancel} isFluid={isMob} size="sm" isGhost>
              {cancelButtonText}
            </Button>
          )}
        </Flexbox>
      </Styled.Dialog>
    </Modal>
  )
}
