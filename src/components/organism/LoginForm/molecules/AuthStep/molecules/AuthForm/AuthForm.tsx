import { useFormikContext } from 'formik'
import { FC, useState } from 'react'

import { Flexbox } from '@components/atoms'
import { Button, Input, Link, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

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
          autoComplete="off"
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
          autoComplete="off"
          hasButton
          hasIcon
        />
        <Spacer size={theme.space.xs3} samespace />
        <Flexbox justify="end">
          <Link color={theme.colors.blue} hoverColor={theme.colors.grey_light} onClick={onForgotPassword} asButton>
            Forgot password?
          </Link>
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
        <Link color={theme.colors.blue} hoverColor={theme.colors.grey_light} onClick={onSignWithGoogle} asButton>
          Sign in with Google
        </Link>
        <Text
          color={theme.colors.grey}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
        >
          or
        </Text>
        <Link color={theme.colors.blue} hoverColor={theme.colors.grey_light} onClick={onSignUp} asButton>
          Sign up
        </Link>
      </Flexbox>
    </>
  )
}
