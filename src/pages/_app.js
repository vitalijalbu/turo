import React from 'react';
import '@/assets/scss/index.scss';
import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';


function App({ Component, pageProps }) {
  return (
    <main id="main-app">
      <Header/>
    <Component {...pageProps} />
    <Footer/>
  </main>
  )
}

export default App
