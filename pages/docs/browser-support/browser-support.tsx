import PrevNextBlog from "components/prev-next-blog"
import Head from "next/head"
import Link from "next/link"

const BrowserSupport: React.FC = () => {
  return <div>
    <Head>
      <title>Galaxy Ultra UI | Browser Support</title>
    </Head>
    <h3 className='font-semibold text-teal-400 text-xl'>Browser Support</h3>
    <h3 className='font-semibold mb-5 text-3xl mt-5 dark:text-gray-300'>Which browsers does Galaxy Ultra UI support?</h3>

    <div className="mt-10">
      <h3 className='text-xl mb-5 dark:text-gray-300'>By default from TailwindCSS, Galaxy Ultra UI is supported on the following browsers:</h3>
      <div className="ml-5 dark:text-gray-300">
        <p className="mt-2">• Chrome</p>
        <p className="mt-2">• Firefox</p>
        <p className="mt-2">• Edge</p>
        <p className="mt-2">• Safari</p>
      </div>
      <h3 className='text-xl mt-10 dark:text-gray-300'>You can read more documents <Link href="https://tailwindcss.com/docs/browser-support"><a className="underline text-teal-500" target="_blank" rel="noopener noreferrer">here</a></Link>.</h3>
    </div>

    <div className="mt-28">
      <PrevNextBlog
        prev={{
          title: 'Usage',
          link: '/docs/usage'
        }}
        next={{
          title: 'Alert',
          link: '/components/alert'
        }}
      />
    </div>
  </div>
}

export default BrowserSupport