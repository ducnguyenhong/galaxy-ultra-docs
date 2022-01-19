import Radio from '@galaxy-ultra/radio'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  RADIO_CODE_DEMO_GROUP,
  RADIO_CODE_DEMO_NORMAL, RADIO_CODE_DEMO_SIZE, RADIO_CODE_IMPORT, RADIO_CODE_SANDBOX_GROUP, RADIO_CODE_SANDBOX_NORMAL, RADIO_CODE_SANDBOX_SIZE
} from 'data/components/radio/radio.data'
import Head from 'next/head'

const RadioUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Radio</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Radio</h3>
          <div className='mt-5'>
            <HighlightCode code={RADIO_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Radio */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-radio-normal">Radio</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Radio>Radio</Radio>
            </div>
          </div>
          <ShowCode code={RADIO_CODE_DEMO_NORMAL} link={RADIO_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Radio size*/}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-radio-size">Radio with size</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <div>
                <Radio size='small'>Small</Radio>
              </div>
              <div className='my-4'>
                <Radio size='normal'>Normal</Radio>
              </div>
              <div>
                <Radio size='large'>Large</Radio>
              </div>
            </div>
          </div>
          <ShowCode code={RADIO_CODE_DEMO_SIZE} link={RADIO_CODE_SANDBOX_SIZE} />
        </div>

        {/* Radio group */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-radio-group">Radio group</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Radio.Group value={1} type="horizontal">
                <Radio value={1}>Label 1</Radio>
                <Radio value={2} wrapperClassName='mx-10'>Label 2</Radio>
                <Radio value={3}>Label 3</Radio>
              </Radio.Group>
            </div>
          </div>
          <ShowCode code={RADIO_CODE_DEMO_GROUP} link={RADIO_CODE_SANDBOX_GROUP} />
        </div>

        {/* PROPS Radio*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-radio-props">Props</h3>
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Radio</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `Radio.Item, ReactNode`, defaultValue: ``, description: "Radio children" },
          ]} />
        </div>

        {/* PROPS Radio Group*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Radio.Item</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Radio.Item children" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-radio-normal', title: 'Radio' },
            { id: 'anchor-radio-size', title: 'Radio with size' },
            { id: 'anchor-radio-group', title: 'Radio group' },
            { id: 'anchor-radio-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default RadioUI