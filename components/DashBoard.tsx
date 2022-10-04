import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import {
  ArrowRightOnRectangleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid'
import { supabase } from '../utiles/supabase'
import { Spinner } from './Spinner'
import { UserProfile } from './UserProfile'

export const DashBoard: React.FC = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <div>
      <ArrowRightOnRectangleIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
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
    </div>
  )
}
