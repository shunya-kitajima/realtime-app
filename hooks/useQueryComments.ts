import { useQuery } from 'react-query'
import { supabase } from '../utiles/supabase'
import { Comment } from '../types'

export const useQueryComments = () => {
  const getComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('id', { ascending: true })
    if (error) throw new Error(error.message)
    return data
  }

  return useQuery<Comment[], Error>({
    queryKey: ['comments'],
    queryFn: getComments,
    staleTime: Infinity,
  })
}
