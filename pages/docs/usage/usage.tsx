import HighlightCode from "components/highlight-syntax"
import PrevNextBlog from "components/prev-next-blog"
import { USAGE_NORMAL, USAGE_OPTIONAL } from "data/usage/usage.data"
import Head from "next/head"

const Usage: React.FC = () => {

  return <div className="grid grid-cols-4 gap-x-20">
    <Head>
      <title>Galaxy Ultra UI | Usage</title>
    </Head>
    <div className="col-span-4 lg:col-span-3">
      <h3 className='font-semibold text-teal-400 text-xl'>Usage</h3>

      <div className="mt-5">
        <h3 className='font-semibold text-3xl mt-5 dark:text-gray-300' id="anchor-installation-before-installing">Importing components</h3>
        <div className="ml-5 mt-10">
          <div>
            <p className="dark:text-gray-300 text-lg">Each component will have its own instructions for use, but in general we will use the following</p>
            <div className="mt-5">
              <HighlightCode code={USAGE_NORMAL} />
            </div>
          </div>

          <div className="mt-16">
            <p className="dark:text-gray-300 text-lg">You can use a more concise syntax like below, however we do not recommend this as it can cause javascript redundancy after build</p>
            <div className="mt-5">
              <HighlightCode code={USAGE_OPTIONAL} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <PrevNextBlog
          prev={{
            title: 'Installation',
            link: '/docs/installation'
          }}
          next={{
            title: 'Browser Support',
            link: '/docs/browser-support'
          }}
        />
      </div>
    </div>

    <div className="hidden lg:block lg:col-span-1" />
  </div>
}

export default Usage