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
  user_id: string
}

export type EditedNotice = {
  id: string
  content: string
}
