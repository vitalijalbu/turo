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
  Icon
} from "framework7-react";


const Navigation = [
  {
    id: 'account',
    title: 'Account',
    links: [
      {
        exact: true,
        label: 'Il mio account',
        url: '/settings/',
      },
      {
        exact: true,
        label: 'Piano',
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
        url: '/settings/support',
        icon: 'question_circle'
      },
      {
        label: 'Feedback',
        url: 'mailto:partner@ceebo.com?subject=Feedback Ceebo Partner',
        external: true,
        icon: 'exclamationmark_circle'
      }
    ]
  }
];


const Toolbar = () => (
  <>
    {Navigation.map((nav, i) => (
      <>
        <BlockTitle key={i}>{nav.title}</BlockTitle>
            <List id={nav.id} key={i} noChevron noHairlines noHairlinesBetween>
              {nav.links.map((link, l) =>
                link.external === true ? (
                  <ListItem title={link.label} href="#" onClick={link.onClick} key={l}/>
                ) : link.action ? (
                  <ListItem title={link.label} href={link.url} key={l}/>
                ) : (
                  <ListItem title={link.label} href={link.url} key={l}/>
                )
              )}
            </List>
            </>
      ))}
      <BlockTitle>Disconnetti</BlockTitle>
                <List noChevron noHairlines noHairlinesBetween>
                  <ListItem title="Logout" href="#" className="color-red"/>
            </List>
  </>
);

export default Toolbar;
