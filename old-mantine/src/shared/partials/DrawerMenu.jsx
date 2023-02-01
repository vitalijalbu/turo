import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer, Button, Title, Text, Box, NavLink } from '@mantine/core';



const Navigation = [
  {
    id: 'Generale',
    title: 'Generale',
    links: [
      {
        label: 'Home',
        url: '/'
      },      
      {
        label: 'Cerca',
        url: '/search'
      },
      {
        label: 'Su di noi',
        url: '/about'
      },
      {
        label: 'Aiuto?',
        url: '/help'
      },
      {
        label: 'Crea un annuncio',
        url: '/hosting/details',
        icon: 'plus_circle'
      }
    ],
  },
  {
    id: 'hosting',
    title: 'Hosting',
    links: [
      {
        label: 'Il mio account',
        url: '/account',
        icon: 'person_crop_circle'
      }, 
      {
        label: 'Preferiti',
        url: '/account/favorites',
        icon: 'heart'
      },
      {
        label: 'I miei avvisi',
        url: '/account/alerts',
        icon: 'bell'
      }, 
      {
        label: 'Gestisci gli annunci',
        url: '/account/listings',
        icon: 'list_bullet_below_rectangle'
      },
      {
        label: 'Impostazioni',
        url: '/settings/account',
        icon: 'gear_alt'
      }
    ],
  }
];

const DrawerMenu = ({ opened, close }) => {
  const router = useRouter();

  return (
      <Drawer
        opened={opened}
        onClose={() => close()}
        title="Menu"
        padding="xl"
        position="right"
        size="md"
      >
    {Navigation.map((nav, i) => (
      <>
        <Title key={i} order={4}>{nav.title}</Title>
            <ul id={nav.id} key={i} noHairlines noHairlinesBetween noChevron>
              {nav.links.map((link, l) =>
                link.external === true ? (
                  <Link href={link.url} passHref>
                    <NavLink component="a" label={link.label} active={router.pathname === link.slug} />
                  </Link>
                ) : link.action ? (
                  <Link href={link.url} passHref>
                  <NavLink component="a" label={link.label} active={router.pathname === link.slug} />
                </Link>
                ) : (
                  <Link href={link.url} passHref>
                  <NavLink component="a" label={link.label} active={router.pathname === link.slug} />
                </Link>
                )
              )}
            </ul>
            </>
      ))}
      </Drawer>
  );
}
export default DrawerMenu;

