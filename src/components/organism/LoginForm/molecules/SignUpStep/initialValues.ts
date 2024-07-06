import { ESignUpFormFields, TSignUpValues } from './types'

export const initialValues: TSignUpValues = {
  [ESignUpFormFields.displayName]: '',
  [ESignUpFormFields.email]: '',
  [ESignUpFormFields.password]: '',
  [ESignUpFormFields.confirmEmail]: '',
  [ESignUpFormFields.confirmPassword]: '',
}
