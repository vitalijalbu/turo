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
        <title> Turo</title>
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
