import Alert from '@galaxy-ultra/alert'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  ALERT_CODE_DEMO_CLOSE_ICON,
  ALERT_CODE_DEMO_CUSTOM_ICON,
  ALERT_CODE_DEMO_NORMAL,
  ALERT_CODE_DEMO_SIZE,
  ALERT_CODE_IMPORT,
  ALERT_CODE_SANDBOX_CLOSE_ICON,
  ALERT_CODE_SANDBOX_CUSTOM_ICON,
  ALERT_CODE_SANDBOX_NORMAL,
  ALERT_CODE_SANDBOX_SIZE
} from 'data/components/alert/alert.data'
import Head from 'next/head'

const AlertUI: React.FC = () => {

  return <div className='grid grid-cols-4 gap-x-20 w-full'>
    <Head>
      <title>Galaxy Ultra UI | Alert</title>
    </Head>

    <div className='col-span-4 lg:col-span-3'>
      {/* Import */}
      <div>
        <h3 className='font-semibold text-teal-400 text-xl'>Alert</h3>
        <div className='mt-5'>
          <HighlightCode code={ALERT_CODE_IMPORT} showCopy />
        </div>
      </div>

      {/* ALERT */}
      <div className='mt-20'>
        <h3 id="anchor-alert-normal" className='font-semibold mb-5 text-3xl dark:text-gray-300' >Alert</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Alert label='Primary' content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Success' type="success" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Danger' type="danger" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Warning' type="warning" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Info' type="info" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Dark' type="dark" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='Light' type="light" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
        </div>
        <ShowCode code={ALERT_CODE_DEMO_NORMAL} link={ALERT_CODE_SANDBOX_NORMAL} />
      </div>

      {/* ALERT SIZE */}
      <div className='mt-20'>
        <h3 id="anchor-alert-size" className='anchor-alert-size font-semibold mb-5 text-3xl dark:text-gray-300' >Alert with size</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Alert label='SM size' size="sm" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='MD size' size="md" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='LG size' size="lg" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='XL size' size="xl" content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
          <div className='mt-10'>
            <Alert label='FULL size' size='full' content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
        </div>
        <ShowCode code={ALERT_CODE_DEMO_SIZE} link={ALERT_CODE_SANDBOX_SIZE} />
      </div>

      {/* ALERT CUSTOM ICON */}
      <div className='mt-20'>
        <h3 id="anchor-alert-custom-icon" className='font-semibold mb-5 text-3xl dark:text-gray-300' >Alert with custom icon</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Alert
              label='Custom icon'
              content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              }
            />
          </div>
        </div>
        <ShowCode code={ALERT_CODE_DEMO_CUSTOM_ICON} link={ALERT_CODE_SANDBOX_CUSTOM_ICON} />
      </div>

      {/* ALERT CLOSE ICON */}
      <div className='mt-20'>
        <h3 id="anchor-alert-close-icon" className='font-semibold mb-5 text-3xl dark:text-gray-300' >Alert with close icon</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Alert label='Close icon' closeIcon content={<p className='text-gray-600 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>} />
          </div>
        </div>
        <ShowCode code={ALERT_CODE_DEMO_CLOSE_ICON} link={ALERT_CODE_SANDBOX_CLOSE_ICON} />
      </div>

      {/* PROPS */}
      <div className="mt-20">
        <h3 id="anchor-alert-props" className='font-semibold mb-5 text-3xl dark:text-gray-300'>Props</h3>
        <TableDocs data={[
          { prop: 'type', dataType: `"primary" , "success" , "danger" , "warning" , "info" , "dark" , "light"`, defaultValue: `"primary"`, description: "Alert type" },
          { prop: 'size', dataType: `"sm" , "md" , "lg" , "xl" , "full"`, defaultValue: `"md"`, description: "Alert size" },
          { prop: 'label', dataType: `string`, defaultValue: ``, description: "Alert label" },
          { prop: 'content', dataType: `string, JSX.Element`, defaultValue: ``, description: "Alert content" },
          { prop: 'icon', dataType: `JSX.Element`, defaultValue: `Notification icon`, description: "Alert icon" },
          { prop: 'closeIcon', dataType: `boolean`, defaultValue: `false`, description: "Button close alert" },
          { prop: 'onClose', dataType: `() => void`, defaultValue: ``, description: "Event on close alert" },
        ]} />
      </div>
    </div>

    <div className='hidden lg:block lg:col-span-1'>
      <div className="sticky right-0 top-32">
        <DocsAnchor items={[
          { id: 'anchor-alert-normal', title: 'Alert' },
          { id: 'anchor-alert-size', title: 'Alert with size' },
          { id: 'anchor-alert-custom-icon', title: 'Alert with custom icon' },
          { id: 'anchor-alert-close-icon', title: 'Alert with close icon' },
          { id: 'anchor-alert-props', title: 'Props' },
        ]} />
      </div>
    </div>
  </div >
}

export default AlertUI