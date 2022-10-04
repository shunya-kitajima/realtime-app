import { useQuery } from 'react-query'
import { supabase } from '../utiles/supabase'
import useStore from '../store'
import { Profile } from '../types'
import { useMutateProfile } from './useMutateProfile'

export const useQueryProfile = () => {
  const session = useStore((state) => state.session)
  const editedProfile = useStore((state) => state.editedprofile)
  const update = useStore((state) => state.updateEditedProfile)
  const { createProfileMutation } = useMutateProfile()

  const getProfile = async () => {}

  return {}
}
