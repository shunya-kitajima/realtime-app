import React, { Dispatch, SetStateAction, memo } from 'react'
import Image from 'next/image'
import {
  PencilIcon,
  TrashIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import useStore from '../store'
import { useQueryAvatar } from '../hooks/useQueryAvatar'
import { useMutateComment } from '../hooks/useMutateComment'
import { useDownloadUrl } from '../hooks/useDownloadUrl'
import { EditedComment } from '../types'

type Props = {
  id: string
  comment: string
  user_id: string | undefined
  setEditedComment: Dispatch<SetStateAction<EditedComment>>
}

const CommentItem: React.FC<Props> = ({
  id,
  comment,
  user_id,
  setEditedComment,
}) => {
  const session = useStore((state) => state.session)
  const { deleteCommentMutation } = useMutateComment()

  return <div>CommentItem</div>
}

export const CommentItemMemo = memo(CommentItem)
