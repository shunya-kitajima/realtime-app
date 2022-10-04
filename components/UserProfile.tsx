import React from 'react'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'
import useStore from '../store'
import { useQueryProfile } from '../hooks/useQueryProfile'
import { useMutateProfile } from '../hooks/useMutateProfile'
import { useDownloadUrl } from '../hooks/useDownloadUrl'
import { useUploadAvatarImg } from '../hooks/useUploadAvatarImg'
import { Spinner } from './Spinner'

export const UserProfile: React.FC = () => {
  return <div>UserProfile</div>
}
