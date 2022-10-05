import React, { Suspense } from 'react'
import { useQueryClient } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import {
  ArrowRightOnRectangleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid'
import { supabase } from '../utiles/supabase'
import useStore from '../store'
import { Spinner } from './Spinner'
import { UserProfile } from './UserProfile'
import { Notification } from './Notification'

export const DashBoard: React.FC = () => {
  const queryClient = useQueryClient()
  const resetEditedProfile = useStore((state) => state.resetEditedProfile)
  const resetEditedNotice = useStore((state) => state.resetEditedNotice)

  const signOut = () => {
    resetEditedProfile()
    resetEditedNotice()
    queryClient.removeQueries(['profile'])
    queryClient.removeQueries(['notices'])
    supabase.auth.signOut()
  }

  return (
    <>
      <ArrowRightOnRectangleIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <ErrorBoundary
            fallback={
              <ExclamationCircleIcon className="my-5 h-10 text-pink-500" />
            }
          >
            <Suspense fallback={<Spinner />}>
              <UserProfile />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="flex flex-col items-center">
          <ErrorBoundary
            fallback={
              <ExclamationCircleIcon className="my-5 h-10 text-pink-500" />
            }
          >
            <Suspense fallback={<Spinner />}>
              <Notification />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}
