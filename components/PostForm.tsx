import React, { FormEvent, memo } from 'react'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/solid'
import useStore from '../store'
import { useMutatePost } from '../hooks/useMutatePost'
import { useDownloadUrl } from '../hooks/useDownloadUrl'
import { useUploadPostImg } from '../hooks/useUploadPostImg'
import { Spinner } from './Spinner'

export const PostForm: React.FC = () => {
  const session = useStore((state) => state.session)
  const editedPost = useStore((state) => state.editedpost)
  const update = useStore((state) => state.updateEditedPost)
  const { createPostMutation, updatePostMutation } = useMutatePost()
  const { useMutateUploadPostImg } = useUploadPostImg()
  const { fullUrl: postUrl, setFullUrl } = useDownloadUrl(
    editedPost.post_url,
    'posts'
  )

  const SubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedPost.id === '') {
      await createPostMutation.mutateAsync({
        title: editedPost.title,
        post_url: editedPost.post_url,
        user_id: session?.user?.id,
      })
      setFullUrl('')
    } else {
      await updatePostMutation.mutateAsync(editedPost)
      setFullUrl('')
    }
  }

  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        className="my-1 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        placeholder="New Post ?"
        value={editedPost.title}
        onChange={(e) => update({ ...editedPost, title: e.target.value })}
      />
      <div className="my-3 flex justify-center">
        <button
          type="submit"
          data-testid="btn-post"
          className={`rounded ${
            useMutateUploadPostImg.isLoading || !editedPost.title
              ? 'bg-gray-300'
              : 'bg-indigo-600'
          } px-3 py-2 text-sm text-white`}
          disabled={useMutateUploadPostImg.isLoading || !editedPost.title}
        >
          {editedPost.id ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
}
