import { useState } from 'react'

import { DialogWindow, TDialogWindowProps } from '@ui-kit'

export const useDialog = (isDefaultOpened?: boolean) => {
  const [opened, setOpened] = useState(Boolean(isDefaultOpened))

  const renderComponent = (props: Omit<TDialogWindowProps, 'isOpened' | 'onClose'>) => (
    <DialogWindow {...props} isOpened={opened} onClose={() => setOpened(false)} />
  )

  const show = () => setOpened(true)
  const close = () => setOpened(false)

  return {
    isOpened: opened,
    dialog: renderComponent,
    show,
    close,
  }
}
