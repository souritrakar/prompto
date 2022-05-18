import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';

const Links = [{'name':'About', 'href': '#'}, {'name': 'Doc', 'href' : 'https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit'}];

const NavLink = ({children, href}) => (
  <Link
    px={2}
    py={1}
    fontWeight="semibold"
    rounded={'md'}
    isExternal
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Text textStyle={'h1'} fontSize='2xl'>Prompto</Text>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Button>
              <MoonIcon />
              </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.href}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
