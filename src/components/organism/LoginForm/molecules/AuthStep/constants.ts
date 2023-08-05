import { TIcon } from '@types'

type TNoticeMessage = {
  heading: string
  icon: TIcon
  message: string
}
// todo: icon!
export const NoticeMessage: TNoticeMessage = {
  heading: 'Notice',
  icon: 'trash_regular',
  message:
    'Pressing "Continue as guest" will create a guest account or sign in your guest account if you already have one. Guest account will only be available on this device.\n\nIf you want to use "My Library" on all of your devices, press "Sign in with Google".',
}
