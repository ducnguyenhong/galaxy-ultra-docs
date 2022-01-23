import Breadcrumb from '@galaxy-ultra/breadcrumb'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  BREADCRUMB_CODE_DEMO_CUSTOM_ICON,
  BREADCRUMB_CODE_DEMO_NORMAL,
  BREADCRUMB_CODE_IMPORT,
  BREADCRUMB_CODE_SANDBOX_CUSTOM_ICON,
  BREADCRUMB_CODE_SANDBOX_NORMAL
} from 'data/components/breadcrumb/breadcrumb.data'
import Head from 'next/head'

const BreadcrumbUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Breadcrumb</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Breadcrumb</h3>
          <div className='mt-5'>
            <HighlightCode code={BREADCRUMB_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-breadcrumb-normal">Breadcrumb</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Breadcrumb>
                <Breadcrumb.Item><span className='dark:text-gray-200'>Home</span></Breadcrumb.Item>
                <Breadcrumb.Item><span className='dark:text-gray-200'>Category</span></Breadcrumb.Item>
                <Breadcrumb.Item active><span className='dark:text-gray-200'>Detail</span></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <ShowCode code={BREADCRUMB_CODE_DEMO_NORMAL} link={BREADCRUMB_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Breadcrumb CUSTOM ICON */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-breadcrumb-icon">Breadcrumb with custom icon</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Breadcrumb separatorIcon={<span className='dark:text-gray-300'>/</span>}>
                <Breadcrumb.Item><span className='dark:text-gray-200'>Home</span></Breadcrumb.Item>
                <Breadcrumb.Item><span className='dark:text-gray-200'>Category</span></Breadcrumb.Item>
                <Breadcrumb.Item active><span className='dark:text-gray-200'>Detail</span></Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <ShowCode code={BREADCRUMB_CODE_DEMO_CUSTOM_ICON} link={BREADCRUMB_CODE_SANDBOX_CUSTOM_ICON} />
        </div>

        {/* PROPS Breadcrumb*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-breadcrumb-props">Props</h3>
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Breadcrumb</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `Breadcrumb.Item, ReactNode`, defaultValue: ``, description: "Breadcrumb children" },
            { prop: 'separatorIcon', dataType: `string, JSX.Element`, defaultValue: `Arrow icon`, description: "Separator icon" },
          ]} />
        </div>

        {/* PROPS Breadcrumb Item*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Breadcrumb.Item</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Breadcrumb.Item children" },
            { prop: 'active', dataType: `boolean`, defaultValue: `false`, description: "Breadcrumb Item active" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-breadcrumb-normal', title: 'Breadcrumb' },
            { id: 'anchor-breadcrumb-icon', title: 'Breadcrumb with custom icon' },
            { id: 'anchor-breadcrumb-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default BreadcrumbUI