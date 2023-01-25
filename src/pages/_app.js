import React from 'react';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import '@/assets/scss/app.scss';
import SiteMenu from '@/shared/partials/SiteMenu';
import Footer from '@/shared/partials/Footer';
import { theme } from '../../lib/theme';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

function MyApp({ Component, pageProps }) {
  return (
    <main id="main-app">
    <MantineProvider theme={theme} emotionCache={appendCache} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider>
      <SiteMenu/>
    <Component {...pageProps} />
    <Footer/>
    </NotificationsProvider>
  </MantineProvider>
  </main>
  )
}

export default MyApp
