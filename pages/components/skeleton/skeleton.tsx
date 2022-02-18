import Skeleton from '@galaxy-ultra/skeleton'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  SKELETON_CODE_DEMO_CUSTOM_ICON,
  SKELETON_CODE_DEMO_NORMAL,
  SKELETON_CODE_IMPORT,
  SKELETON_CODE_SANDBOX_CUSTOM_ICON,
  SKELETON_CODE_SANDBOX_NORMAL
} from 'data/components/skeleton/skeleton.data'
import Head from 'next/head'

const SkeletonUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Skeleton</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Skeleton</h3>
          <div className='mt-5'>
            <HighlightCode code={SKELETON_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Skeleton */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-normal">Skeleton line</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div className='w-40'>
              <Skeleton>
                <Skeleton.Line width="full" />
              </Skeleton>
            </div>
          </div>
          <ShowCode code={SKELETON_CODE_DEMO_NORMAL} link={SKELETON_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Skeleton Square */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-icon">Skeleton square</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <Skeleton>
              <Skeleton.Square />
            </Skeleton>
          </div>
          <ShowCode code={SKELETON_CODE_DEMO_CUSTOM_ICON} link={SKELETON_CODE_SANDBOX_CUSTOM_ICON} />
        </div>

        {/* Skeleton Circle */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-icon">Skeleton circle</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <Skeleton>
              <Skeleton.Circle />
            </Skeleton>
          </div>
          <ShowCode code={SKELETON_CODE_DEMO_CUSTOM_ICON} link={SKELETON_CODE_SANDBOX_CUSTOM_ICON} />
        </div>

        {/* Skeleton Image */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-icon">Skeleton image</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <Skeleton>
              <Skeleton.Image />
            </Skeleton>
          </div>
          <ShowCode code={SKELETON_CODE_DEMO_CUSTOM_ICON} link={SKELETON_CODE_SANDBOX_CUSTOM_ICON} />
        </div>

        {/* Skeleton Multi */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-icon">Skeleton multi</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <Skeleton>
              <div className='flex items-start'>
                <Skeleton.Square />
                <div className='ml-3'>
                  <div><Skeleton.Line /></div>
                  <div className='my-3'><Skeleton.Line /></div>
                  <div><Skeleton.Line /></div>
                </div>
              </div>
            </Skeleton>
          </div>
          <ShowCode code={SKELETON_CODE_DEMO_CUSTOM_ICON} link={SKELETON_CODE_SANDBOX_CUSTOM_ICON} />
        </div>

        {/* PROPS Skeleton*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-skeleton-props">Props</h3>
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Skeleton</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `Skeleton.Item, ReactNode`, defaultValue: ``, description: "Skeleton children" },
            { prop: 'separatorIcon', dataType: `string, JSX.Element`, defaultValue: `Arrow icon`, description: "Separator icon" },
          ]} />
        </div>

        {/* PROPS Skeleton Item*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Skeleton.Item</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Skeleton.Item children" },
            { prop: 'active', dataType: `boolean`, defaultValue: `false`, description: "Skeleton Item active" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-skeleton-normal', title: 'Skeleton' },
            { id: 'anchor-skeleton-icon', title: 'Skeleton with custom icon' },
            { id: 'anchor-skeleton-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default SkeletonUI