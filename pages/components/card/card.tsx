import Card from '@galaxy-ultra/card'
import DocsAnchor from 'components/anchor-docs'
import HighlightCode from 'components/highlight-syntax'
import ShowCode from 'components/show-code'
import TableDocs from 'components/table-docs-props'
import {
  CARD_CODE_DEMO_IMAGE_POSITION,
  CARD_CODE_DEMO_IMAGE_RATIO,
  CARD_CODE_DEMO_NORMAL,
  CARD_CODE_DEMO_SIZE,
  CARD_CODE_IMPORT,
  CARD_CODE_SANDBOX_IMAGE_POSITION,
  CARD_CODE_SANDBOX_IMAGE_RATIO,
  CARD_CODE_SANDBOX_NORMAL,
  CARD_CODE_SANDBOX_SIZE
} from 'data/components/card/card.data'
import Head from 'next/head'

const CardUI: React.FC = () => {

  return <div className='grid grid-cols-4 gap-x-20 w-full'>
    <Head>
      <title>Galaxy Ultra UI | Card</title>
    </Head>

    <div className='col-span-4 lg:col-span-3'>
      <div>
        <h3 className='font-semibold text-teal-400 text-xl'>Card</h3>
        <div className='mt-5'>
          <HighlightCode code={CARD_CODE_IMPORT} showCopy />
        </div>
      </div>

      {/* CARD */}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-card-normal">Card</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Card title='Card title'>
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
        </div>
        <ShowCode code={CARD_CODE_DEMO_NORMAL} link={CARD_CODE_SANDBOX_NORMAL} />
      </div>

      {/* CARD SIZE */}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-card-size">Card with size</h3>
        <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
          <div>
            <Card title='SMALL size' size='small'>
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
          <div className='mt-10'>
            <Card title='NORMAL size' size='normal'>
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
          <div className='mt-10'>
            <Card title='LARGE size' size='large'>
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
          <div className='mt-10'>
            <Card title='FULL size' size='full'>
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
        </div>
        <ShowCode code={CARD_CODE_DEMO_SIZE} link={CARD_CODE_SANDBOX_SIZE} />
      </div>

      {/* CARD WITH IMAGE POSITION*/}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-card-image">Card with image</h3>
        <h3 className='font-semibold mb-5 text-xl dark:text-gray-300' id="anchor-card-image-position">• Image position</h3>
        <div className='flex justify-center items-center border dark:border-gray-600 rounded px-5 py-10'>
          <div>
            <Card title='Card with top image'
              image={{
                src: 'https://nhduc.net/assets/common/img-preview.png',
                position: 'top'
              }}
            >
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
          <div className='ml-32'>
            <Card title='Card with bottom image'
              image={{
                src: 'https://nhduc.net/assets/common/img-preview.png',
                position: 'bottom'
              }}
            >
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
        </div>
        <ShowCode code={CARD_CODE_DEMO_IMAGE_POSITION} link={CARD_CODE_SANDBOX_IMAGE_POSITION} />
      </div>

      {/* CARD WITH IMAGE RATIO */}
      <div className='mt-20'>
        <h3 className='font-semibold mb-5 text-xl dark:text-gray-300' id="anchor-card-image-ratio">• Image ratio</h3>
        <div className='flex items-center border rounded dark:border-gray-600 p-10 justify-center'>
          <div>
            <Card
              title='Card with ratio 16/9 image'
              size='small'
              image={{
                src: 'https://nhduc.net/assets/common/img-preview.png',
                ratio: '16/9'
              }}
            >
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>

          <div className='mx-10'>
            <Card
              title='Card with ratio auto image'
              size='small'
              image={{
                src: 'https://nhduc.net/assets/common/img-preview.png',
                ratio: 'auto'
              }}
            >
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>

          <div>
            <Card
              title='Card with ratio 1/1 image'
              size='small'
              image={{
                src: 'https://nhduc.net/assets/common/img-preview.png',
                ratio: '1/1'
              }}
            >
              <p className='text-gray-600 text-sm text-justify'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Card>
          </div>
        </div>
        <ShowCode code={CARD_CODE_DEMO_IMAGE_RATIO} link={CARD_CODE_SANDBOX_IMAGE_RATIO} />
      </div>

      {/* PROPS */}
      <div className="mt-20">
        <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-card-props">Props</h3>
        <TableDocs data={[
          { prop: 'children', dataType: `ReactNode`, defaultValue: ``, description: "Card children" },
          { prop: 'size', dataType: `"small" , "normal" , "large" , "full"`, defaultValue: `"normal"`, description: "Card size" },
          { prop: 'title', dataType: `string`, defaultValue: ``, description: "Card title" },
          {
            prop: 'image',
            dataType: `Object type include:
  • src: string;
  • position: "top", "bottom";
  • ratio: "auto", "1/1", "16/9";`,
            defaultValue: ``,
            description: "Card image",
            preWrap: true,
          },
          { prop: 'rounded', dataType: `"sm", "nm", "md", "lg", "xl", "none"`, defaultValue: `"nm"`, description: "Border radius of card" },
          { prop: 'shadow', dataType: `"sm", "nm", "md", "lg", "xl", "none"`, defaultValue: `"nm"`, description: "Box shadow of card" },
          { prop: 'border', dataType: `boolean`, defaultValue: `false`, description: "Border of card" },
        ]} />
      </div>
    </div>

    <div className='hidden lg:block lg:col-span-1'>
      <div className="sticky right-0 top-32">
        <DocsAnchor items={[
          { id: 'anchor-card-normal', title: 'Card' },
          { id: 'anchor-card-size', title: 'Card with size' },
          { id: 'anchor-card-image', title: 'Card with image' },
          { id: 'anchor-card-image', title: 'Image position', secondary: true },
          { id: 'anchor-card-image-ratio', title: 'Image ratio', secondary: true },
          { id: 'anchor-card-props', title: 'Props' },
        ]} />
      </div>
    </div>
  </div >
}

export default CardUI