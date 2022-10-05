import create from 'zustand'
import { Session } from '@supabase/supabase-js'
import { EditedProfile, EditedNotice } from '../types'

type State = {
  session: Session | null
  setSesstion: (payload: Session | null) => void
  editedprofile: EditedProfile
  updateEditedProfile: (payload: EditedProfile) => void
  resetEditedProfile: () => void
  editednotice: EditedNotice
  updateEditedNotice: (payload: EditedNotice) => void
  resetEditedNotice: () => void
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
}))

export default useStore
