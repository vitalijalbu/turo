import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Grid, Container, Divider, Group, Anchor, Title, Text } from "@mantine/core";
const Navigation = [
  {
    id: "utils",
    title: "Link utili",
    links: [
      {
        exact: true,
        label: "Il mio account",
        url: "/account",
      },
      {
        exact: true,
        label: "Piano",
        url: "/settings/billing",
      },
      {
        exact: false,
        label: "Impostazioni",
        url: "/settings",
      },
      {
        exact: false,
        label: "Pubblicità",
        url: "/advertsing",
      },
    ],
  },
  {
    id: "general",
    title: "Generale",
    links: [
      {
        label: "Cerca",
        url: "/search",
      },
      {
        label: "Hosts",
        url: "/hosts",
      },
      {
        label: "Piani e prezzi",
        url: "/pricing",
      },
      {
        label: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    id: "help",
    title: "Aiuto",
    links: [
      {
        label: "Assistenza",
        url: "/help",
      },
      {
        label: "Feedback",
        url: "mailto:partner@ceebo.com?subject=Feedback Ceebo Partner",
        external: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="main-footer">
      <Container size="xl">
        <Grid>
        <Grid.Col md={3} xs={12} lg={3}>
        <Link href="/" className="site-logo"><img src="https://beta.resthotels.it/web/static/logo-white.svg" className="site-logo__img"/></Link>
          </Grid.Col>
          {Navigation.map((nav, i) => (
            <Grid.Col md={3} xs={6} lg={3}>
              <Title order={3} key={i} className="footer__title">
                {nav.title}
              </Title>
              <ul
                className="list-unstyled mt-3"
                id={nav.id}
                key={i}
              >
                {nav.links.map((link, l) => (
                  <li key={l}>
                    <Anchor
                      className="footer__link"
                      href={link.url}
                      key={l}
                      
                    >
                      {link.label}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </Grid.Col>
          ))}
        </Grid>

        <Divider my="sm" />
      <div className="subfooter">
        <Grid>
          <Grid.Col span={6}>
            <Group>
              <Text>Seguici sui social</Text>
              <Link href="#"><Anchor>fb</Anchor></Link>
              <Anchor>World!</Anchor>
              <Anchor>World!</Anchor>
            </Group>        
          </Grid.Col>          
          <Grid.Col span={6}>
            <Group>
                <Link href="/legal/cookies"><Anchor>Cookies</Anchor></Link>
                <Link href="/legal/privacy-policy"><Anchor>Privacy policy</Anchor></Link>
            </Group>        
          </Grid.Col>
        </Grid>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
