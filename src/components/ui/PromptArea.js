import React, {useContext, useState} from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    Button,
    Textarea,
    useToast,
    Flex,
  } from '@chakra-ui/react';

import { ArrowForwardIcon } from "@chakra-ui/icons";

import {postData} from "../../api/ApiCall"
import responseContext from "../../context/ResponseContext";
import ResultList from "./Results/ResultList";
import Overlay from "./Overlay";

export default function PromptArea({refProp}){

    //CONTEXT 
    const context = useContext(responseContext)

    //STATE
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [loading,setLoading] = useState(false)

    //OTHER
    const toast = useToast()
    const onClose = () => setIsOpen(false)

    const generateResults =  ()=> {

      let data={
        prompt:prompt.trim(),
        temperature:0.5,
        max_tokens:64,
        top_p:1.0,
        frequency_penalty:0.0,
        presence_penalty:0.0
      }

      if(prompt.length>0 && prompt.length <=225){
        setLoading(true)
        postData(data).then(({data})=>{

          let value = (data?.choices[0].text.trim())
          setResponse(value)

          let response_obj = {
            response:value,
            prompt:prompt
          }

          setLoading(false)
          setIsOpen(true)
          setPrompt("")
          
          context.dispatchUserEvent("ADD", response_obj, null)
          
        }).catch(err=>{
          setLoading(false)
          alert(err)
        })
      }

      else{
        toast({
          title: `Character number range: 0-225`,
          position: 'top-right',
          isClosable: true,
          status:'error',
          variant:'left-accent' 
        })
      }
    }

    

    return (
        <responseContext.Consumer>
          {()=>(
            <>
            <Overlay isOpen={isOpen} onClose={onClose} primary={"Result"} secondary={{
              response:response,
              prompt:prompt}}
            />
            <Flex flexDir={{base:'column', sm:'column', lg:'row'}} mb={{lg:20, base:16, sm:16}}>
            <Container maxW={'2xl'} marginTop={{base:2, sm:6}} alignItems='center'>
    
                <Box marginTop={{base:2, sm:6, lg:16}}>
                  <Heading
                   lineHeight={1.1}
                   fontWeight={600}
                   textAlign="left"
                   textStyle='h1'
                   fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                   >
      
                    <Text 
                    bgClip='text' 
                    fontWeight={600} 
                    bgGradient='linear(to-l, green.500, blue.500)'>

                      Fun with GPT-3
                    </Text>

                  </Heading>
                </Box>
    
                <Textarea
                  ref={refProp}
                  marginTop={6}
                  onChange={(e)=>{setPrompt(e.target.value)}}
                  value={prompt}
                  height={'md'}
                  rounded='lg'
                  placeholder='Enter your prompt here'
                  size={'lg'}
                  resize={'none'}
                  maxLength={225}
                />
     
                <Button
                  onClick={()=>{generateResults()}}
                  rightIcon={<ArrowForwardIcon />}
                  marginTop={{base:2, sm:6, lg:8}}
                  rounded={'lg'}
                  size={'lg'}
                  fontWeight={'semibold'}
                  w={'full'}
                  py={8}
                  textColor='white'
                  bg={'green.400'}
                  isLoading={loading}
                  loadingText='Generating...'
                  spinnerPlacement='end'
                  _hover={{ bg: 'green.500' }}>
                    Generate prompt
                </Button>
    
            </Container>

            <ResultList/>

            </Flex>

            </>
          )}
        
        </responseContext.Consumer>
    )
}