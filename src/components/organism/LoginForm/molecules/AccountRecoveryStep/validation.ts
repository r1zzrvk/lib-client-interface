import { object, string } from 'yup'

import { EMAIL_ERROR, EMAIL_REGEX, EMAIL_REQUIRED, FIELD_IS_TOO_LONG, MAX_SYMBOLS } from '@constants'

import { EAccountRecoveryFormFields } from './types'

export const validationSchema = object().shape({
  [EAccountRecoveryFormFields.email]: string()
    .required(EMAIL_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR),
})
