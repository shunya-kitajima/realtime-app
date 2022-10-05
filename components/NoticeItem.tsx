import React, { memo } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import useStore from '../store'
import { useMutateNotice } from '../hooks/useMutateNotice'
import { Notice } from '../types'

const NoticeItem: React.FC<Omit<Notice, 'created_at'>> = ({
  id,
  content,
  user_id,
}) => {
  const session = useStore((state) => state.session)
  const update = useStore((state) => state.updateEditedNotice)
  const { deleteNoticeMutation } = useMutateNotice()

  return (
    <li className="my-3">
      <span>{content}</span>
      {session?.user?.id === user_id && (
        <div className="float-right ml-20 flex">
          <PencilIcon
            className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
            onClick={() => {
              update({ id: id, content: content })
            }}
          />
          <TrashIcon
            className="h-5 w-5 cursor-pointer text-blue-500"
            onClick={() => {
              deleteNoticeMutation.mutate(id)
            }}
          />
        </div>
      )}
    </li>
  )
}

export const NoticeItemMemo = memo(NoticeItem)
