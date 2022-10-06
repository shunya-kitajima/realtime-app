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

  return <div>CommentForm</div>
}

export const CommentFormMemo = memo(CommentForm)
