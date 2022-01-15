import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const DocsFooter: React.FC = () => {
  return <div className="mt-20 pb-10">
    <div>
      <hr className="opacity-80 dark:opacity-30" />
    </div>
    <div className="mt-10 flex items-center justify-between">
      <h3 className="text-gray-600 dark:text-gray-400">Copyright © 2022 <span className="text-teal-500 font-medium">Galaxy Ultra UI</span></h3>

      <div className="flex items-center">
        <div>
          <Link href="https://github.com/autoclickvn">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-400 duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
            </a>
          </Link>
        </div>
        <div className="ml-5 md:ml-10">
          <Link href="https://www.facebook.com/ducnh99">
            <a target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl text-gray-400 duration-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default DocsFooter