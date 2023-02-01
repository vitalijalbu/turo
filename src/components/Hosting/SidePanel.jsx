import React, { useState } from "react";
import {
  Page,
  Panel,
  Block,
  BlockTitle,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  List,
  ListItem,
  Icon
} from "framework7-react";



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


const SidePanel = () => {

  return (
  <aside className="hosting-panel">

    {Navigation.map((nav, i) => (
      <>
        <BlockTitle key={i}>{nav.title}</BlockTitle>
            <List menuList id={nav.id} key={i} noHairlines>
              {nav.links.map((link, l) =>
                link.external === true ? (
                  <ListItem title={link.label} href="#" onClick={link.onClick} key={l}>
                  <Icon slot="media" f7={link.icon}></Icon>
                  </ListItem>
                ) : link.action ? (
                  <ListItem title={link.label} href={link.url} key={l}>
                    <Icon slot="media" f7={link.icon}></Icon>
                  </ListItem>
                ) : (
                  <ListItem title={link.label} href={link.url} key={l}>
                    <Icon slot="media" f7={link.icon}></Icon>
                  </ListItem>
                )
              )}
            </List>
            </>
      ))}
            </aside>
  );
};
export default SidePanel;
