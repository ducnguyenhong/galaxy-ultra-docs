import Switch from '@galaxy-ultra/switch'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  SWITCH_CODE_DEMO_CURSOR,
  SWITCH_CODE_DEMO_CUSTOM_COLOR,
  SWITCH_CODE_DEMO_DISABLED,
  SWITCH_CODE_DEMO_LABEL,
  SWITCH_CODE_DEMO_NORMAL,
  SWITCH_CODE_DEMO_SIZE,
  SWITCH_CODE_IMPORT,
  SWITCH_CODE_SANDBOX_CURSOR,
  SWITCH_CODE_SANDBOX_CUSTOM_COLOR,
  SWITCH_CODE_SANDBOX_DISABLED,
  SWITCH_CODE_SANDBOX_LABEL,
  SWITCH_CODE_SANDBOX_NORMAL,
  SWITCH_CODE_SANDBOX_SIZE
} from 'data/components/switch/switch.data'
import Head from 'next/head'

const SwitchUI: React.FC = () => {

  return <div className='grid grid-cols-4 gap-x-20 w-full'>
    <Head>
      <title>Galaxy Ultra UI | Switch</title>
    </Head>

    <div className='col-span-4 lg:col-span-3'>
      {/* Import  */}
      <div>
        <h3 className='font-semibold text-teal-400 text-xl'>Switch</h3>
        <div className='mt-5'>
          <HighlightCode code={SWITCH_CODE_IMPORT} showCopy />
        </div>
      </div>

      {/* Switch */}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-normal">Switch</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Switch checked />
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_NORMAL} link={SWITCH_CODE_SANDBOX_NORMAL} />
      </div>

      {/* Switch size*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-size">Switch with size</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <div>
              <label className='block mb-1 dark:text-gray-300'>Small</label>
              <Switch size='small' checked />
            </div>
            <div className='mt-7'>
              <label className='block mb-1 dark:text-gray-300'>Normal</label>
              <Switch size='normal' checked />
            </div>
            <div className='mt-7'>
              <label className='block mb-1 dark:text-gray-300'>Large</label>
              <Switch size='large' checked />
            </div>
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_SIZE} link={SWITCH_CODE_SANDBOX_SIZE} />
      </div>

      {/* Switch color*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-custom-color">Switch with custom color</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Switch checkedColor="bg-red-500" unCheckedColor='bg-green-500' />
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_CUSTOM_COLOR} link={SWITCH_CODE_SANDBOX_CUSTOM_COLOR} />
      </div>

      {/* Switch with label*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-label">Switch with label</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Switch
              checked
              label={
                {
                  checked: <span className='dark:text-gray-300'>Active</span>,
                  unChecked: <span className='dark:text-gray-300'>Inactive</span>,
                  position: 'right'
                }
              } />
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_LABEL} link={SWITCH_CODE_SANDBOX_LABEL} />
      </div>

      {/* Switch with cursor auto*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-cursor">Switch with cursor auto</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Switch checked cursor='auto' />
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_CURSOR} link={SWITCH_CODE_SANDBOX_CURSOR} />
      </div>

      {/* Switch disabled*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-disabled">Disabled switch</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <div>
              <Switch checked disabled />
            </div>
            <div className='mt-7'>
              <Switch disabled />
            </div>
          </div>
        </div>
        <ShowCode code={SWITCH_CODE_DEMO_DISABLED} link={SWITCH_CODE_SANDBOX_DISABLED} />
      </div>

      {/* PROPS Switch*/}
      <div className="mt-20">
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-switch-props">Props</h3>
        <TableDocs data={[
          { prop: 'checked', dataType: `boolean`, defaultValue: `false`, description: "Switch status" },
          { prop: 'size', dataType: `"small" , "normal" , "large"`, defaultValue: `"normal"`, description: "Switch size" },
          { prop: 'cursor', dataType: `"pointer", "auto"`, defaultValue: `"pointer"`, description: "Switch cursor" },
          { prop: 'disabled', dataType: `boolean`, defaultValue: `false`, description: "Switch disable" },
          { prop: 'checkedColor', dataType: `string`, defaultValue: `bg-blue-500`, description: "Switch checked color by Tailwind class" },
          { prop: 'unCheckedColor', dataType: `string`, defaultValue: `bg-green-500`, description: "Switch unchecked color by Tailwind class" },
          { prop: 'onChange', dataType: `(checked: boolean) => void`, defaultValue: `bg-gray-300`, description: "Event on change status" },
          {
            prop: 'label',
            dataType: `Object type include:
  • checked: string, JSX.Element;
  • unChecked: string, JSX.Element;
  • position: "left", "right", "top", "bottom";`,
            defaultValue: ``,
            description: "Switch label",
            preWrap: true,
          },
        ]} />
      </div>
    </div>

    <div className='hidden lg:block lg:col-span-1'>
      <div className="sticky right-0 top-32">
        <DocsAnchor items={[
          { id: 'anchor-switch-normal', title: 'Switch' },
          { id: 'anchor-switch-size', title: 'Switch with size' },
          { id: 'anchor-switch-custom-color', title: 'Switch with custom color' },
          { id: 'anchor-switch-label', title: 'Switch with label' },
          { id: 'anchor-switch-cursor', title: 'Switch with cursor auto' },
          { id: 'anchor-switch-disabled', title: 'Disabled switch' },
          { id: 'anchor-switch-props', title: 'Props' },
        ]} />
      </div>
    </div>
  </div >
}

export default SwitchUI