//LOGICAL
import React, { useContext, useState } from "react";
import responseContext from "../../../context/ResponseContext";

//COMPONENTS
import {
  Box,
  Text,
  IconButton,
  Button,
  Stack,
  Flex,
  ScaleFade,
  Tooltip,

} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import Overlay from "../Overlay";


export default function ResultCard({obj, index}){

   const context = useContext(responseContext)
   const [isOpen, setIsOpen] = useState(false)
   const onClose = () => setIsOpen(false)

   const deleteResponse = () =>{

      context.dispatchUserEvent('DELETE', {}, index)
   }

    return(

      <>
      <Overlay isOpen={isOpen} primary={"Response"} secondary={obj} onClose={onClose}/>
      <ScaleFade initialScale={0.9} in={true} reverse={true}>
       <Box
        p={4}
        display={{ md: "flex" }}
        maxWidth="32rem"
        borderWidth={1}
        margin={2}
        boxShadow={'lg'}
        rounded={'xl'}
        >

      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >

        <Text
          my={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          noOfLines={1}

        >
        Prompt: {obj.prompt}
        </Text>
        <i><Text ital my={2} color="gray.500" noOfLines={2}>
        {obj.response}   
        </Text></i>

        <Flex justifyContent={'space-between'}>
        <Button onClick={()=>{setIsOpen(true)}} maxWidth="100px" my={2} mr={{lg:80, base:10, sm:10}}>
          View full
        </Button>

        <Tooltip label='Delete response' rounded={'md'} placement='right-start'>
          <IconButton onClick={()=>{deleteResponse()}} my={2} color='red.500' aria-label='Delete response' icon={<DeleteIcon />} />
        </Tooltip>

        </Flex>
      </Stack>
    </Box>
    </ScaleFade>
    </>

    )
}