import DocsAnchor from "components/anchor-docs"
import HighlightCode from "components/highlight-syntax"
import PrevNextBlog from "components/prev-next-blog"
import { INSTALLATION_CODE_CONFIG, INSTALLATION_CODE_INSTALL, INSTALLATION_CODE_INSTALL_SMALL_DEMO, INSTALLATION_CODE_INSTALL_SMALL_PACKAGE, INSTALLATION_CODE_INSTALL_YARN } from "data/installation/installation.data"
import Head from "next/head"

const Installation: React.FC = () => {

  return <div className="grid grid-cols-4 gap-x-20">
    <Head>
      <title>Galaxy Ultra UI | Installation</title>
    </Head>
    <div className="col-span-4 lg:col-span-3">
      <h3 className='font-semibold text-teal-400 text-xl'>Installation</h3>

      <div className="mt-5">
        <h3 className='font-semibold mb-5 text-3xl mt-5 dark:text-gray-300' id="anchor-installation-before-installing">Before installing</h3>
        <div className="ml-5">
          <p className="dark:text-gray-300">Galaxy Ultra UI requires the following libraries to be installed</p>
          <div className="mt-5 w-full md:w-1/2">
            <table className="w-full border dark:border-gray-500">
              <thead>
                <tr className="border-b dark:border-gray-500">
                  <th className="p-2 border-r dark:border-gray-500">
                    <div className="flex items-center justify-center font-semibold dark:text-gray-300">
                      Library
                    </div>
                  </th>
                  <th className="p-2 border-r dark:border-gray-500">
                    <div className="flex items-center justify-center font-semibold dark:text-gray-300">
                      Version
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">react</td>
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">17+</td>
                </tr>
                <tr className="text-center">
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">react-dom</td>
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">17+</td>
                </tr>
                <tr className="text-center">
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">tailwindcss</td>
                  <td className="p-2 border-r dark:border-gray-500 text-sm dark:text-gray-300">3+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h3 className='font-semibold text-3xl mb-10 dark:text-gray-300' id="anchor-installation-install-gu">Install Galaxy Ultra UI</h3>
        <div className="ml-5">
          <p className="text-lg text-gray-600 dark:text-gray-300" id="anchor-installation-install-step-1"><span className="font-medium text-red-500 dark:text-red-400">• Step 1</span> - Install it all with a single command line</p>
          <div className="mt-5">
            <HighlightCode code={INSTALLATION_CODE_INSTALL} showCopy />
          </div>
          <p className="text text-gray-600 dark:text-gray-300" id="anchor-installation-install-step-1">or with Yarn</p>
          <div className="mt-5">
            <HighlightCode code={INSTALLATION_CODE_INSTALL_YARN} showCopy />
          </div>

          <p className="mt-14 text-lg text-gray-600 text-justify dark:text-gray-300" id="anchor-installation-install-step-2"><span className="font-medium text-red-500 dark:text-red-400">• Step 2</span> - In your <span className="text-teal-500 font-medium">tailwind.config.js</span> add the path below. This will help TailwindCSS to recognize our library</p>
          <div className="mt-5">
            <HighlightCode code={INSTALLATION_CODE_CONFIG} />
          </div>

          <p className="mt-14 text-lg text-gray-600 dark:text-gray-300" id="anchor-installation-install-optional"><span className="font-medium text-red-500 dark:text-red-400">• Optional</span> - If you want to install a single package, use the syntax below, where <span className="text-emerald-500">package</span> is the name of the components</p>
          <div className="mt-5">
            <HighlightCode code={INSTALLATION_CODE_INSTALL_SMALL_PACKAGE} showCopy />
          </div>
          <p className="mt-5 dark:text-gray-300"><span className="italic">Example:</span></p>
          <div className="mt-5">
            <HighlightCode code={INSTALLATION_CODE_INSTALL_SMALL_DEMO} showCopy />
          </div>
        </div>
      </div>

      <div className="mt-28">
        <PrevNextBlog
          next={{
            title: 'Usage',
            link: '/docs/usage'
          }}
        />
      </div>
    </div>

    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky right-0 top-32">
        <DocsAnchor items={[
          { id: 'anchor-installation-before-installing', title: 'Before installing' },
          { id: 'anchor-installation-install-gu', title: 'Install GU' },
          { id: 'anchor-installation-install-gu', title: 'Step 1', secondary: true },
          { id: 'anchor-installation-install-step-2', title: 'Step 2', secondary: true },
          { id: 'anchor-installation-install-optional', title: 'Optional', secondary: true },
        ]} />
      </div>
    </div>
  </div>
}

export default Installation