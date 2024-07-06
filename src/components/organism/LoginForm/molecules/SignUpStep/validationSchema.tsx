import { object, string } from 'yup'
import {
  CONFIRMATION_REQUIRED,
  DISPLAY_NAME_REQUIRED,
  EMAILS_NO_MATCH,
  EMAIL_ERROR,
  EMAIL_REGEX,
  EMAIL_REQUIRED,
  FIELD_IS_TOO_LONG,
  MAX_SYMBOLS,
  MIN_PASSWORD_SYMBOLS,
  PASSWORDS_NO_MATCH,
  PASSWORD_IS_TOO_SHORT,
  PASSWORD_REQUIRED,
} from '@constants'
import { ESignUpFormFields } from './types'

export const validationSchema = object().shape({
  [ESignUpFormFields.displayName]: string().required(DISPLAY_NAME_REQUIRED).max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
  [ESignUpFormFields.email]: string()
    .required(EMAIL_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR),
  [ESignUpFormFields.confirmEmail]: string()
    .required(CONFIRMATION_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR)
    .test('emails matching', EMAILS_NO_MATCH, function validateConfirmation(value) {
      const { email } = this.parent

      if (typeof email === 'string' && value !== email) {
        return false
      }

      return true
    }),
  [ESignUpFormFields.password]: string()
    .required(PASSWORD_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .min(MIN_PASSWORD_SYMBOLS, PASSWORD_IS_TOO_SHORT),
  [ESignUpFormFields.confirmPassword]: string()
    .required(CONFIRMATION_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .min(MIN_PASSWORD_SYMBOLS, PASSWORD_IS_TOO_SHORT)
    .test('password matching', PASSWORDS_NO_MATCH, function validateConfirmation(value) {
      const { password } = this.parent

      if (typeof password === 'string' && value !== password) {
        return false
      }

      return true
    }),
})
