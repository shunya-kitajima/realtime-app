import React, { FormEvent, memo } from 'react'
import useStore from '../store'
import { useMutateNotice } from '../hooks/useMutateNotice'

export const NoticeForm: React.FC = () => {
  const session = useStore((state) => state.session)
  const editedNotice = useStore((state) => state.editednotice)
  const update = useStore((state) => state.updateEditedNotice)
  const { createNoticeMutation, updateNoticeMutation } = useMutateNotice()

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedNotice.id === '') {
      createNoticeMutation.mutate({
        content: editedNotice.content,
        user_id: session?.user?.id,
      })
    } else {
      updateNoticeMutation.mutate(editedNotice)
    }
  }

  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="New Notice ?"
        value={editedNotice.content}
        onChange={(e) => update({ ...editedNotice, content: e.target.value })}
      />
      <div className="my-3 flex justify-center">
        <button
          type="submit"
          data-testid="btn-notice"
          className={`rounded ${
            editedNotice.content ? 'bg-indigo-600' : 'bg-gray-300'
          } px-3 py-2 text-sm text-white`}
        >
          {editedNotice.id ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
}
