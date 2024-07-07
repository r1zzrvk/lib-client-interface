import { object, string } from 'yup'

import { AVATAR_URL_REQUIRED, DISPLAY_NAME_REQUIRED, FIELD_IS_TOO_LONG, MAX_SYMBOLS } from '@constants'

import { EPersonalInfoFormFields } from './types'

export const validationSchema = object().shape({
  [EPersonalInfoFormFields.displayName]: string().required(DISPLAY_NAME_REQUIRED).max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
  [EPersonalInfoFormFields.photoURL]: string().required(AVATAR_URL_REQUIRED),
})
