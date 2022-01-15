export const MODAL_CODE_IMPORT = `import Modal from "@galaxy-ultra/modal"`;

export const MODAL_CODE_DEMO_NORMAL = `const [showModal, setShowModal] = useState(false);

<button onClick={() => setShowModal(true)}>
  Open modal
</button>

<Modal show={showModal} onClose={() => setShowModal(false)}>
  <Modal.Header>Modal Title</Modal.Header>
  <Modal.Body>
    <div className="text-justify">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
  </Modal.Body>
  <Modal.Footer />
</Modal>
`;

export const MODAL_CODE_SANDBOX_NORMAL = 'https://codesandbox.io/s/galaxy-ultra-modal-minwe';
