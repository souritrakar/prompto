import * as React from 'react'
import theme from './theme'
import  Fonts  from "./Fonts"
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from './context/ContextProvider'
import MainApp from './MainApp'

export default function App() {
  return (
    <ContextProvider>
    <ChakraProvider theme={theme}>
      <Fonts/>
      <MainApp/>
    </ChakraProvider>
    </ContextProvider>
  )
}