import { useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { supabase } from '../utiles/supabase'
import { Notice } from '../types'

export const useSubscribeNotices = () => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const subsc = supabase
      .from('notices')
      .on('INSERT', (payload: SupabaseRealtimePayload<Notice>) => {
        let previousNotices = queryClient.getQueryData<Notice[]>(['notices'])
        if (!previousNotices) previousNotices = []
        queryClient.setQueryData<Notice[]>(
          ['notices'],
          [
            ...previousNotices,
            {
              id: payload.new.id,
              created_at: payload.new.created_at,
              content: payload.new.content,
              user_id: payload.new.user_id,
            },
          ]
        )
      })
      .on('UPDATE', (payload: SupabaseRealtimePayload<Notice>) => {})
      .on('DELETE', (payload: SupabaseRealtimePayload<Notice>) => {})
      .subscribe()
    const removeSubscription = async () => {
      await supabase.removeSubscription(subsc)
    }
    return () => {
      removeSubscription()
    }
  }, [queryClient])

  return {}
}
