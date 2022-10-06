import React, { useState, Suspense, memo } from 'react'
import Image from 'next/image'
import {
  PencilIcon,
  TrashIcon,
  ExclamationCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { ErrorBoundary } from 'react-error-boundary'
import useStore from '../store'
import { useMutatePost } from '../hooks/useMutatePost'
import { useQueryAvatar } from '../hooks/useQueryAvatar'
import { useDownloadUrl } from '../hooks/useDownloadUrl'
import { Spinner } from './Spinner'
import { Post } from '../types'

const PostItem: React.FC<Omit<Post, 'created_at'>> = ({
  id,
  title,
  post_url,
  user_id,
}) => {
  const session = useStore((state) => state.session)
  const update = useStore((state) => state.updateEditedPost)
  const { deletePostMutation } = useMutatePost()
  const { data } = useQueryAvatar(user_id)
  const { fullUrl: avatarUrl, isLoading: isLoadingAvatar } = useDownloadUrl(
    data?.avatar_url,
    'avatars'
  )
  const { fullUrl: postUrl, isLoading: isLoadingPost } = useDownloadUrl(
    post_url,
    'posts'
  )

  return (
    <>
      <li className="w-80">
        <div className="my-3 w-full border border-dashed border-gray-400" />
        <div className="flex items-center justify-between">
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
            <span className="ml-2 font-bold">{title}</span>
          </div>
        </div>
      </li>
    </>
  )
}

export const PostItemMemo = memo(PostItem)
