import React from 'react';

import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from 'reactstrap';

const PopupConfirm = ({
  size,
  title,
  onClose,
  message,
  className,
  cancelText,
  confirmText,
  cancelColor,
  confirmColor,
  buttonsComponent,
}) => {
  let buttonsContent = (
    <>
      {cancelText && (
        <Button color={cancelColor} onClick={() => onClose(false)}>
          {cancelText}
        </Button>
      )}{' '}
      <Button color={confirmColor} onClick={() => onClose(true)}>
        {confirmText}
      </Button>
    </>
  );

  if (buttonsComponent) {
    const CustomComponent = buttonsComponent;
    buttonsContent = <CustomComponent onClose={onClose} />;
  }

  return (
    <Modal
      isOpen
      centered
      size={size}
      fade={false}
      toggle={() => onClose(false)}
      className={`confirm-modal ${className}`}
    >
      <ModalHeader>
        {title}
      </ModalHeader>
      {!!message && (
        <ModalBody className="p-4 text-center">
          <h4 className="text-muted">{message}</h4>
        </ModalBody>
      )}
      <ModalFooter>{buttonsContent}</ModalFooter>
    </Modal>
  );
};

PopupConfirm.defaultProps = {
  message: 'Are you sure?',
  title: 'Warning!',
  confirmText: 'Ok',
  cancelText: '',
  confirmColor: 'primary',
  cancelColor: 'light',
  className: '',
  buttonsComponent: null,
  size: 'sm',
};

export default PopupConfirm;