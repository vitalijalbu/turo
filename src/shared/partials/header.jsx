import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from "reactstrap";
import SideMenu from "./side-menu";
import SearchOverlay from "./search-overlay";
import {
  IconHaze,
  IconMessage2,
  IconListDetails , IconHeart, IconSettings, IconUserCircle,
  IconSearch,
} from "@tabler/icons-react";
import confirm from '@/shared/components/confirm/';
import { getSession, removeSession } from "@/lib/graphql/client";

const Header = () => {
  const session = getSession();
  const user = session.user;
  
  const [isLodded, setIsAuthenticated] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);
  

   /* actions */ 
  const openSideNav = () => setNavOpen(!navOpen);


  /* Confirm */
  const handleLogout = () => {
    confirm({
      title: 'Sei sicuro di voler uscire?',
      message: 'auth.logout_cta',
      cancelText: 'Annulla',
      confirmText: 'Esci',
      confirmColor: 'danger',
    }).then((confirmed) => {
      if (confirmed) {
        removeSession();
        window.location.href="/";
      }
    });
  };


  return (
    <>
      {navOpen && <SideMenu opened={navOpen} toggle={openSideNav} />}
      <div id="site-header" className="app-header">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <Link
              href="/"
              className="d-flex align-items-center mb-2 mb-md-0"
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
                Lascia la tua richiesta
                </Link>
              </li>

            </ul>
            <ul className="nav">
            {session ? (
              <>
            <li className="nav-item">
                  <Link href="/account/favorites" className="nav-link"><IconHeart size={20}/> Preferiti</Link>
              </li>     
              <li className="ps-3 border-start nav-item">
           <UncontrolledDropdown>
              <DropdownToggle nav caret className="p-0">
              <img
      src={session.user.photo?.url ?? '/img/placeholder.svg'}
      className="avatar avatar-sm"
      alt=""
    /> {session.user.fullName}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a">
                <Link href="/account"><IconUserCircle size={20}/>Il mio acount</Link>
              </DropdownItem>
              <DropdownItem tag="a">
                <Link href="/account/listings"><IconListDetails size={20}/> I miei annunci</Link>
              </DropdownItem>              
              <DropdownItem tag="a">
                <Link href="/account/requests"><IconMessage2 size={20}/> Richieste</Link>
              </DropdownItem>
              <DropdownItem tag="a" className="mt-2">
                <Link href="/account/settings"><IconSettings size={20}/> Impostazioni</Link>
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Esci</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </li></>): (<li className="nav-item">
                <Link href="/login" className="btn btn-dark">
                  Accedi
                </Link>
              </li>)}
            </ul>
          
          </header>
        </div>
      </div>
    </>
  )
}

export default Header;
