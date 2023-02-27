import React from 'react';
import '@/assets/scss/index.scss';
import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "@/lib/theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <main id="main-app">
      <Header/>
    <Component {...pageProps} />
    <Footer/>
  </main>
  </ChakraProvider>
  )
}

export default App
