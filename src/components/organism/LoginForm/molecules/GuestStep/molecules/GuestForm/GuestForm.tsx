import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { Button, Input, Spacer } from '@ui-kit'
import { useFormikContext } from 'formik'
import { FC } from 'react'
import { TLoginFormValues } from '../../types'

type TGuestFormProps = {
  prevStep: () => void
}

export const GuestForm: FC<TGuestFormProps> = ({ prevStep }) => {
  const { isMob } = useBreakpoint()
  const { values, setFieldValue } = useFormikContext<TLoginFormValues>()
  const { firstName, lastName } = values

  return (
    <>
      <Spacer size={theme.space.xl2} sizeMob={theme.space.xl} />
      <Input
        placeholder="First name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={e => setFieldValue('firstName', e.target.value)}
        fluid={isMob}
      />
      <Spacer size={theme.space.xs} samespace />
      <Input
        placeholder="Last name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={e => setFieldValue('lastName', e.target.value)}
        fluid={isMob}
      />
      <Spacer size={theme.space.md} sizeMob={theme.space.xs} />
      <Button size="md" type="submit" isFluid={isMob}>
        Sign in
      </Button>
      <Button size="md" onClick={prevStep} isGhost>
        Return to log in
      </Button>
    </>
  )
}
