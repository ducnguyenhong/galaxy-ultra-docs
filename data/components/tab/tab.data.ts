export const TAB_CODE_SANDBOX_NORMAL = 'https://codesandbox.io/s/galaxy-ultra-tab-0lkd8';
export const TAB_CODE_SANDBOX_ICON = 'https://codesandbox.io/s/galaxy-ultra-tab-vlyee';
export const TAB_CODE_SANDBOX_POSITION = 'https://codesandbox.io/s/galaxy-ultra-tab-t6s56';
export const TAB_CODE_SANDBOX_WRAPPER = 'https://codesandbox.io/s/galaxy-ultra-tab-s6q1r';
export const TAB_CODE_SANDBOX_DISABLE = 'https://codesandbox.io/s/galaxy-ultra-tab-cykl3';

export const TAB_CODE_IMPORT = `import Tab from "@galaxy-ultra/tab"`;

export const TAB_CODE_DEMO_NORMAL = `<Tab defaultActiveKey='2' activeKey="1">
    <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
    <Tab.Item tabKey="2" title="Tab 2">Content 2</Tab.Item>
    <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
</Tab>`;

export const TAB_CODE_DEMO_ICON = `<Tab defaultActiveKey='2' activeKey="1">
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
</Tab>`;

export const TAB_CODE_DEMO_POSITION = `<Tab defaultActiveKey='2' activeKey="1" position="bottom">
    <Tab.Item tabKey="1" title="Tab 1">Bottom position 1</Tab.Item>
    <Tab.Item tabKey="2" title="Tab 2">Bottom position 2</Tab.Item>
    <Tab.Item tabKey="3" title="Tab 3">Bottom position 3</Tab.Item>
</Tab>`;

export const TAB_CODE_DEMO_WRAPPER = `<Tab defaultActiveKey='2' activeKey="1" isWrapper>
    <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
    <Tab.Item tabKey="2" title="Tab 2">Content 2</Tab.Item>
    <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
</Tab>`;

export const TAB_CODE_DEMO_DISABLE = `<Tab defaultActiveKey='2' activeKey="1">
    <Tab.Item tabKey="1" title="Tab 1">Content 1</Tab.Item>
    <Tab.Item tabKey="2" title="Tab 2" disabled>Content 2</Tab.Item>
    <Tab.Item tabKey="3" title="Tab 3">Content 3</Tab.Item>
</Tab>`;
