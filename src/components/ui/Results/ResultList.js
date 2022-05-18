//CONTEXT
import { useContext, useState } from "react";
import responseContext from "../../../context/ResponseContext";

//UI COMPONENTS
import { Container, Box, Heading, Text, Button, ScaleFade, useColorModeValue, Image, Flex} from "@chakra-ui/react";
import ResultCard from "./ResultCard";
import Overlay from "../Overlay";

//ASSETS
import Blob from "../../../assets/ui/Blob";
import empty from "../../../assets/void.svg";


export default function ResultList(){

    const {responses} = useContext(responseContext)
    const [isOpen, setIsOpen] = useState(false)
    
    let re_list = responses.map((r, index)=>{
        return (
             <ResultCard key={index} obj={r} index={index}/>
         )
     })
     
    const onClose = () => setIsOpen(false)

    return(

        <>
        <Overlay isOpen={isOpen} primary={"Response List"} children={re_list} onClose={onClose}/>
        <Container maxW={'xl'} alignItems='center' marginTop={{base:2, sm:6, lg:12}}>

            <Heading
            lineHeight={1.2}
            fontWeight={600}
            textStyle='h1'
            margin={6}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            >

             <Text
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '25%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'green.400',
                    zIndex: -1,
                }}>
                Responses
            </Text>

             <br />
             </Heading>
            
            {/*PREVIEW*/}

            {responses.slice(0,3).map((r, index)=>{
               return (
                    <ResultCard key={index} obj={r} index={index}/>
                )
            })}

            {
                responses.length>3? 
                (   
                    <ScaleFade initialScale={0.9} in={true}>
                    <Box textAlign="center"  alignItems={'center'}>

                    <Button 
                     onClick={()=>{setIsOpen(true)}}
                     textColor='white'
                     bg={'green.400'} 
                     maxWidth="100px"
                     _hover={{ bg: 'green.500' }} 
                     my={4}>
                        View all
                    </Button>

                    </Box>
                    </ScaleFade>
                ) : 
                (
                    ""
                )
            }

            {
                responses.length == 0 ? (

                    <>

                    <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    my={{base:6, sm:6, lg:20}}
                    w={'full'}>
          
                    <Blob
                      w={'150%'}
                      h={'150%'}
                      position={'absolute'}
                      top={'-20%'}
                      left={0}
                      zIndex={-1}
                      color={'green.100'}
                    />
          
                    <Box
                      width={'full'}
                      position={'relative'}
                      height={'300px'}
                      overflow={'hidden'}>
          
                      <Image
                        w={'100%'}
                        h={'100%'}
                        alt={'Illustration'}
                        align={'center'}
                        src={empty}
                      />

                    </Box>

                  </Flex>

                  <Text fontSize={{base:'xl', sm:'2xl', lg:'3xl'}} my={8} textAlign={'center'}>No responses yet.</Text>

                  </>
                ) : ""
            }

        </Container>
        </>
    )
}