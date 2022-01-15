import Alert from '@galaxy-ultra/alert'
import Breadcrumb from '@galaxy-ultra/breadcrumb'
import Button from '@galaxy-ultra/button'
import Card from '@galaxy-ultra/card'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Galaxy Ultra UI</title>
      </Head>
      <div>
        <div className='flex flex-col items-center justify-center pb-20 lg:pb-56'>
          <div className='pt-16 md:pt-28 lg:pt-40 px-5 md:px-0'>
            <h1 className='text-3xl md:text-5xl font-bold text-center dark:text-gray-100'>A UI library for React built with <span className='text-teal-400'>TailwindCSS</span></h1>
            <h3 className='text-lg md:text-2xl text-center font-medium text-gray-500 mt-5 dark:text-gray-300'>With super useful components, fast and easy to use</h3>
            <div className='mt-16 flex justify-center items-center flex-col md:flex-row'>
              <Link href="/docs/installation">
                <a className='inline-flex md:flex items-center bg-blue-600 px-6 py-3 rounded-md duration-300 hover:bg-blue-700'>
                  <span className='text-gray-50 font-medium text-lg'>Get started</span>
                  <span className='text-gray-50 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </Link>

              <button
                onClick={() => navigator.clipboard.writeText('npm i @galaxy-ultra/ui')}
                className='outline-none mt-5 md:mt-0 md:ml-10 flex items-center justify-between border px-6 py-3 rounded-md duration-300 bg-blue-50 hover:border-blue-500 dark:bg-gray-300'
              >
                <span className='mr-10 text-lg font-medium whitespace-nowrap'>npm i @galaxy-ultra/ui</span>
                <span className='text-gray-400 dark:text-gray-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20 md:px-10 lg:px-32">
          <h2 className='text-2xl font-medium dark:text-gray-300'>Pre-built components make it easy to use</h2>
          <div className="mt-10 grid grid-cols-6 gap-x-14 gap-y-14">
            <div className="col-span-6 lg:col-span-2 border border-gray-200 border-dashed rounded p-8 bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
              <h4 className='mb-5 text-teal-400 font-medium text-lg'>• Button</h4>
              <Button>Primary Button</Button>
            </div>
            <div className="col-span-6 lg:col-span-2 border border-gray-200 border-dashed rounded p-8 bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
              <h4 className='mb-5 text-teal-400 font-medium text-lg'>• Alert</h4>
              <Alert label='Success Alert' type='success'
                content={<p className='text-sm text-gray-500'>Lorem Ipsum has been the industry standard dummy since the 1500s</p>} />
            </div>
            <div className="col-span-6 lg:col-span-2 border border-gray-200 border-dashed rounded p-8 bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
              <h4 className='mb-5 text-teal-400 font-medium text-lg'>• Breadcrumb</h4>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Category</Breadcrumb.Item>
                <Breadcrumb.Item active>Detail</Breadcrumb.Item>
              </Breadcrumb>

            </div>
            <div className="col-span-6 lg:col-span-3 border border-gray-200 border-dashed rounded p-8 bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
              <h4 className='mb-5 text-teal-400 font-medium text-lg'>• Card</h4>
              <Card title='Card with top image'
                image={{
                  src: 'https://nhduc.net/assets/common/img-preview.png',
                  position: 'top'
                }}
              >
                <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </Card>
            </div>
            <div className="col-span-6 lg:col-span-3 border border-gray-200 border-dashed rounded p-8 bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
              <h4 className='mb-5 text-teal-400 font-medium text-lg'>• Card</h4>
              <Card title='Card with top image'
                image={{
                  src: 'https://nhduc.net/assets/common/img-preview.png',
                  position: 'top'
                }}
              >
                <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-32 md:px-10 lg:px-32 pb-5 lg:pb-10">
          <div className="grid grid-cols-2 gap-x-16">
            <div className="col-span-2 lg:col-span-1">
              <h2 className='text-2xl font-medium dark:text-gray-300'>Browser support</h2>
              <div className="mt-10">
                <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center mr-10 md:mr-16'>
                    <Image width={50} height={50} alt="Chrome" src="/images/logo-chrome.png" />
                    <h5 className='mt-1 dark:text-gray-400'>Chrome</h5>
                  </div>
                  <div className='flex flex-col items-center mr-10 md:mr-16'>
                    <Image width={50} height={50} alt="Firefox" src="/images/logo-firefox.png" />
                    <h5 className='mt-1 dark:text-gray-400'>Firefox</h5>
                  </div>
                  <div className='flex flex-col items-center mr-10 md:mr-16'>
                    <Image width={50} height={50} alt="Edge" src="/images/logo-edge.png" />
                    <h5 className='mt-1 dark:text-gray-400'>Edge</h5>
                  </div>
                  <div className='flex flex-col items-center'>
                    <Image width={50} height={50} alt="Safari" src="/images/logo-safari.png" />
                    <h5 className='mt-1 dark:text-gray-400'>Safari</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 mt-20 lg:mt-0">
              <h2 className='text-2xl font-medium dark:text-gray-300'>QR code</h2>
              <div className='mt-5 flex flex-col items-center dark:opacity-90'>
                <Image width={200} height={200} src={`https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fgalaxyultra.net&chs=180x180&choe=UTF-8&chld=L|2`} alt="qr code" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
