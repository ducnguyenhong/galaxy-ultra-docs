import clsx from 'clsx'
import Link from "next/link"
import { useRouter } from 'next/router'
import { DOCS_MENU } from "../../data/menu/docs.menu"

const DocsSidebar: React.FC = () => {
  const router = useRouter()

  return <div className="h-sidebar bg-white dark:bg-slate-800 lg:w-80 hidden md:block fixed top-18 pb-20 left-0 md:w-60 overflow-y-auto overflow-x-hidden">
    <div className="sticky top-0 left-0 z-20 w-full px-10 lg:pl-14 lg:pr-5 pt-10 pb-4">
      <div className="relative">
        <button className="absolute top-3 text-lg left-3 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
        <input placeholder="Search" className="w-full pl-10 border border-gray-300 shadow-sm pr-4 py-2 rounded-md focus:outline-none dark:bg-gray-600 dark:border-gray-500" />
      </div>
    </div>

    <div className="mt-10 px-10 lg:px-14">
      {DOCS_MENU.map(item => {
        const { title, items } = item
        return <div key={title} className="mt-10">
          <h5 className="flex items-center font-medium text-gray-700 dark:text-gray-300">
            {title}
          </h5>
          <div className="mt-5 border-l border-gray-100 dark:border-gray-600">
            {items?.map(menu => {
              return <Link href={menu.route || ''} key={menu.route}>
                <a className={clsx({
                  'block pl-4 mt-3': true,
                  'text-teal-500 dark:text-teal-400 font-medium border-l border-teal-500 -ml-px': router.pathname === menu.route,
                  'text-gray-500 dark:text-gray-400 hover:text-teal-500 duration-100': router.pathname !== menu.route,
                })}>{menu.title}</a>
              </Link>
            })}
          </div>
        </div>
      })}
    </div>
  </div>
}

export default DocsSidebar