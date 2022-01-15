import Link from "next/link"
import { useState } from "react"
import HighlightCode from "./highlight-syntax"

interface ShowCodeProps {
  code: string
  link: string
}

const ShowCode: React.FC<ShowCodeProps> = (props) => {
  const [show, setShow] = useState<boolean>(false)
  const { code, link } = props

  return (
    <div className="mt-5">
      <div className='flex justify-end'>
        <button className='outline-none flex items-center bg-sky-800 px-3 py-2 text-sm rounded-2xl duration-300 hover:bg-sky-900' onClick={() => setShow(!show)}>
          <span className='text-gray-50 mr-1.5'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <span className='text-gray-50'>Show code</span>
        </button>

        <Link href={link} passHref>
          <a className='outline-none flex items-center bg-sky-800 ml-8 px-3 py-2 text-sm rounded-2xl duration-300 hover:bg-sky-900' target="_blank" rel="noopener noreferrer">
            <span className='text-gray-50 mr-1.5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
            <span className='text-gray-50'>CodeSandbox</span>
          </a>
        </Link>
      </div>
      {show && <div className='mt-5'>
        <HighlightCode code={code} />
      </div>}
    </div>
  )
}

export default ShowCode