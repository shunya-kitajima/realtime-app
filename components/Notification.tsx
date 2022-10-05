import React from 'react'
import { useQueryNotices } from '../hooks/useQueryNotices'
import { useSubscribeNotices } from '../hooks/useSubscribeNotices'
import { NoticeFormMemo } from './NoticeForm'
import { NoticeItemMemo } from './NoticeItem'

export const Notification: React.FC = () => {
  const { data: notices } = useQueryNotices()
  useSubscribeNotices()

  return (
    <>
      <p className="mb-4 text-center">Notification</p>
      <NoticeFormMemo />
      <ul data-testid="ul-notice" className="my-5">
        {notices?.map((notice) => (
          <NoticeItemMemo
            key={notice.id}
            id={notice.id}
            content={notice.content}
            user_id={notice.user_id}
          />
        ))}
      </ul>
    </>
  )
}
