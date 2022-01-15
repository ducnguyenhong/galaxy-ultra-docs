import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { darkModeSate } from 'recoil/dark-mode'
import '../styles/globals.css'

const DocsHeader = dynamic(() => import('./docs/docs.header'))
const DocsSidebar = dynamic(() => import('./docs/docs.sidebar'))
const DocsFooter = dynamic(() => import('./docs/docs.footer'))

const Content: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const needSidebar = !!(router.pathname !== '/')
  const darkMode = useRecoilValue(darkModeSate)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (!needSidebar) {
    return (
      <div>
        <DocsHeader isHome />
        <div className='flex items-start'>
          <div className='px-5 md:px-10 lg:px-20 w-full min-h-body bg-gradient-to-r from-white via-teal-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800'>
            <Component {...pageProps} />
            <DocsFooter />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <DocsHeader />
      <div className='flex items-start relative'>
        <DocsSidebar />
        <div className='ml-0 md:ml-60 lg:ml-80 mt-16 px-5 md:px-10 lg:px-20 py-10 lg:py-14 w-full min-h-body bg-gradient-to-r from-white via-teal-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800'>
          <Component {...pageProps} />
          <DocsFooter />
        </div>
      </div>
    </div>
  )
}

const MyApp: React.FC<AppProps> = (props) => {

  return (
    <RecoilRoot>
      <Content {...props} />
    </RecoilRoot>
  )
}

export default MyApp
