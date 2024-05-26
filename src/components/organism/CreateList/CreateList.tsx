import { Form, Formik, FormikState } from 'formik'
import { FC } from 'react'
import { TFirebaseUser, TList } from '@types'
import { updateDocList } from '@api'
import { generateId } from '@utils'
import { Modal } from '@ui-kit'
import { listFormInitialValues } from './initialValues'
import { TListFormValues } from './types'
import { ListForm } from './molecules'
import { validationSchema } from './validationSchema'

type TCreateListProps = {
  uid: TFirebaseUser['uid']
  isModalOpened: boolean
  onModalClose: (value: boolean) => void
  updateLists: () => void
  list?: TList | null
}

export const CreateList: FC<TCreateListProps> = ({ uid, list, isModalOpened, onModalClose, updateLists }) => {
  const handleSubmit = ({
    values,
    resetForm,
  }: {
    values: TListFormValues
    resetForm: (nextState?: Partial<FormikState<TListFormValues>> | undefined) => void
  }) => {
    const { description, isPinned, title } = values
    const customListId = list?.id || generateId()

    updateDocList({
      uid,
      list: {
        id: customListId,
        title,
        description,
        isPinned,
        listItems: list?.listItems || [],
        lastUpdate: new Date().toISOString(),
      },
      isBookmarks: false,
    })
      .then(() => updateLists())
      .finally(() => {
        resetForm()
        onModalClose(false)
      })
  }

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={
          list
            ? {
                title: list.title,
                description: list.description,
                isPinned: list.isPinned,
              }
            : listFormInitialValues
        }
        onSubmit={(values, { resetForm }) => handleSubmit({ values, resetForm })}
        enableReinitialize
      >
        <Form>
          <Modal
            isOpen={isModalOpened}
            onClose={() => onModalClose(false)}
            title={list?.id ? `Editing «${list.title}»` : 'Creating new list'}
          >
            <ListForm listId={list?.id} />
          </Modal>
        </Form>
      </Formik>
    </div>
  )
}
