import React, { useState, useEffect } from "react";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

const PopupMap = ({ opened, toggle }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [open, setOpen] = useState("");
  const toggleMenu = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  }

  const FOCUS_QUERY = `query{
    categories(group: "news", show_in_menu:true) {
      id
      title
      slug
    }
  }
  `;




async function getData() {
  try {
    const response = await graphQLClient.request(FOCUS_QUERY);
    if (response) {
      setData(response);
    }
  } catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  getData();
}, []);



  return (
    <Modal
    size={'full'}
        onClose={toggle}
        isOpen={opened}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title
          <ModalCloseButton />
          </ModalHeader>
          
          <ModalBody>
            dsdvsevsw
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={toggle}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default PopupMap;

