import type { NextPage } from 'next'
import { useEffect } from 'react'
import { supabase } from '../utiles/supabase'
import useStore from '../store'
import { Layout } from '../components/Layout'
import { Auth } from '../components/Auth'
import { DashBoard } from '../components/DashBoard'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSesstion)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])

  return (
    <Layout title="Dashboard">{!session ? <Auth /> : <DashBoard />}</Layout>
  )
}

export default Home
