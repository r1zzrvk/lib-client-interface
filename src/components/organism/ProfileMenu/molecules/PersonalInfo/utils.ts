import { EDateFormats, TFirebaseUser } from '@types'
import { formatDate } from '@utils'

import { personalInfoFormInitialValues } from './initialValues'
import { TPersonalInfoFormValues } from './types'

export const getPersonalInitialValues = (user: TFirebaseUser | null): TPersonalInfoFormValues => {
  if (user) {
    return {
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      creationTime: user.metadata.creationTime ? formatDate(user.metadata.creationTime, EDateFormats.MMMM_DD_YYYY) : '',
      lastSignInTime: user.metadata.lastSignInTime
        ? formatDate(user.metadata.lastSignInTime, EDateFormats.MMMM_DD_YYYY_HH_mm)
        : '',
    }
  }

  return personalInfoFormInitialValues
}
