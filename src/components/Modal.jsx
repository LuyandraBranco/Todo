import React from 'react';

export function Modal({ closeModal, children }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
