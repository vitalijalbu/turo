import React, { useState, useEffect, useCallback } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback(
    (e) => {
      const scrollTop = window.scrollY;
      const offsetHeight = 80;
      if (scrollTop > offsetHeight) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    },
    [scrolled]
  );

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);


  return (
    <Html lang="it">
      <Head>
        <title>Turo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
          integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
          crossorigin=""
        ></script>
      </Head>
      <body className={scrolled ? 'sticky' : null}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
