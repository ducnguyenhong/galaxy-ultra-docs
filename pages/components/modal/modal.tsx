import Button from '@galaxy-ultra/button';
import Modal from '@galaxy-ultra/modal';
import DocsAnchor from 'components/anchor-docs';
import HighlightCode from 'components/highlight-syntax';
import ShowCode from 'components/show-code';
import TableDocs from 'components/table-docs-props';
import { MODAL_CODE_DEMO_NORMAL, MODAL_CODE_IMPORT, MODAL_CODE_SANDBOX_NORMAL } from 'data/components/modal/modal.data';
import Head from 'next/head';
import { useState } from 'react';

const ModalUI: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalSizeSM, setShowModalSizeSM] = useState<boolean>(false);
  const [showModalSizeMD, setShowModalSizeMD] = useState<boolean>(false);
  const [showModalSizeLG, setShowModalSizeLG] = useState<boolean>(false);
  const [showModalSizeXL, setShowModalSizeXL] = useState<boolean>(false);
  const [showModalPositionTop, setShowModalPositionTop] = useState<boolean>(false);
  const [showModalPositionCenter, setShowModalPositionCenter] = useState<boolean>(false);

  return (
    <div className='grid grid-cols-4 gap-x-20 w-full'>
      <Head>
        <title>Galaxy Ultra UI | Modal</title>
      </Head>

      <div className='col-span-4 lg:col-span-3'>
        {/* Import  */}
        <div>
          <h3 className='font-semibold text-teal-400 text-xl'>Modal</h3>
          <div className='mt-5'>
            <HighlightCode code={MODAL_CODE_IMPORT} showCopy />
          </div>
        </div>

        {/* Modal */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-modal-normal">Modal</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <Button onClick={() => setShowModal(true)} variant="success">
                Open modal
              </Button>
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>Modal Title</Modal.Header>
                <Modal.Body>
                  <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </Modal.Body>
                <Modal.Footer />
              </Modal>
            </div>
          </div>
          <ShowCode code={MODAL_CODE_DEMO_NORMAL} link={MODAL_CODE_SANDBOX_NORMAL} />
        </div>

        {/* Modal Size */}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-modal-size">Modal size</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <div className='grid grid-cols-4 gap-x-10'>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalSizeSM(true)} variant="primary">
                    Size SM
                  </Button>
                </div>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalSizeMD(true)} variant="success">
                    Size MD
                  </Button>
                </div>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalSizeLG(true)} variant="danger">
                    Size LG
                  </Button>
                </div>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalSizeXL(true)} variant="dark">
                    Size XL
                  </Button>
                </div>
              </div>
              <div>
                <Modal show={showModalSizeSM} onClose={() => setShowModalSizeSM(false)} size="sm">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>

                <Modal show={showModalSizeMD} onClose={() => setShowModalSizeMD(false)} size="md">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>

                <Modal show={showModalSizeLG} onClose={() => setShowModalSizeLG(false)} size="lg">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>

                <Modal show={showModalSizeXL} onClose={() => setShowModalSizeXL(false)} size="xl">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-5'>
            <span>See full <span className='text-teal-500 font-medium'>size</span> at <span className='font-semibold'>Props</span></span>
          </div>
        </div>

        {/* Modal Position*/}
        <div className='mt-20'>
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-modal-position">Modal position</h3>
          <div className='flex items-center border dark:border-gray-600 rounded px-5 py-10 flex-col'>
            <div>
              <div className='grid grid-cols-2 gap-x-10'>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalPositionTop(true)} variant="success">
                    Top modal
                  </Button>
                </div>
                <div className="col-span-1">
                  <Button onClick={() => setShowModalPositionCenter(true)} variant="danger">
                    Center modal
                  </Button>
                </div>
              </div>

              <div>
                <Modal show={showModalPositionTop} onClose={() => setShowModalPositionTop(false)} position="top">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>

                <Modal show={showModalPositionCenter} onClose={() => setShowModalPositionCenter(false)} position="center">
                  <Modal.Header>Modal Title</Modal.Header>
                  <Modal.Body>
                    <div className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </Modal.Body>
                  <Modal.Footer />
                </Modal>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-5'>
            <span>See full <span className='text-teal-500 font-medium'>position</span> at <span className='font-semibold'>Props</span></span>
          </div>
        </div>

        {/* PROPS Modal*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-3xl dark:text-gray-300' id="anchor-modal-props">Props</h3>
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300' id="anchor-modal-props-modal">• Modal</h3>
          <TableDocs data={[
            { prop: 'children', dataType: `Modal.Header, Modal.Body, Modal.Footer`, defaultValue: ``, description: "Modal children" },
            { prop: 'show', dataType: `boolean`, defaultValue: `false`, description: "Modal status", required: true },
            { prop: 'size', dataType: `"sm", "md", "lg", "xl"`, defaultValue: `"md"`, description: "Modal size" },
            { prop: 'zIndex', dataType: `number`, defaultValue: `1000`, description: "Modal z index" },
            { prop: 'position', dataType: `"top", "center"`, defaultValue: `"top"`, description: "Modal position" },
            { prop: 'closeOutside', dataType: `boolean`, defaultValue: `false`, description: "Close modal when click outside" },
            { prop: 'onClose', dataType: `() => void`, defaultValue: ``, description: "Event on close modal" },
            { prop: 'onConfirm', dataType: `() => void`, defaultValue: ``, description: "Event on confirm modal" },
          ]} />
        </div>

        {/* PROPS Modal Header*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300' id="anchor-modal-props-header">• Modal.Header</h3>
          <TableDocs data={[
            { prop: 'closeButton', dataType: `boolean`, defaultValue: `true`, description: "Icon close modal on header" },
            { prop: 'separator', dataType: `boolean`, defaultValue: `true`, description: "Separator between header and body" },
          ]} />
        </div>

        {/* PROPS Modal Footer*/}
        <div className="mt-20">
          <h3 className='font-semibold mb-5 text-xl dark:text-gray-300' id="anchor-modal-props-footer">• Modal.Footer</h3>
          <TableDocs data={[
            { prop: 'defaultFooter', dataType: `boolean`, defaultValue: `true`, description: "Default footer UI with Close Button & Confirm Button" },
            { prop: 'separator', dataType: `boolean`, defaultValue: `true`, description: "Separator between footer and body" },
            { prop: 'confirmTitle', dataType: `string`, defaultValue: `"Confirm"`, description: "Title of Confirm Button (works with defaultFooter=true)" },
            { prop: 'cancelTitle', dataType: `string`, defaultValue: `"Cancel"`, description: "Title of Cancel Button (works with defaultFooter=true)" },
          ]} />
        </div>
      </div>

      <div className='hidden lg:block lg:col-span-1'>
        <div className="sticky right-0 top-32">
          <DocsAnchor items={[
            { id: 'anchor-modal-normal', title: 'Modal' },
            { id: 'anchor-modal-size', title: 'Modal size' },
            { id: 'anchor-modal-position', title: 'Modal position' },
            { id: 'anchor-modal-props', title: 'Props' },
            { id: 'anchor-modal-props-modal', title: 'Modal', secondary: true },
            { id: 'anchor-modal-props-header', title: 'Modal.Header', secondary: true },
            { id: 'anchor-modal-props-footer', title: 'Modal.Footer', secondary: true },
          ]} />
        </div>
      </div>
    </div >
  )
}

export default ModalUI