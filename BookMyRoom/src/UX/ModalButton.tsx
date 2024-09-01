import React from 'react';

type ModalButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
}

const ModalButton  = ({ children, onClick }:ModalButtonProps) => {
  return (
    <button onClick={onClick} className="modal-button">
      {children}
    </button>
  );
};

export default ModalButton;
