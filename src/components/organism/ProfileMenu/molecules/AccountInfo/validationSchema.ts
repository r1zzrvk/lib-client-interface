import { object, string } from 'yup'

import {
  CONFIRMATION_REQUIRED,
  EMAILS_NO_MATCH,
  EMAIL_ERROR,
  EMAIL_REGEX,
  EMAIL_REQUIRED,
  FIELD_IS_TOO_LONG,
  MAX_SYMBOLS,
  MIN_PASSWORD_SYMBOLS,
  NEW_EMAIL_IS_CURRENT_EMAIL,
  NEW_PASSWORD_IS_CURRENT_PASSWORD,
  PASSWORDS_NO_MATCH,
  PASSWORD_IS_TOO_SHORT,
  PASSWORD_REQUIRED,
} from '@constants'

import { EAccountInfoFormFields } from './types'

const emailValidationSchema = object().shape({
  [EAccountInfoFormFields.newEmail]: string()
    .required(EMAIL_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR)
    .test('emails matching', NEW_EMAIL_IS_CURRENT_EMAIL, function validateNewEmail(value) {
      const { email } = this.parent

      if (typeof email === 'string' && value === email) {
        return false
      }

      return true
    }),
  [EAccountInfoFormFields.confirmNewEmail]: string()
    .required(CONFIRMATION_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .matches(EMAIL_REGEX, EMAIL_ERROR)
    .test('emails matching', EMAILS_NO_MATCH, function validateConfirmation(value) {
      const { newEmail } = this.parent

      if (typeof newEmail === 'string' && value !== newEmail) {
        return false
      }

      return true
    }),
})

const passwordValidationSchema = object().shape({
  [EAccountInfoFormFields.oldPassword]: string().required(PASSWORD_REQUIRED),
  [EAccountInfoFormFields.newPassword]: string()
    .required(PASSWORD_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .min(MIN_PASSWORD_SYMBOLS, PASSWORD_IS_TOO_SHORT)
    .test('passwords matching', NEW_PASSWORD_IS_CURRENT_PASSWORD, function validateNewPassword(value) {
      const { oldPassword } = this.parent

      if (typeof oldPassword === 'string' && value === oldPassword) {
        return false
      }

      return true
    }),
  [EAccountInfoFormFields.confirmNewPassword]: string()
    .required(CONFIRMATION_REQUIRED)
    .max(MAX_SYMBOLS, FIELD_IS_TOO_LONG)
    .min(MIN_PASSWORD_SYMBOLS, PASSWORD_IS_TOO_SHORT)
    .test('password matching', PASSWORDS_NO_MATCH, function validateConfirmation(value) {
      const { newPassword } = this.parent

      if (typeof newPassword === 'string' && value !== newPassword) {
        return false
      }

      return true
    }),
})

export function getValidationSchema(editingFields: { email: boolean; password: boolean }) {
  return editingFields[EAccountInfoFormFields.email] ? emailValidationSchema : passwordValidationSchema
}
