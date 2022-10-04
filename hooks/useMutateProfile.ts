import { useQueryClient, useMutation } from 'react-query'
import { supabase } from '../utiles/supabase'
import { Profile } from '../types'

export const useMutateProfile = () => {
  const queryClient = useQueryClient()

  const createProfileMutation = useMutation(
    async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase.from('profiles').insert(profile)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData<Profile[]>(['profile'], res[0])
      },
      onError: (err: any) => {
        alert(err.message)
      },
    }
  )

  const updateProfileMutation = useMutation(
    async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('id', profile.id)
      if (error) throw new Error(error.message)
      return data
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData<Profile[]>(['profile'], res[0])
      },
      onError: (err: any) => {
        alert(err.message)
      },
    }
  )

  return { createProfileMutation, updateProfileMutation }
}
