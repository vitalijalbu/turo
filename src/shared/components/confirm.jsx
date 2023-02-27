


import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { IconArrowLeft, IconPlus } from '@tabler/icons-react';

const Confirm = (props) => {
  //console.log("props", props);
  return (
  <AlertDialog
    motionPreset='slideInBottom'
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    isOpen={isOpen}
    isCentered
  >
    <AlertDialogOverlay />

    <AlertDialogContent>
      <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
      <AlertDialogCloseButton />
      <AlertDialogBody>
        Are you sure you want to discard all of your notes? 44 words will be
        deleted.
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button ref={cancelRef} onClick={onClose}>
          No
        </Button>
        <Button colorScheme='red' ml={3}>
          Yes
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  );
};

export default Confirm;
