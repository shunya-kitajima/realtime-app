import React from 'react'
import { useQueryPosts } from '../hooks/useQueryPosts'
import { useSubscribePosts } from '../hooks/useSubscribePosts'
import { PostFormMemo } from './PostForm'
import { PostItemMemo } from './PostItem'

export const Feed: React.FC = () => {
  const { data: posts } = useQueryPosts()
  useSubscribePosts()

  return (
    <>
      <p className="mb-4 text-center">Feed</p>
      <PostFormMemo />
      <ul data-testid="ul-post" className="my-5">
        {posts?.map((post) => (
          <PostItemMemo
            key={post.id}
            id={post.id}
            title={post.title}
            post_url={post.post_url}
            user_id={post.user_id}
          />
        ))}
      </ul>
    </>
  )
}
