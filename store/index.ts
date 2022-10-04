import create from 'zustand'
import { Session } from '@supabase/supabase-js'
import { EditedProfile } from '../types'

type State = {
  session: Session | null
  setSesstion: (payload: Session | null) => void
  editedprofile: EditedProfile
  updateEditedProfile: (payload: EditedProfile) => void
  resetEditedProfile: () => void
}

const useStore = create<State>((set) => ({
  session: null,
  setSesstion: (payload) => set({ session: payload }),
  editedprofile: { username: '', avatar_url: '', favorites: '' },
  updateEditedProfile: (payload) =>
    set({
      editedprofile: {
        username: payload.username,
        avatar_url: payload.avatar_url,
        favorites: payload.favorites,
      },
    }),
  resetEditedProfile: () =>
    set({ editedprofile: { username: '', avatar_url: '', favorites: '' } }),
}))

export default useStore
