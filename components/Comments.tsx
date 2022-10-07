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
      <ul data-testid="ul-comment" className="my-5">
        {comments?.map((comment) => (
          <CommentItemMemo
            key={comment.id}
            id={comment.id}
            comment={comment.comment}
            user_id={comment.user_id}
            setEditedComment={setEditedComment}
          />
        ))}
      </ul>
    </div>
  )
}

export const CommentsMemo = memo(Comments)
