import Tab from '@galaxy-ultra/tab'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  TAB_CODE_DEMO_DISABLE,
  TAB_CODE_DEMO_ICON,
  TAB_CODE_DEMO_NORMAL,
  TAB_CODE_DEMO_POSITION,
  TAB_CODE_DEMO_WRAPPER,
  TAB_CODE_IMPORT,
  TAB_CODE_SANDBOX_DISABLE,
  TAB_CODE_SANDBOX_ICON,
  TAB_CODE_SANDBOX_NORMAL,
  TAB_CODE_SANDBOX_POSITION,
  TAB_CODE_SANDBOX_WRAPPER
} from 'data/components/tab/tab.data'
import Head from 'next/head'

const TabUI: React.FC = () => {

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Tab</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Tab</h3>
          <div className='mt-5'>
            <HighlightCode code={TAB_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Tab */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-normal">Tab</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Tab defaultActiveKey='2' activeKey="1">
                <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
                <Tab.Item tabKey="2" title="Tab 2">Content 2</Tab.Item>
                <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
              </Tab>
            </div>
          </div>
          <ShowCode code={TAB_CODE_DEMO_NORMAL} link={TAB_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Tab ICON */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-icon">Tab with icon</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Tab defaultActiveKey='2' activeKey="1">
                <Tab.Item
                  tabKey="1"
                  title={<div className='flex items-center'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className='ml-1'>Tab 1</span>
                  </div>}>
                  Content 1
                </Tab.Item>

                <Tab.Item
                  tabKey="2"
                  title={<div className='flex items-center'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <span className='ml-1'>Tab 2</span>
                  </div>}>
                  Content 2
                </Tab.Item>

                <Tab.Item
                  tabKey="3"
                  title={<div className='flex items-center'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className='ml-1'>Tab 3</span>
                  </div>}>
                  Content 3
                </Tab.Item>

              </Tab>
            </div>
          </div>
          <ShowCode code={TAB_CODE_DEMO_ICON} link={TAB_CODE_SANDBOX_ICON} />
        </div>

        {/* Tab position*/}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-normal">Tab with position</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Tab defaultActiveKey='2' activeKey="1" position="bottom">
                <Tab.Item tabKey="1" title="Tab 1">Bottom position 1</Tab.Item>
                <Tab.Item tabKey="2" title="Tab 2">Bottom position 2</Tab.Item>
                <Tab.Item tabKey="3" title="Tab 3">Bottom position 3</Tab.Item>
              </Tab>
            </div>
          </div>
          <ShowCode code={TAB_CODE_DEMO_POSITION} link={TAB_CODE_SANDBOX_POSITION} />
        </div>

        {/* Tab wrapper*/}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-normal">Tab with wrapper</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Tab defaultActiveKey='2' activeKey="1" isWrapper>
                <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
                <Tab.Item tabKey="2" title="Tab 2">Content 2</Tab.Item>
                <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
              </Tab>
            </div>
          </div>
          <ShowCode code={TAB_CODE_DEMO_WRAPPER} link={TAB_CODE_SANDBOX_WRAPPER} />
        </div>

        {/* Tab disabled*/}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-normal">Disabled tab</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Tab defaultActiveKey='2' activeKey="1">
                <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
                <Tab.Item tabKey="2" title="Tab 2" disabled>Content 2</Tab.Item>
                <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
              </Tab>
            </div>
          </div>
          <ShowCode code={TAB_CODE_DEMO_DISABLE} link={TAB_CODE_SANDBOX_DISABLE} />
        </div>

        {/* PROPS Tab*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-tab-props">Props</h3>
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Tab</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `Tab.Item, ReactNode`, defaultValue: ``, description: "Tab children" },
            { prop: 'separatorIcon', dataType: `string, JSX.Element`, defaultValue: `Arrow icon`, description: "Separator icon" },
          ]} />
        </div>

        {/* PROPS Tab Item*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300'>• Tab.Item</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Tab.Item children" },
            { prop: 'active', dataType: `boolean`, defaultValue: `false`, description: "Tab Item active" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-tab-normal', title: 'Tab' },
            { id: 'anchor-tab-icon', title: 'Tab with custom icon' },
            { id: 'anchor-tab-props', title: 'Props' },
          ]} />
        </div>
      </div>
    </div>
  )
}

export default TabUI