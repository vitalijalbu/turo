import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it" locale="it">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title> GardaToday - Le ultime notizie dal Lago di Garda</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="lago di garda, notizie, notizie dal lago, notizie, meteo garda, meteo padenghe, cronaca garda, gardatoday, garda, today, brescia, desenzano, sirmione, salò "
        />
        <meta
          name="description"
          content="GardaToday - Ultime notizie dal Lago di Garda"
        />
        <meta name="author" content="Publimax" />
        <meta name="robots" content="all" />
        <meta name="googlebot-news" content="all" />
        {/* facebook */}
        <meta property="fb:app_id" content={700063337878362} />
        <meta property="fb:pages" content={103609285198751} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://gardatoday.it/" />
        <meta
          property="og:title"
          content="GardaToday - Notizie giornaliere dal Lago di Garda"
        />
        <meta
          property="og:description"
          content="GardaToday - Notizie giornaliere dal Lago di Garda"
        />
        <meta
          property="og:image:secure_url"
          content="https://gardatoday.it/assets/images/static/placeholder-logo.jpeg"
        />
        <meta
          property="og:image"
          content="https://gardatoday.it/assets/images/static/placeholder-logo.jpeg"
        />
        <meta property="og:image:width" content={600} />
        <meta property="og:image:height" content={400} />
        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gardatoday.it/" />
        <meta
          property="twitter:title"
          content="GardaToday - Notizie giornaliere dal Lago di Garda"
        />
        <meta
          property="twitter:description"
          content="GardaToday - Notizie giornaliere dal Lago di Garda"
        />
        <meta
          property="twitter:image"
          content="https://gardatoday.it/assets/images/static/placeholder-logoss.jpeg"
        />
        {/* =========== Title ============= */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://gardatoday.it/rss/feed.xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
