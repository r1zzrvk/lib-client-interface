import { Button, Input, Spacer, Text } from '@components'
import { theme } from '@constants'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { FC } from 'react'
import { LoginForm } from './initialValues'
import { Styled } from './styled'

type TGuestStepProps = {
  prevStep: () => void
}

export const GuestStep: FC<TGuestStepProps> = ({ prevStep }) => {
  const router = useRouter()

  const formik = useFormik({
    initialValues: LoginForm,
    onSubmit: values => {
      console.log(values)
      router.push('/')
    },
  })

  return (
    <Styled.Form onSubmit={formik.handleSubmit}>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
      >
        Sign up
      </Text>
      <Spacer size={theme.space.xl2} />
      <Input placeholder="First name" type="text" name="firstName" onChange={formik.handleChange} />
      <Spacer size={theme.space.xs} />
      <Input placeholder="Last name" type="text" name="lastName" onChange={formik.handleChange} />
      <Spacer size={theme.space.md} />
      <Button size="md" type="submit">
        Sign in
      </Button>
      <Button size="md" onClick={prevStep} isGhost>
        Return to log in
      </Button>
    </Styled.Form>
  )
}
