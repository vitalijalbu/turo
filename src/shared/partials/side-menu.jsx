import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';

const Navigation = [
  {
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

const SideMenu = ({ opened, toggle }) => {
  const router = useRouter();
  const pathname = router.query?.pathname;
  const [loading, setLoading] = React.useState(false);

  return (
    <Drawer
      id="side-nav"
      isOpen={opened}
      placement='right'
      onClose={toggle}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <div className="list">
            <ul>
          {Navigation.map((nav, i) =>
            nav.links.map((link, j) => (
              <li>
          <Link href={link.url} passHref key={`${i}-${j}`}>       
              <div className="item-content">
                <div className="item-inner">{link.label}</div>
              
              </div>
          </Link>
          </li>
            ))
          )}
          </ul>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
