import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getSession, removeSession } from "@/lib/graphql/client";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import SideMenu from "./side-menu";
import {
  IconMenu,
  IconClose,
  IconMessage2,
  IconListDetails,
  IconHeart,
  IconSettings,
  IconUserCircle,
  IconBuildingEstate,
  IconPlus,
  IconSearch
} from "@tabler/icons-react";
import SearchForm from "../form-fields/search-form-sm";

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
      title: "Sei sicuro di voler uscire?",
      message: "Potrai sempre accedere di nuovo in qualsiasi istante.",
      cancelText: "Annulla",
      confirmText: "Esci",
      confirmColor: "danger",
    }).then((confirmed) => {
      if (confirmed) {
        removeSession();
        window.location.href = "/";
      }
    });
  };

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            <Link href="/" className="link icon-only">
              <Box>
                <img src="/img/logo.svg" className="site-logo" />
              </Box>
            </Link>
            <SearchForm/>
          </div>
          <div className="right">
            <Button
              onClick={() => openSideNav()}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
            >
              Menu
            </Button>
            <ul className="menu">
              <li className="menu-item">
                <Link className="menu-link" href="/">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/pricing">
                   Pubblica un annuncio
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" href="/request">
                   Richieste
                </Link>
              </li>

              <li className="menu-item">
                  <Menu isLazy>
                    <MenuButton className="menu-link">Aiuto</MenuButton>
                    <MenuList>
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem as={Link} href='/help'>
                        Faqs
                      </MenuItem>
                      <MenuItem as={Link} href='/contacts'>
                        Contatti
                      </MenuItem>
                    </MenuList>
                  </Menu>
              </li>
              <li className="menu-item">
                  <Menu>
                    <MenuButton
                      variant={"link"}
                      cursor={"pointer"}
                      className="menu-link">
                      <div className="d-flex border-start align-items-center  ps-3">
                        <Avatar size="sm" name="eDan Abrahmov" className="me-1" /> 
                        <span>Demo user</span></div>
                    </MenuButton>
                    <MenuList>
                      <MenuItem as={Link} href='/account' icon={<IconUserCircle size={20} />}>
                        Il mio acount
                      </MenuItem>
                      <MenuItem as={Link} href='/account/favorites' icon={<IconHeart size={20} />}>
                      Preferiti
                      </MenuItem>

                      <MenuItem as={Link} href='/account/listings' icon={<IconListDetails size={20} />}>
                        I miei annunci
                      </MenuItem>
                      <MenuItem as={Link} href='/account/listings' icon={<IconPlus size={20} />}>
                        Pubblica annuncio
                      </MenuItem>
                      <MenuItem as={Link} href='/account/requests' icon={<IconMessage2 size={20} />}>
                        Richieste
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem as={Link} href='/offices/12' icon={<IconBuildingEstate size={20} />}>
                          Profilo pubblico
                      </MenuItem>
                      <MenuItem as={Link} href='/account/settings' icon={<IconSettings />}>
                        Impostazioni
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem as={Button} onClick={handleLogout}>Esci</MenuItem>
                    </MenuList>
                  </Menu>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SideMenu opened={navOpen} toggle={openSideNav} />
    </header>
  );
};

export default Header;
