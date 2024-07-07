import { TFirebaseUser } from '@types'

import { accountInfoFormInitialValues } from './initialValues'
import { TAccountInfoFormValues } from './types'

export const getAccountInfoInitialValues = (user: TFirebaseUser | null): TAccountInfoFormValues => {
  if (user) {
    return {
      ...accountInfoFormInitialValues,
      email: user.email || '',
    }
  }

  return accountInfoFormInitialValues
}

export const getEmailConfirmationSubtitle = (email: string) =>
  `We have sent a link to the specified email address: \n\n ${email}.\n\nPlease follow the link to verify your email.`
