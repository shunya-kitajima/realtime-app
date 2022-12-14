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
  const session = useStore((state) => state.session)
  const editedProfile = useStore((state) => state.editedprofile)
  const update = useStore((state) => state.updateEditedProfile)
  const { data: profile } = useQueryProfile()
  const { updateProfileMutation } = useMutateProfile()
  const { useMutateUploadAvatarImg } = useUploadAvatarImg()
  const { fullUrl: avatarUrl, isLoading } = useDownloadUrl(
    editedProfile.avatar_url,
    'avatars'
  )

  const updateProfile = () => {
    updateProfileMutation.mutate({
      id: session?.user?.id,
      user_name: editedProfile.user_name,
      avatar_url: editedProfile.avatar_url,
      favorites: editedProfile.favorites,
    })
  }

  return (
    <>
      <p className="mb-4">{profile?.user_name}</p>
      {profile?.created_at && (
        <p className="my-1 text-sm">
          {format(new Date(profile.created_at), 'yyyy-MM-dd HH:mm:ss')}
        </p>
      )}
      {profile?.updated_at && (
        <p className="my-1 text-sm">
          {format(new Date(profile.updated_at), 'yyyy-MM-dd HH:mm:ss')}
        </p>
      )}
      <p className="mt-4">Username</p>
      <input
        className="my-2 mx-2 rounded border border-gray-300 px-2 py-2 text-sm focus:outline-none"
        type="text"
        placeholder="Username"
        value={editedProfile.user_name || ''}
        onChange={(e) =>
          update({ ...editedProfile, user_name: e.target.value })
        }
      />
      <p className="mt-4">Favorites</p>
      <input
        className="my-2 mx-2 rounded border border-gray-300 px-2 py-2 text-sm focus:outline-none"
        type="text"
        value={editedProfile.favorites || ''}
        onChange={(e) =>
          update({ ...editedProfile, favorites: e.target.value })
        }
      />
      <button
        className={`my-5 rounded ${
          updateProfileMutation.isLoading || !editedProfile.user_name
            ? 'bg-gray-400'
            : 'bg-indigo-600'
        } px-3 py-2 text-sm font-medium text-white`}
        onClick={updateProfile}
        disabled={updateProfileMutation.isLoading || !editedProfile.user_name}
      >
        {updateProfileMutation.isLoading ? '...Loading' : 'Update'}
      </button>
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt="Avatar"
          className="rounded-full"
          width={150}
          height={150}
        />
      )}
      {isLoading && <Spinner />}
      <div className="flex justify-center">
        <label htmlFor="avatar">
          <CameraIcon className="my-3 h-7 w-7 cursor-pointer text-gray-500" />
        </label>
        <input
          className="hidden"
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => useMutateUploadAvatarImg.mutate(e)}
        />
      </div>
    </>
  )
}
