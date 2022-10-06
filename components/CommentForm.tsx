import React, { FormEvent, Dispatch, SetStateAction, memo } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import useStore from '../store'
import { useMutateComment } from '../hooks/useMutateComment'
import { EditedComment } from '../types'

const CommentForm: React.FC = () => {
  return <div>CommentForm</div>
}

export const CommentFormMemo = memo(CommentForm)
