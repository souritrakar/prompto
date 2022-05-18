import { InfoIcon } from '@chakra-ui/icons';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';


import illustration from "../../assets/illustration.svg"
import Blob from '../../assets/ui/Blob';

export default function Hero({refProp}) {

  const executeScroll = () => {
    refProp?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    refProp?.current.focus()
  }

  return (
    
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.2}
            fontWeight={600}
            textStyle='h1'
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
              AI-Generated,
            </Text>
            <br />
            <Text as={'span'} color={'green.400'}>
              prompt completions
            </Text>
          </Heading>
          <Text  color={'gray.500'}>
            Prompto leverages the power of OpenAI's 
            <Tooltip placement={'top'} label={'Generative Pre-trained Transformer'}>
              <strong style={{cursor:'pointer'}}> GPT-3 </strong>
            </Tooltip> 
              machine learning language model to generate results for prompts entered by the user - from writing poems to suggesting video ideas! This app uses the <strong>text-curie-001 engine.</strong>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              onClick={()=>{executeScroll()}}
              rounded={'lg'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              py={6}
              textColor='white'
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Try it out
            </Button>

            <Button
              rounded={'lg'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<InfoIcon h={4} w={4} color={'gray.300'} />}>
              More about Project
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>

          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
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
              src={illustration}
            />

          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
