import React from "react";
import {
  Page,
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
  Icon,
  View
} from "framework7-react";


const Navigation = [
  {
    id: 'account',
    title: 'Account',
    links: [
      {
        exact: true,
        label: 'Il mio account',
        url: '/settings/account'
      },
      {
        exact: true,
        label: 'Fatturazione',
        url: '/settings/billing'
      },
      {
        exact: true,
        label: 'Notifiche',
        url: '/settings/notifications'
      },
      {
        exact: true,
        label: 'Password',
        url: '/settings/security'
      }
    ],
  },
  {
    id: 'other',
    title: 'Altro',
    links: [
      {
        label: 'Assistenza',
        url: '/settings/support'
      },
      {
        label: 'Feedback',
        url: 'mailto:info@resthotels.it?subject=Feedback Resthotels',
        external: true
      }
    ]
  }
];


const SideNav = () => (
    <Block>
    {Navigation.map((nav, i) => (
      <>
        <BlockTitle key={i}>{nav.title}</BlockTitle>
            <List menuList id={nav.id} key={i} noHairlines noHairlinesBetween noChevron>
              {nav.links.map((link, l) =>
                link.external === true ? (
                  <ListItem title={link.label} href={link.url} onClick={link.onClick} key={l}/>
                ) : link.action ? (
                  <ListItem title={link.label} href={link.url} key={l}/>
                ) : (
                  <ListItem title={link.label} href={link.url} key={l}/>
                )
              )}
            </List>
            </>
      ))}
      </Block>
);

export default SideNav;
