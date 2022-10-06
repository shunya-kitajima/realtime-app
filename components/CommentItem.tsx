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

const CommentItem: React.FC = () => {
  return <div>CommentItem</div>
}

export const CommentItemMemo = memo(CommentItem)
