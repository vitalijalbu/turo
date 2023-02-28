import { useRouter } from "next/router";
import {   Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button } from "@chakra-ui/react";

const PopupLayout = ({ children, urlClose }) => {
  const router = useRouter();

  const onClose = () => {
    router.push(urlClose);
  };
  return (
    <Modal 
    isOpen 
    onClose={onClose}
    size={"full"}
    motionPreset="slideInBottom">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton size='lg'/>
      </ModalHeader>
      <ModalBody>
      {children} 
      </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PopupLayout;
