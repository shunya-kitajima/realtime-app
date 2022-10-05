export type Profile = {
  id: string | undefined
  created_at: string
  updated_at: string
  user_name: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}

export type EditedProfile = {
  user_name: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}

export type Notice = {
  id: string
  created_at: string
  content: string
  user_id: string | undefined
}

export type EditedNotice = {
  id: string
  content: string
}

export type Post = {
  id: string
  created_at: string
  title: string
  post_url: string
  user_id: string | undefined
}

export type EditedPost = {
  id: string
  title: string
  post_url: string
}

export type Comment = {
  id: string
  created_at: string
  user_id: string | undefined
  post_id: string
  comment: string
}

export type EditedComment = {
  id: string
  comment: string
}
