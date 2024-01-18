import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay } from './AddContactModal.styled';
import ContactFormModal from '../ContactFormModal/ContactFormModal';

const modalRoot = document.getElementById('modal-root');

const AddContactModal = ({ closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackDropClick = e => {
    if (e.target.id === 'overlay') closeModal();
  };

  return createPortal(
    <Overlay id="overlay" onClick={handleBackDropClick}>
      <ContactFormModal closeModal={closeModal}></ContactFormModal>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;
