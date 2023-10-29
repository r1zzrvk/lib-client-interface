import { TIcon } from '@types'

type TNoticeMessage = {
  heading: string
  icon: TIcon
  message: string
}

export const NoticeMessage: TNoticeMessage = {
  heading: 'Notice',
  icon: 'info_solid',
  message:
    'We apologize for the inconvenience as our registration system is currently undergoing maintenance. We are working hard to get it up and running as soon as possible.\n\n Try "Sign with Google" if you have an account.',
}
