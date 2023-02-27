import React from 'react';

import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

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
    <AlertDialog
        motionPreset='slideInBottom'
        onClose={() => onClose(false)}
        isOpen
        isCentered
    >
      <AlertDialogContent>
        {title}
      </AlertDialogContent>
      {!!message && (
        <AlertDialogBody className="p-4 text-center">
          <p className="text-muted">{message}</p>
        </AlertDialogBody>
      )}
      <AlertDialogFooter>{buttonsContent}</AlertDialogFooter>
    </AlertDialog>
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
  buttonsComponent: null
};

export default PopupConfirm;