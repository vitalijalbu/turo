import React, { useState } from "react";
import Link from "next/link";
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from "reactstrap";
import SideMenu from "./side-menu";
import SearchOverlay from "./search-overlay";
import {
  IconHaze,
  IconMenu,
  IconMessageCircle, IconBookmark, IconSettings, IconUserCircle,
  IconSearch,
} from "@tabler/icons-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);
   /* actions */ 
  const openSideNav = () => setNavOpen(!navOpen);
  const openSearch = () => setsearchOpen(!searchOpen);

  return (
    <>
      {navOpen && <SideMenu opened={navOpen} toggle={openSideNav} />}
      <div id="site-header">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
          <Link
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img src="/img/logo.svg" />
            </Link>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link href="/" className="nav-link px-2 link-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="nav-link px-2 link-dark">
                  Ricerca
                </Link>
              </li>
              <li>
                <Link href="/zone" className="nav-link px-2 link-dark">
                  Zone
                </Link>
              </li>
            </ul>
            <ul className="nav">
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
                <Link href="/account/preferiti"><IconBookmark/> Preferiti</Link>
              </DropdownItem>
              <DropdownItem tag="a">
                <Link href="/account/commenti"><IconMessageCircle/> Commenti</Link>
              </DropdownItem>
              <DropdownItem tag="a" className="mt-2">
                <Link href="/account/impostazioni"><IconSettings/> Impostazioni</Link>
              </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Esci</DropdownItem>
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
