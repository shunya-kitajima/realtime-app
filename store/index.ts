import create from 'zustand'
import { Session } from '@supabase/supabase-js'
import {
  EditedProfile,
  EditedNotice,
  EditedPost,
  EditedComment,
} from '../types'

type State = {
  session: Session | null
  setSesstion: (payload: Session | null) => void
  editedprofile: EditedProfile
  updateEditedProfile: (payload: EditedProfile) => void
  resetEditedProfile: () => void
  editednotice: EditedNotice
  updateEditedNotice: (payload: EditedNotice) => void
  resetEditedNotice: () => void
  editedpost: EditedPost
  updateEditedPost: (payload: EditedPost) => void
  resetEditedPost: () => void
  editedcomment: EditedComment
  updateEditedComment: (payload: EditedComment) => void
  resetEditedComment: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSesstion: (payload) => set({ session: payload }),
  editedprofile: { user_name: '', avatar_url: '', favorites: '' },
  updateEditedProfile: (payload) =>
    set({
      editedprofile: {
        user_name: payload.user_name,
        avatar_url: payload.avatar_url,
        favorites: payload.favorites,
      },
    }),
  resetEditedProfile: () =>
    set({ editedprofile: { user_name: '', avatar_url: '', favorites: '' } }),
  editednotice: { id: '', content: '' },
  updateEditedNotice: (payload) =>
    set({
      editednotice: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedNotice: () => set({ editednotice: { id: '', content: '' } }),
  editedpost: { id: '', title: '', post_url: '' },
  updateEditedPost: (payload) =>
    set({
      editedpost: {
        id: payload.id,
        title: payload.title,
        post_url: payload.post_url,
      },
    }),
  resetEditedPost: () =>
    set({ editedpost: { id: '', title: '', post_url: '' } }),
  editedcomment: { id: '', comment: '' },
  updateEditedComment: (payload) =>
    set({ editedcomment: { id: payload.id, comment: payload.comment } }),
  resetEditedComment: () => set({ editedcomment: { id: '', comment: '' } }),
}))

export default useStore
