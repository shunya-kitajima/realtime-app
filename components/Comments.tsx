import React, { useState, memo } from 'react'
import { useQueryComments } from '../hooks/useQueryComments'
import { useSubscribeComments } from '../hooks/useSubscribeComments'
import { CommentFormMemo } from './CommentForm'
import { CommentItemMemo } from './CommentItem'
import { EditedComment } from '../types'

type Props = {
  postId: string
}

const Comments: React.FC<Props> = ({ postId }) => {
  const [editedComment, setEditedComment] = useState<EditedComment>({
    id: '',
    comment: '',
  })
  const { data: comments } = useQueryComments(postId)
  useSubscribeComments(postId)

  return (
    <div className="w-60">
      <CommentFormMemo
        postId={postId}
        editedComment={editedComment}
        setEditedComment={setEditedComment}
      />
    </div>
  )
}

export const CommentsMemo = memo(Comments)
