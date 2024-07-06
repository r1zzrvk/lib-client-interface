import { Flexbox } from '@components/atoms'
import { Button } from '@ui-kit'
import { FC } from 'react'

type TButtonBlockProps = {
  onCancel: () => void
  onSubmit: () => void
}

export const ButtonBlock: FC<TButtonBlockProps> = ({ onCancel, onSubmit }) => (
  <Flexbox justify="end">
    <Button size="md" type="button" onClick={onCancel} isGhost>
      Cancel
    </Button>
    <Button size="lg" type="submit" onClick={onSubmit}>
      Update
    </Button>
  </Flexbox>
)
