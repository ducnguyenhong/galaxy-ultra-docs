import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { DOCS_MENU } from "data/menu/docs.menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { darkModeSate } from "recoil/dark-mode"

interface DocsHeaderProps {
  isHome?: boolean
}

const DocsHeader: React.FC<DocsHeaderProps> = ({ isHome }) => {
  const router = useRouter()
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false)

  const [darkMode, setDarkMode] = useRecoilState(darkModeSate)

  return (
    <div className={clsx({
      'flex items-center justify-between z-50 px-5 md:px-16 w-full': true,
      'bg-white dark:bg-slate-800 shadow-sm border-b dark:border-gray-700 h-18 fixed top-0 left-0': !isHome,
      'h-24 bg-gradient-to-r from-white via-teal-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800': isHome
    })}>
      <div className="flex items-center w-full md:w-auto justify-between">
        <div className="md:hidden mr-5">
          <button className="text-gray-500 p-2" onClick={() => setShowMenuMobile(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <Link href="/">
          <a className="flex items-center">
            <div className="hidden md:block">
              <Image src="/images/logo.png" width={50} height={40} alt="logo" />
            </div>
            <span className="mx-4 font-semibold text-2xl text-gray-700 dark:text-gray-50">Galaxy Ultra UI</span>
          </a>
        </Link>
        <label className="hidden md:block bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-lg text-sm font-medium text-gray-400">v0.0.x</label>
      </div>

      <div className="flex items-center">
        <div className="md:items-center border-r pr-10 hidden md:flex dark:border-gray-500">
          <div>
            <Link href='/docs/installation'>
              <a className={clsx({
                'font-semibold': true,
                'text-teal-500 dark:text-teal-400': router.pathname === `/docs/installation` || router.pathname === `/docs/browser-support`,
                'text-gray-700 dark:text-gray-300 hover:text-teal-500 duration-300 dark:hover:text-teal-400': router.pathname !== `/docs/installation` && router.pathname !== `/docs/browser-support`,
              })}>Docs</a>
            </Link>
          </div>
          <div className="ml-10">
            <Link href='/components/alert'>
              <a className={clsx({
                'font-semibold': true,
                'text-teal-500 dark:text-teal-400': router.pathname.includes('/components'),
                'text-gray-700 dark:text-gray-300 hover:text-teal-500 duration-300 dark:hover:text-teal-400': !router.pathname.includes('/components'),
              })}>Components</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:items-center pl-10">
          <button className="outline-none" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <span className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </span>
            ) : (
              <span className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </button>
          <div className="ml-5">
            <Link href="https://github.com/galaxy-ultra/ui" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-500 duration-300 hover:text-gray-600" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className="md:hidden overflow-hidden relative">
        {showMenuMobile && <div onClick={() => setShowMenuMobile(false)} className="w-full h-full opacity-50 fixed top-0 left-0 bg-gray-800 z-10" />}

        <div className={clsx({
          'duration-300 transform fixed top-0 left-0 h-screen bg-gray-50 z-50 w-72': true,
          'translate-x-0': showMenuMobile,
          '-translate-x-full': !showMenuMobile
        })}>
          <div>
            <div className="fixed top-0 left-0 bg-gray-50 z-20 w-full mb-4">
              <div className="flex justify-end mb-5">
                <button className="bg-red-400 w-8 h-8 rounded-sm" onClick={() => setShowMenuMobile(false)}>
                  <FontAwesomeIcon icon={faTimes} className="text-gray-50" />
                </button>
              </div>
              <div className="px-5">
                <div className="relative">
                  <button className="absolute top-2.5 left-3 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <input placeholder="Search" className="w-full pl-10 border border-gray-300 shadow-sm pr-4 py-2 rounded-md focus:outline-none " />
                </div>
              </div>
            </div>
            <div className="pt-20 px-5">
              {DOCS_MENU.map(item => {
                const { title, items } = item
                return <div key={title} className="mt-10">
                  <h5 className="flex items-center font-medium text-gray-700">
                    {title}
                  </h5>
                  <div className="mt-5 border-l border-gray-100">
                    {items?.map(menu => {
                      return <Link href={menu.route || ''} key={menu.route}>
                        <a onClick={() => setShowMenuMobile(false)} className={clsx({
                          'block pl-4 mt-3': true,
                          'text-teal-500 font-medium border-l border-teal-500 -ml-px': router.pathname === menu.route,
                          'text-gray-500 hover:text-teal-500 duration-100 hover:font-medium': router.pathname !== menu.route,
                        })}>{menu.title}</a>
                      </Link>
                    })}
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocsHeader