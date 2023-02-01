
import React, { useState, useEffect } from "react";
import Link from "framework7-react";
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
  Popover,
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


const Header = ({ opened, close }) => {
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
    <Popover className="popover-menu" backdrop={false}>
      <List noChevron menuList>
       
        <ListItem link="/account" popoverClose title="Il mio account" />
        <ListItem link="/account/alerts" popoverClose title="I miei avvisi" />
        <ListItem link="/account/listings" popoverClose title="Gestisci gli annunci" />
        <ListItem link="/settings/account" popoverClose title="Impostazioni" />
        <ListItem link="#" popoverClose title="Esci" color="red" onClick={() => alert('logout')}/>
      </List>
    </Popover>
    <Appbar noShadow slot="static" innerClassName="container">
    <div className="left navbar-nav hide-navbar-on-scroll">
    <a className="nav-logo" color="black" href="/">resthotels</a>
    </div>    
    <div className="right navbar-nav">
    <Button round className="nav-item" color="black" href="/" reloadAll={true}>Home</Button>
    <Button round className="nav-item" color="black" href="/search" reloadAll={true}>Cerca</Button> 
    <Button round className="nav-item" outline color="primary" href="/hosting/create" iconF7="plus" reloadAll={true}>Crea un annuncio</Button> 
    <Button round className="nav-item" color="black" href="/account/favorites" iconF7="heart" reloadAll={true}>Preferiti</Button>
    <Button round className="nav-item" color="black" popoverOpen=".popover-menu">
    <div class="circleUser___2pOXp"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiA3YTQgNCAwIDEgMS04IDAgNCA0IDAgMCAxIDggMHpNMjAgMjFhMSAxIDAgMCAwIDEtMXYtLjVjMC0zLjU5LTQuMDMtNi41LTktNi41cy05IDIuOTEtOSA2LjV2LjVhMSAxIDAgMCAwIDEgMWgxNnoiIGZpbGw9IiM4NzlEQUMiLz4KPC9zdmc+Cg==" alt=""/></div>Profilo</Button>
    {/*<Button className="nav-menu-toggle" color="black" panelToggle="right">Menu <Icon f7="bars"></Icon></Button>    */}
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

export default Header;
