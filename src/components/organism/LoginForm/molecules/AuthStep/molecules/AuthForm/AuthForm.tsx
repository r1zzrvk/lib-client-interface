import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { Button, Input, Spacer, Text } from '@ui-kit'
import { useFormikContext } from 'formik'
import { FC, useState } from 'react'
import { EAuthFormFields, TAuthFormValues } from '../../types'

type TAuthFormProps = {
  onSignUp: () => void
  onSignWithGoogle: () => void
  onForgotPassword: () => void
}

export const AuthForm: FC<TAuthFormProps> = ({ onSignUp, onSignWithGoogle, onForgotPassword }) => {
  const { isMob } = useBreakpoint()
  const { values, errors, setFieldValue } = useFormikContext<TAuthFormValues>()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { email, password } = values

  return (
    <>
      <Flexbox direction="column">
        <Input
          value={email}
          name={EAuthFormFields.email}
          type="text"
          placeholder="Email"
          onClear={() => setFieldValue(EAuthFormFields.email, '')}
          onChange={({ target }) => setFieldValue(EAuthFormFields.email, target.value)}
          icon="at_solid"
          isClearable={!!email}
          error={errors[EAuthFormFields.email]}
          fluid={isMob}
          hasIcon
        />
        <Spacer size={theme.space.sm} samespace />
        <Input
          value={password}
          name={EAuthFormFields.password}
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Password"
          onClear={() => setFieldValue(EAuthFormFields.password, '')}
          onChange={({ target }) => setFieldValue(EAuthFormFields.password, target.value)}
          onClick={() => setIsPasswordVisible(prev => !prev)}
          buttonIcon={isPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
          icon="lock_solid"
          isClearable={!!password}
          error={errors[EAuthFormFields.password]}
          fluid={isMob}
          hasButton
          hasIcon
        />
        <Spacer size={theme.space.xs3} samespace />
        <Flexbox justify="end">
          <Text
            color={theme.colors.blue}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
            onClick={onForgotPassword}
            asLink
          >
            Forgot password?
          </Text>
        </Flexbox>
        <Spacer size={theme.space.md} samespace />
        <Button type="submit" isFluid>
          Sign in
        </Button>
        <Spacer size={theme.space.xl} sizeMob={theme.space.md} />
      </Flexbox>
      <Text
        color={theme.colors.grey}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
      >
        Don&apos;t have an account?
      </Text>
      <Flexbox justify="start" gap={theme.space.xs3}>
        <Text
          color={theme.colors.blue}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
          onClick={onSignWithGoogle}
          asLink
        >
          Sign in with Google
        </Text>
        <Text
          color={theme.colors.grey}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
        >
          or
        </Text>
        <Text
          color={theme.colors.blue}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
          onClick={onSignUp}
          asLink
        >
          Sign up
        </Text>
      </Flexbox>
    </>
  )
}
