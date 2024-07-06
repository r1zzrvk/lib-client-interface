import { object, string } from 'yup'
import { EMAIL_ERROR, EMAIL_REGEX, EMAIL_REQUIRED, FIELD_IS_TOO_LONG, MAX_SYMBOLS, PASSWORD_REQUIRED } from '@constants'
import { EAuthFormFields } from './types'

export const validationSchema = object().shape({
  [EAuthFormFields.email]: string()
    .required(EMAIL_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR),
  [EAuthFormFields.password]: string().required(PASSWORD_REQUIRED),
})
