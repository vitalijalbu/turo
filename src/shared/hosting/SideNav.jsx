import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Title, Text, Box, NavLink } from "@mantine/core";

const Navigation = [
  {
    id: 'info',
    title: 'Informazioni',
    opened: true,
    links: [
      {
        selected: false,
        label: 'Dettagli',
        url: '/hosting/details',
        icon: 'text_quote'
      },
      {
        selected: false,
        label: 'Posizione',
        url: '/hosting/location',
        icon: 'map_pin_ellipse'
      },
      {
        selected: false,
        label: 'Prezzo',
        url: '/hosting/pricing',
        icon: 'money_euro_circle'
      }
    ],
  },
  {
    id: 'structure',
    title: 'Struttura',
    links: [
      {
        selected: false,
        label: 'Camere',
        url: '/hosting/floor-plan',
        icon: 'square_grid_2x2'
      }
    ]
  },
  {
    id: 'photos',
    title: 'Media',
    links: [
      {
        label: 'Fotografie',
        url: '/hosting/photos',
        icon: 'photo_on_rectangle'
      },
      {
        label: 'Pianimetria',
        url: '/hosting/planimetry',
        icon: 'hammer'
      },
      {
        label: 'Video',
        url: '/hosting/video',
        icon: 'play_rectangle'
      },
      {
        label: 'Virtual tour',
        url: '/hosting/virtual-tour',
        icon: 'videocam'
      }
    ]
  }, 
  {
    id: 'other',
    title: 'Altro',
    links: [
      {
        label: 'Servizi',
        url: '/hosting/amenities',
        icon: 'list_bullet'
      },
      {
        label: 'Dettagli finanziari',
        url: '/hosting/financial',
        icon: 'tag'
      },
      {
        label: 'Pubblica annuncio',
        url: '/hosting/publish',
        icon: 'tag'
      }
    ]
  }
];


const SideNav = () => {
  const router = useRouter();
  return (
    <Box>
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
      </Box>
  );
};

export default SideNav;
