
import React, { useState, useEffect } from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Panel,
  List,
  ListItem,
  Icon,
  Button,
  BlockTitle,
  Appbar, 
  Searchbar,
  Subnavbar,
  BlockFooter,
  f7
} from "framework7-react";


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


const Panel = ({ opened, close }) => {
  //let url = f7.view.main.router.currentRoute.name;
  const [selected, setSelected] = useState('home');
  const [popupStatus, setPopupStatus] = useState(false);

  //console.log('menu-url', url);
  //console.log('menu-selected', selected);
  
  const openPopup = () => {
    setPopupStatus(true);
  };
  const closePopup = () => {
    setPopupStatus(false);
  };

    

  
  return (
    <>
    <Appbar noShadow slot="static">
    <div className="left navbar-nav hide-navbar-on-scroll">
    <a className="nav-logo" color="black" href="/">resthotels</a>
    <Button className="nav-item" color="black" href="/" reloadAll={true}>Home</Button>
    <Button className="nav-item" color="black" href="/search" reloadAll={true}>Cerca</Button> 
    <Button className="nav-item" outline color="primary" href="/hosting/create" reloadAll={true}>Crea un annuncio</Button> 
    </div>    
    <div className="right navbar-nav">
    <Button className="nav-item" color="black" href="/account/favorites" iconF7="heart" reloadAll={true}>Preferiti</Button>
    <Button className="nav-item" color="black" href="/signin" iconF7="person_crop_circle" reloadAll={true}>Accedi</Button>
    <Button className="nav-menu-toggle" color="black" panelToggle="right">Menu <Icon f7="bars"></Icon></Button>    
    </div>
  </Appbar>
      <Panel right cover id="panel-menu" containerEl="panel-menu">
        <Page>
        <Navbar><NavLeft><Button className="close" panelToggle="right"><Icon f7="xmark"></Icon></Button></NavLeft><NavTitle>Menu</NavTitle></Navbar>
        {Navigation.map((nav, i) => (
      <>
            <List key={i} id={nav.id} noHairlines className="header-menu_items">
              {nav.links.map((link, l) =>
                link.external === true ? (
                  <ListItem key={l} title={link.label} href={link.url} onClick={link.onClick} reloadAll={true} panelClose>
                     {link.icon && <Icon slot="media" f7={link.icon}></Icon>}
                  </ListItem>
                ) : link.action ? (
                  <ListItem key={l} title={link.label} href={link.url} selected={false} reloadAll={true} panelClose>
                    {link.icon && <Icon slot="media" f7={link.icon}></Icon>}
                  </ListItem>
                ) : (
                  <ListItem key={l} title={link.label} href={link.url} selected={false} reloadAll={true} panelClose>
                     {link.icon && <Icon slot="media" f7={link.icon}></Icon>}
                  </ListItem>
                )
              )}
            </List>
            </>
      ))}
        <List className="header-menu_items">
          <ListItem href="/help" reloadAll={true} title="Assistenza" panelClose>
          <Icon slot="media" f7="question_circle"></Icon>
                  </ListItem>
        </List> 
        <List link className="header-menu_items">
          <ListItem title="Esci" subtitle="email@gmail.com" panelClose>
          <Icon slot="media" f7="bars"></Icon>
                  </ListItem>
        </List>
        </Page>
    </Panel>
    </>
  );
};

export default Panel;
