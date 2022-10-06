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
      </div>
    </li>
  )
}

export const CommentItemMemo = memo(CommentItem)
