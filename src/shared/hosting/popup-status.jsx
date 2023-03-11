
import Link from "next/link";
import data from "@/data/entry.status.json";
import React, { useState, useRef } from "react";
import {
  Button,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react"



const PopupStatus = ({ opened, toggle, id }) => {

  return (
    <Modal
    isCentered
    onClose={toggle}
    isOpen={opened}
    motionPreset="slideInBottom"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
      {`Imposta stato dell'annuncio #${id}`}
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>
    
      <div className="list no-hairlines">
        <ul>
          {data.map((item) => (
            <li>
             <Radio name="status" value={item.slug}>
              {item.label}
            </Radio>
          </li>
          
          ))}
        </ul>
      </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="outline" onClick={toggle} mr="2">Chiudi</Button>
        <Button colorScheme="blue">Salva</Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PopupStatus;
