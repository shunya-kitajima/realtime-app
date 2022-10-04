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

  const getProfile = async () => {
    const { data, error, status } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session?.user?.id)
      .single()

    if (error && status === 406) {
      createProfileMutation.mutate({
        id: session?.user?.id,
        user_name: session?.user?.email,
        avatar_url: '',
        favorites: '',
      })
      update({
        ...editedProfile,
        user_name: session?.user?.email,
      })
    }
    if (error && status !== 406) throw new Error(error.message)
    return data
  }

  return useQuery<Profile, Error>({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
    onSuccess: (data) => {
      if (data)
        update({
          user_name: data.user_name,
          avatar_url: data.avatar_url,
          favorites: data.favorites,
        })
    },
  })
}
