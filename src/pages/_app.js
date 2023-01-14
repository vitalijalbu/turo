import React from 'react';
import { MantineProvider, createEmotionCache } from '@mantine/core';

import '@/assets/scss/app.scss';
import SiteMenu from '@/shared/partials/SiteMenu';
import Footer from '@/shared/partials/Footer';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider theme={{ primaryShade: 9 }} emotionCache={appendCache} withGlobalStyles withNormalizeCSS>
      <SiteMenu/>
    <Component {...pageProps} />
    <Footer/>
  </MantineProvider>
  )
}

export default MyApp
