import React, { FormEvent, memo } from 'react'
import useStore from '../store'
import { useMutateNotice } from '../hooks/useMutateNotice'

export const NoticeForm: React.FC = () => {
  const session = useStore((state) => state.session)
  const editedNotice = useStore((state) => state.editednotice)
  const update = useStore((state) => state.updateEditedNotice)
  const { createNoticeMutation, updateNoticeMutation } = useMutateNotice()

  return <div>NoticeForm</div>
}
