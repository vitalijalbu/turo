import React from 'react';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import '@/assets/scss/index.scss';
import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/Footer';


const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

function MyApp({ Component, pageProps }) {
  return (
    <main id="main-app">
    <MantineProvider>
      <NotificationsProvider>
      <Header/>
    <Component {...pageProps} />
    <Footer/>
    </NotificationsProvider>
  </MantineProvider>
  </main>
  )
}

export default MyApp
