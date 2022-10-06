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

const CommentForm: React.FC<Props> = () => {
  return <div>CommentForm</div>
}

export const CommentFormMemo = memo(CommentForm)
