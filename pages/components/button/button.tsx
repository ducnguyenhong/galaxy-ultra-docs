import Button from '@galaxy-ultra/button';
import DocsAnchor from 'components/anchor-docs';
import HighlightCode from 'components/highlight-syntax';
import ShowCode from 'components/show-code';
import TableDocs from 'components/table-docs-props';
import {
  BUTTON_CODE_DEMO_DISABLED,
  BUTTON_CODE_DEMO_ICON,
  BUTTON_CODE_DEMO_NORMAL,
  BUTTON_CODE_IMPORT,
  BUTTON_CODE_SANDBOX_DISABLED,
  BUTTON_CODE_SANDBOX_ICON,
  BUTTON_CODE_SANDBOX_NORMAL
} from 'data/components/button/button.data';
import Head from 'next/head';

const ButtonUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Button</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Button</h3>
          <div className='mt-5'>
            <HighlightCode code={BUTTON_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* BUTTON */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-button-normal">Button</h3>
          <div className='flex items-center border dark:border-gray-600 rounded p-5 flex-wrap'>
            <div>
              <Button variant='primary'>Primary</Button>
            </div>
            <div className='ml-5'>
              <Button variant='success'>Success</Button>
            </div>
            <div className='ml-5'>
              <Button variant='danger'>Danger</Button>
            </div>
            <div className='ml-5'>
              <Button variant='warning'>Warning</Button>
            </div>
            <div className='ml-5'>
              <Button variant='info'>Info</Button>
            </div>
            <div className='ml-5'>
              <Button variant='dark'>Dark</Button>
            </div>
            <div className='ml-5'>
              <Button variant='light'>Light</Button>
            </div>

          </div>
          <ShowCode code={BUTTON_CODE_DEMO_NORMAL} link={BUTTON_CODE_SANDBOX_NORMAL} />
        </div>

        {/* BUTTON WITH ICON */}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl mt-20 dark:text-gray-300' id="anchor-button-icon">Button with icon</h3>
          <div className='border dark:border-gray-600 rounded p-5'>
            <Button icon={{
              element: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              ),
              position: 'left'
            }}>
              Button with icon
            </Button>
          </div>
          <ShowCode code={BUTTON_CODE_DEMO_ICON} link={BUTTON_CODE_SANDBOX_ICON} />
        </div>

        {/* DISABLED BUTTON */}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl mt-20 dark:text-gray-300' id="anchor-button-disabled">Disabled button</h3>
          <div className='flex items-center border dark:border-gray-600 rounded p-5 flex-wrap'>
            <div>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          <ShowCode code={BUTTON_CODE_DEMO_DISABLED} link={BUTTON_CODE_SANDBOX_DISABLED} />
        </div>

        {/* PROPS */}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-button-props">Props</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Button children" },
            { prop: 'variant', dataType: `"primary" , "success" , "danger" , "warning" , "info" , "dark" , "light"`, defaultValue: `"primary"`, description: "Button type" },
            {
              prop: 'icon',
              dataType: `Object type include:
  • element: JSX.Element;
  • position: "left", "right"`,
              defaultValue: ``,
              description: "Button icon",
              preWrap: true
            },
            { prop: 'disabled', dataType: `boolean`, defaultValue: `false`, description: "Button disable" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-button-normal', title: 'Button' },
            { id: 'anchor-button-icon', title: 'Button with icon' },
            { id: 'anchor-button-disabled', title: 'Disabled button' },
            { id: 'anchor-button-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default ButtonUI