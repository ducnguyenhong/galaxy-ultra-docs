import Loading from '@galaxy-ultra/loading'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  LOADING_CODE_DEMO_CUSTOM_COLOR,
  LOADING_CODE_DEMO_CUSTOM_SIZE,
  LOADING_CODE_DEMO_NORMAL,
  LOADING_CODE_IMPORT,
  LOADING_CODE_SANDBOX_CUSTOM_COLOR,
  LOADING_CODE_SANDBOX_CUSTOM_SIZE,
  LOADING_CODE_SANDBOX_NORMAL
} from 'data/components/loading/loading.data'
import Head from 'next/head'

const LoadingUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Loading</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Loading</h3>
          <div className='mt-5'>
            <HighlightCode code={LOADING_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Loading */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-loading-normal">Loading</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div className='grid grid-cols-2 gap-20'>
              <div className="col-span-1">
                <Loading type="circle" />
              </div>
              <div className="col-span-1">
                <Loading type="ellipsis" />
              </div>
              <div className="col-span-1">
                <Loading type="ripple" />
              </div>
              <div className="col-span-1">
                <Loading type="spin" />
              </div>
            </div>
          </div>
          <ShowCode code={LOADING_CODE_DEMO_NORMAL} link={LOADING_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Loading custom size */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-loading-size">Loading with custom size</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div className='grid grid-cols-2 gap-20'>
              <div className="col-span-1">
                <Loading type="circle" width={30} height={30} />
              </div>
              <div className="col-span-1">
                <Loading type="ellipsis" width={60} height={60} />
              </div>
              <div className="col-span-1">
                <Loading type="ripple" width={90} height={90} />
              </div>
              <div className="col-span-1">
                <Loading type="spin" width={120} height={120} />
              </div>
            </div>
          </div>
          <ShowCode code={LOADING_CODE_DEMO_CUSTOM_SIZE} link={LOADING_CODE_SANDBOX_CUSTOM_SIZE} />
        </div>

        {/* Loading custom color */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-loading-color">Loading with custom color</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div className='grid grid-cols-2 gap-20'>
              <div className="col-span-1">
                <Loading type="circle" color="#ef4444" />
              </div>
              <div className="col-span-1">
                <Loading type="ellipsis" color="#22c55e" />
              </div>
              <div className="col-span-1">
                <Loading type="ripple" color="#3b82f6" />
              </div>
              <div className="col-span-1">
                <Loading type="spin" color="#d946ef" />
              </div>
            </div>
          </div>
          <ShowCode code={LOADING_CODE_DEMO_CUSTOM_COLOR} link={LOADING_CODE_SANDBOX_CUSTOM_COLOR} />
        </div>

        {/* PROPS Loading*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-loading-props">Props</h3>
          <TableDocs data={[
            { prop: 'type', dataType: `"circle", "spin", "ripple", "ellipsis"`, defaultValue: `"circle"`, description: "Loading type" },
            { prop: 'color', dataType: `string (HEX color)`, defaultValue: `#6b7280`, description: "Loading color" },
            { prop: 'className', dataType: `string`, defaultValue: ``, description: "Loading class" },
            { prop: 'width', dataType: `number (pixel)`, defaultValue: `50`, description: "Loading width" },
            { prop: 'height', dataType: `number (pixel)`, defaultValue: `50`, description: "Loading height" },
            { prop: 'duration', dataType: `number`, defaultValue: `By type, see demo code first`, description: "Loading duration" },
            { prop: 'strokeWidth', dataType: `number`, defaultValue: `By type, see demo code first`, description: "Loading stroke width" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-loading-normal', title: 'Loading' },
            { id: 'anchor-loading-size', title: 'Loading with custom size' },
            { id: 'anchor-loading-color', title: 'Loading with custom color' },
            { id: 'anchor-loading-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default LoadingUI