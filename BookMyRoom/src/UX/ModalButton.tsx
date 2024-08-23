import React from 'react';

interface ModalButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="modal-button">
      {children}
    </button>
  );
};

export default ModalButton;
