import React, { useState, memo } from 'react'
import { useQueryComments } from '../hooks/useQueryComments'
import { useSubscribeComments } from '../hooks/useSubscribeComments'
import { CommentFormMemo } from './CommentForm'
import { CommentItemMemo } from './CommentItem'
import { EditedComment } from '../types'

type Props = {
  postId: string
}

const Comments: React.FC = () => {
  return <div>Comments</div>
}

export const CommentsMemo = memo(Comments)
