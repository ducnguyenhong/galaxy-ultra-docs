import Link from "next/link"

interface PrevNextBlogProps {
  prev?: {
    title: string
    link: string
  }
  next?: {
    title: string
    link: string
  }
}

const PrevNextBlog: React.FC<PrevNextBlogProps> = (props) => {
  const { prev, next } = props

  return <div className="flex justify-between items-start">
    {prev ? (
      <Link href={prev.link}>
        <a className="px-4 py-1 rounded shadow-sm hover:shadow duration-300">
          <span className="block">
            <span className="flex items-center justify-start">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm text-gray-400">Prev</span>
            </span>
          </span>

          <span className="block font-medium text-teal-400 mt-1">{prev.title}</span>
        </a>
      </Link>
    ) : <div />}

    {next ? (
      <Link href={next.link}>
        <a className="px-4 py-1 rounded shadow-sm hover:shadow duration-300">
          <span className="block">
            <span className="flex items-center justify-end">
              <span className="text-sm text-gray-400">Next</span>
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </span>

          <span className="block font-medium text-teal-400 mt-1">{next.title}</span>
        </a>
      </Link>
    ) : <div />}
  </div>
}

export default PrevNextBlog