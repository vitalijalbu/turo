import React, { useState } from "react";
import Link from "next/link";
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from "reactstrap";
import SideMenu from "./side-menu";
import SearchOverlay from "./search-overlay";
import {
  IconHaze,
  IconMenu,
  IconListDetails , IconHeart, IconSettings, IconUserCircle,
  IconSearch,
} from "@tabler/icons-react";
import confirm from '@/shared/components/confirm/';


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);
   /* actions */ 
  const openSideNav = () => setNavOpen(!navOpen);
  const openSearch = () => setsearchOpen(!searchOpen);

  /* Confirm */
  const handleLogout = () => {
    confirm({
      title: 'Sei sicuro di voler uscire?',
      message: 'auth.logout_cta',
      cancelText: 'Annulla',
      confirmText: 'Esci',
      confirmColor: 'primary',
    }).then((confirmed) => {
      if (confirmed) {
        dispatch(logout());
        //history.push('/');
        //window.location.href="/";
      }
    });
  };

  return (
    <>
      {navOpen && <SideMenu opened={navOpen} toggle={openSideNav} />}
      <div id="site-header">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <Link
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0"
            >
              <img src="/img/logo.svg" className="site-logo"/>
            </Link>
            <ul className="nav col-md-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-item">
                <Link href="/" className="nav-link px-2 link-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/search" className="nav-link px-2 link-dark">
                  Ricerca
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/requests" className="nav-link px-2 link-dark">
                  Richieste
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login" className="nav-link px-2 link-dark">
                  Login
                </Link>
              </li>
            </ul>
            <ul className="nav">
            <li className="nav-item">
                  <Link href="/account/favorites" className="nav-link"><IconHeart/> Preferiti</Link>
              </li>
              <li className="nav-item">
           <UncontrolledDropdown>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a">
                <Link href="/account"><IconUserCircle/>Il mio acount</Link>
              </DropdownItem>
              <DropdownItem tag="a">
                <Link href="/account/listings"><IconListDetails /> I miei annunci</Link>
              </DropdownItem>
              <DropdownItem tag="a" className="mt-2">
                <Link href="/account/settings"><IconSettings/> Impostazioni</Link>
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Esci</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </li>
            {/*<li className="nav-item"><Link href="/login" className="px-2">
                <Button color="primary" outline>
                  <IconUserCircle /> Accedi
                </Button>
              </Link>
              </li>*/}
            </ul>
          
          </header>
        </div>
      </div>
    </>
  )
}

export default Header;
