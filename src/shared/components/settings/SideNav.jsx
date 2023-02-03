import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Title, Text, Box, NavLink } from "@mantine/core";

const Navigation = [
  {
    id: "account",
    title: "Account",
    links: [
      {
        exact: true,
        label: "Il mio account",
        slug: "account",
        url: "/settings/account",
      },
      {
        exact: true,
        label: "Fatturazione",
        slug: "billing",
        url: "/settings/billing",
      },
      {
        exact: true,
        label: "Notifiche",
        slug: "notifications",
        url: "/settings/notifications",
      },
      {
        exact: true,
        label: "Password",
        slug: "security",
        url: "/settings/security",
      },
    ],
  },
  {
    id: "other",
    title: "Altro",
    links: [
      {
        label: "Assistenza",
        url: "/settings/support",
      },
      {
        label: "Feedback",
        url: "mailto:info@resthotels.it?subject=Feedback Resthotels",
        external: true,
      },
    ],
  },
];

const SideNav = () => {
  const router = useRouter();
  return (
    <Box>
      {Navigation.map((nav, i) => (
        <>
          <Title key={i} order={4}>{nav.title}</Title>
          <ul id={nav.id} key={i} noHairlines noHairlinesBetween noChevron>
            {nav.links.map((link, l) =>
              link.external === true ? (
                <Link href={link.url} passHref>
                  <NavLink
                    color="dark"
                    variant="filled"
                    component="a"
                    label={link.label}
                    active={router.pathname === link.slug}
                  />
                </Link>
              ) : link.action ? (
                <NavLink
                  color="dark"
                  variant="filled"
                  component="a"
                  href={link.url}
                  label={link.label}
                  active={router.pathname === link.slug}
                />
              ) : (
                <NavLink
                  color="dark"
                  variant="filled"
                  component="a"
                  href={link.url}
                  label={link.label}
                  active={router.pathname === link.slug}
                />
              )
            )}
          </ul>
        </>
      ))}
    </Box>
  );
};

export default SideNav;
