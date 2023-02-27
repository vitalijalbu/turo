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
} from "@tabler/icons-react";

const Header = () => {
  const session = getSession();
  const user = session.user;

  const [isLodded, setIsAuthenticated] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);

  console.log('menu', navOpen)
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
    <SideMenu opened={navOpen} toggle={openSideNav} />
      <Box id="site-header" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Button onClick={() => openSideNav()} aria-label={"Open Menu"} display={{ md: "none" }}>Menu</Button>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src="/img/logo.svg" className="site-logo" />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="/"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="/search"
              >
                Cerca
              </Link>              
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href="/request"
              >
                Lascia una richiesta
              </Link>

              <Button
                variant={"solid"}
                size={"sm"}
                mr={4}
                leftIcon={<IconPlus />}
              >
                <Link href="/hosting/create">Crea un annuncio</Link>
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<IconUserCircle size={20} />}>
                    <Link href="/account"> Il mio acount</Link>
                  </MenuItem>

                  <MenuItem icon={<IconListDetails size={20} />}>
                    <Link href="/account/listings">I miei annunci</Link>
                  </MenuItem>
                  <MenuItem icon={<IconPlus size={20} />}>
                    <Link href="/hosting/create">Pubblica annuncio</Link>
                  </MenuItem>
                  <MenuItem icon={<IconMessage2 size={20} />}>
                    <Link href="/account/requests">Richieste</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<IconBuildingEstate size={20} />}>
                    <Link
                      href={`/offices/${
                        session === true ? session.user.id : null
                      }`}
                    >
                      Profilo pubblico
                    </Link>
                  </MenuItem>
                  <MenuItem icon={<IconSettings />}>
                    <Link href="/account/settings">Impostazioni</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Esci</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
