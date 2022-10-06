import React, { FormEvent, Dispatch, SetStateAction, memo } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import useStore from '../store'
import { useMutateComment } from '../hooks/useMutateComment'
import { EditedComment } from '../types'

type Props = {
  postId: string
  editedComment: EditedComment
  setEditedComment: Dispatch<SetStateAction<EditedComment>>
}

const CommentForm: React.FC<Props> = ({
  postId,
  editedComment,
  setEditedComment,
}) => {
  const session = useStore((state) => state.session)
  const { createCommentMutation, updateCommentMutation } = useMutateComment()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedComment.id === '') {
      await createCommentMutation.mutateAsync({
        user_id: session?.user?.id,
        post_id: postId,
        comment: editedComment.comment,
      })
      setEditedComment({ id: '', comment: '' })
    } else {
      await updateCommentMutation.mutateAsync(editedComment)
      setEditedComment({ id: '', comment: '' })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          placeholder="New Comment ?"
          value={editedComment.comment}
          onChange={(e) =>
            setEditedComment({ ...editedComment, comment: e.target.value })
          }
        />
        <button
          data-testid="btn-comment"
          type="submit"
          disabled={!editedComment.comment}
        >
          <EnvelopeIcon
            className={`ml-3 h-6 w-6 cursor-pointer ${
              editedComment.comment ? 'text-blue-500' : 'text-gray-500'
            }`}
          />
        </button>
      </div>
    </form>
  )
}

export const CommentFormMemo = memo(CommentForm)
