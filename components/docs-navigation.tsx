import clsx from "clsx";
import { RefObject, useState } from "react";

interface NavigationItem {
  ref: RefObject<HTMLHeadingElement>,
  title: string
  offsetTop: number
  isChildren?: boolean
}

interface DocsNavigationProps {
  data: NavigationItem[]
}

const DocsNavigation: React.FC<DocsNavigationProps> = (props) => {
  const { data } = props
  const [currNav, setCurrNav] = useState<string>(data[0].title)

  return <div className="sticky right-0 top-32">
    <h5 className='font-semibold'>
      On this page
    </h5>

    <div className='mt-8'>
      {data.map(item => {
        return <button key={item.title} className={clsx({
          'outline-none mt-3 flex items-center': true,
          'text-teal-500 font-medium': currNav === item.title,
          'text-gray-600': currNav !== item.title,
        })}
          onClick={() => {
            window.scrollTo(0, item.offsetTop > 110 ? item.offsetTop - 110 : 0)
            setCurrNav(item.title)
          }}
        >
          {item.isChildren && <span className="ml-3 mr-2 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>}
          {item.title}
        </button>
      })}
    </div>
  </div>
}

export default DocsNavigation