import { useRouter } from 'next/router'
import { Formik } from 'formik'
import { FC } from 'react'
import { Text } from '@ui-kit'
import { GUEST_AVATAR, theme } from '@constants'
import { setGuestUser } from '@api'
import { loginFormValues } from './initialValues'
import { Styled } from './styled'
import { GuestForm } from './molecules'
import { TLoginFormValues } from './types'
import { StepWrapper } from '../../atoms'

type TGuestStepProps = {
  prevStep: () => void
}

export const GuestStep: FC<TGuestStepProps> = ({ prevStep }) => {
  const router = useRouter()

  const handleSubmit = async ({ firstName, lastName }: TLoginFormValues) => {
    await setGuestUser({
      firstName,
      lastName,
      avatar: GUEST_AVATAR,
      isGuest: true,
    })

    router.back()
  }

  return (
    <StepWrapper>
      <Formik initialValues={loginFormValues} onSubmit={values => handleSubmit(values)}>
        <Styled.CustomForm>
          <Text
            color={theme.colors.grey}
            fontSize={theme.fonts.size.header.lg}
            fontWeight={theme.fonts.weight.medium}
            fontHeight={theme.fonts.height.header.lg}
            fontSizeMob={theme.fonts.size.header.md}
            fontHeightMob={theme.fonts.height.header.md}
            fontWeightMob={theme.fonts.weight.medium}
          >
            Sign up
          </Text>
          <GuestForm prevStep={prevStep} />
        </Styled.CustomForm>
      </Formik>
    </StepWrapper>
  )
}
