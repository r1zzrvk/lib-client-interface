import { useFormikContext } from 'formik'
import { FC } from 'react'
import { Button, Input, Spacer, SwitchToggle } from '@ui-kit'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { EListFormFields, TListFormValues } from '../../types'
import { Styled } from './styled'

type TListFormProps = {
  listId?: string
}

export const ListForm: FC<TListFormProps> = ({ listId }) => {
  const { values, setFieldValue, errors, isSubmitting } = useFormikContext<TListFormValues>()
  const { isMob, isTablet } = useBreakpoint()
  const { title, description, isPinned } = values

  return (
    <Styled.Wrapper>
      <Spacer sizeMob={0} size={theme.space.xs2} />
      <Input
        name={EListFormFields.title}
        placeholder="Title"
        type="text"
        onChange={e => setFieldValue(EListFormFields.title, e.target.value)}
        onClear={() => setFieldValue(EListFormFields.title, '')}
        value={title}
        error={errors[EListFormFields.title]}
        isClearable
        fluid
      />
      <Spacer sizeMob={theme.space.sm} />
      <Input
        name={EListFormFields.description}
        placeholder="Description"
        type="text"
        onChange={e => setFieldValue(EListFormFields.description, e.target.value)}
        onClear={() => setFieldValue(EListFormFields.description, '')}
        value={description}
        error={errors[EListFormFields.description]}
        isClearable
        fluid
      />
      <Spacer sizeMob={theme.space.sm} />
      <SwitchToggle
        checked={isPinned}
        onChange={() => setFieldValue(EListFormFields.isPinned, !isPinned)}
        size={isMob || isTablet ? 'md' : 'lg'}
        label="Pinned"
      />
      <Spacer sizeMob={theme.space.xl} />
      <Button type="submit" isFluid disabled={isSubmitting}>
        {listId ? 'Update' : 'Create'}
      </Button>
    </Styled.Wrapper>
  )
}
