import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Button,
    ModalCloseButton,
  } from '@chakra-ui/react'


export default function Overlay({isOpen, onClose, primary, secondary, children, ...props}){

    
    return (
        <Modal scrollBehavior='inside' size={'xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{primary}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> 
            {secondary? (secondary.prompt) + ": " : ""}
            <i>{secondary ? secondary.response : ""}</i>
            {children ? children : ""}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}