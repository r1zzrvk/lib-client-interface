import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { Button, Input, Spacer } from '@ui-kit'
import { useFormikContext } from 'formik'
import { FC, useState } from 'react'
import { ESignUpFormFields, TSignUpValues } from '../../types'

type TSignUpFormProps = {
  onGoBack: () => void
}

export const SignUpForm: FC<TSignUpFormProps> = ({ onGoBack }) => {
  const { isMob } = useBreakpoint()
  const { values, errors, setFieldValue } = useFormikContext<TSignUpValues>()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { email, password, confirmEmail, confirmPassword, displayName } = values

  return (
    <Flexbox align="flex-start" direction="column">
      <Input
        value={displayName}
        name={ESignUpFormFields.displayName}
        type="text"
        placeholder="Name"
        onClear={() => setFieldValue(ESignUpFormFields.displayName, '')}
        onChange={({ target }) => setFieldValue(ESignUpFormFields.displayName, target.value)}
        icon="user_solid"
        isClearable={!!displayName}
        error={errors[ESignUpFormFields.displayName]}
        fluid={isMob}
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Input
        value={email}
        name={ESignUpFormFields.email}
        type="text"
        placeholder="Email"
        onClear={() => setFieldValue(ESignUpFormFields.email, '')}
        onChange={({ target }) => setFieldValue(ESignUpFormFields.email, target.value)}
        icon="at_solid"
        isClearable={!!email}
        error={errors[ESignUpFormFields.email]}
        fluid={isMob}
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Input
        value={confirmEmail}
        name={ESignUpFormFields.confirmEmail}
        type="text"
        placeholder="Confirm email"
        onClear={() => setFieldValue(ESignUpFormFields.confirmEmail, '')}
        onChange={({ target }) => setFieldValue(ESignUpFormFields.confirmEmail, target.value)}
        icon="at_solid"
        isClearable={!!confirmEmail}
        error={errors[ESignUpFormFields.confirmEmail]}
        fluid={isMob}
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Input
        value={password}
        name={ESignUpFormFields.password}
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Password"
        onClear={() => setFieldValue(ESignUpFormFields.password, '')}
        onChange={({ target }) => setFieldValue(ESignUpFormFields.password, target.value)}
        onClick={() => setIsPasswordVisible(prev => !prev)}
        buttonIcon={isPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
        icon="lock_solid"
        isClearable={!!password}
        error={errors[ESignUpFormFields.password]}
        fluid={isMob}
        hasButton
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Input
        value={confirmPassword}
        name={ESignUpFormFields.confirmPassword}
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Confirm password"
        onClear={() => setFieldValue(ESignUpFormFields.confirmPassword, '')}
        onChange={({ target }) => setFieldValue(ESignUpFormFields.confirmPassword, target.value)}
        onClick={() => setIsPasswordVisible(prev => !prev)}
        buttonIcon={isPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
        icon="lock_solid"
        isClearable={!!confirmPassword}
        error={errors[ESignUpFormFields.confirmPassword]}
        fluid={isMob}
        hasButton
        hasIcon
      />
      <Spacer size={theme.space.md} samespace />
      <Button type="submit" isFluid>
        Sign in
      </Button>
      <Button onClick={onGoBack} type="button" isGhost isFluid>
        Go back
      </Button>
    </Flexbox>
  )
}
