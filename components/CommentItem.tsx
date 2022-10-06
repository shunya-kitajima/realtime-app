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
  const { data } = useQueryAvatar(user_id)
  const { fullUrl: avatarUrl } = useDownloadUrl(data?.avatar_url, 'avatars')

  return (
    <li className="my-3 flex items-center justify-between">
      <div className="flex">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="avatar"
            className="rounded-full"
            width={25}
            height={25}
          />
        ) : (
          <UserCircleIcon className="inline-block h-8 w-8 cursor-pointer text-gray-500" />
        )}
        <span className="mx-1 text-sm">{comment}</span>
      </div>
      {session?.user?.id === user_id && (
        <div className="flex">
          <PencilIcon
            data-testid="pencil-comment"
            className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
            onClick={() => setEditedComment({ id: id, comment: comment })}
          />
          <TrashIcon
            data-testid="trash-comment"
            className="h-5 w-5 cursor-pointer text-blue-500"
            onClick={() => deleteCommentMutation.mutate(id)}
          />
        </div>
      )}
    </li>
  )
}

export const CommentItemMemo = memo(CommentItem)
