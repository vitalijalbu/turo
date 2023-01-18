import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";
import {
  Container,
  Group,
  Stack,
  Divider,
  Grid,
  Table,
  Title,
  Avatar,
  Text,
  Button,
  Breadcrumbs,
  Anchor,
  Card,
} from "@mantine/core";
import ContactPopup from "@/shared/listings/ContactPopup";
import SharePopup from "@/shared/listings/share-popup";
import Gallery from "@/shared/listings/Gallery";
import RelatedListings from "@/shared/search/related-listings";
import { IconCornerRightUp, IconHeart } from '@tabler/icons';

import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/shared/listings/Map"), {
  ssr: false,
});

const items = [
  { title: "Ricerca", href: "/search?city=brescia" },
  { title: "Ristorante demo", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const View = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [loading, setLoading] = useState(false);
  const [popupContact, setContactPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});

  /* Toggle Item Popup */
  const toggleContactPopup = () => {
    setContactPopup(!popupContact);
  };
  /* Toggle Item Popup */
  const toggleSharePopup = () => {
    setSharePopup(!popupShare);
  };

  return (
    <>
      {popupShare && (
        <SharePopup opened={popupShare} toggle={toggleSharePopup} />
      )}
      {popupContact && (
        <ContactPopup opened={popupContact} toggle={toggleContactPopup} />
      )}
      <div className="page">
        <Container size="xl">
          <section className="section-content" id="listingInfo">
            <Group position="apart">
              <div>
                <Breadcrumbs>{items}</Breadcrumbs>
                <Title>Lorem ipsum is placeholder text commonly used</Title>
              </div>
              <div>
                <Button
                  variant="subtle"
                  color="dark"
                  onClick={() =>
                    showNotification({
                      title: "Default notification",
                      message: "Hey there, your code is awesome! 🤥",
                    })
                  }
                >
                  <IconHeart /> Salva
                </Button>
                <Button
                  variant="subtle"
                  color="dark"
                  onClick={toggleSharePopup}
                >
                  <IconCornerRightUp /> Condividi
                </Button>
              </div>
            </Group>
          </section>
          <section id="listingGallery">
            <Gallery />
          </section>

          <Grid>
            <Grid.Col span={8}>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <Title order={3}>Descrizione</Title>
                </div>
                <Group position="apart">
                  <div className="left">
                    <div className="item-service_block">
                      <span className="title">Locali</span>
                      <span className="content">demo</span>
                    </div>

                    <div className="item-service_block">
                      <span className="title">Piani</span>
                      <span className="content">demo</span>
                    </div>
                    <div className="item-service_block">
                      <span className="title">Stato</span>
                      <span className="content">Ristrutturato</span>
                    </div>
                  </div>
                  <div className="right">
                    <Text weight="bold" size="xl" color="blue">
                      € 4.000.000
                    </Text>
                  </div>
                </Group>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </section>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <Title order={3}>Servizi</Title>
                </div>
                <Group position="apart">
                  <div className="item-service_block">
                    <span className="title">Locali</span>
                    <span className="content">demo</span>
                  </div>

                  <div className="item-service_block">
                    <span className="title">Piani</span>
                    <span className="content">demo</span>
                  </div>
                  <div className="item-service_block">
                    <span className="title">Stato</span>
                    <span className="content">Ristrutturato</span>
                  </div>
                </Group>
                <Table verticalSpacing="sm">
                  <tbody>
                    <tr>
                      <td>{"element.position"}</td>
                      <td>{"element.name"}</td>
                    </tr>
                    <tr>
                      <td>{"element.position"}</td>
                      <td>{"element.name"}</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <Title order={3}>Caratteristiche</Title>
                </div>
                <Table verticalSpacing="sm">
                  <tbody>
                    <tr>
                      <td>{"element.position"}</td>
                      <td>{"element.name"}</td>
                    </tr>
                    <tr>
                      <td>{"element.position"}</td>
                      <td>{"element.name"}</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <section className="section-content" id="listingSpecifications">
                <div className="section-title">
                  <Title order={3}>Dettagli</Title>
                </div>
                <Table verticalSpacing="sm">
                  <tbody>
                    <tr>
                      <td>Anno ultima ristrutturazione</td>
                      <td>1523</td>
                    </tr>
                    <tr>
                      <td>Anno di costruzione</td>
                      <td>1323</td>
                    </tr>
                    <tr>
                      <td>Spese condominiali</td>
                      <td>1.600 annuali</td>
                    </tr>
                    <tr>
                      <td>Categoria catastale</td>
                      <td>A2</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <section className="section-content" id="listingMap">
                <div className="section-title">
                  <Title order={3}>Posizione</Title>
                </div>
                <Map />
              </section>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card shadow="sm" withBorder p="xl">
                <Avatar
                  src="https://via.placeholder.com/80"
                  size={120}
                  radius={120}
                  mx="auto"
                />
                <Text align="center" size="lg" weight={500} mt="md">
                  Esempio
                </Text>
                <Text align="center" color="dimmed" size="sm">
                  {"Annunci online 2"}
                </Text>
                <Text align="center" color="dimmed" size="sm">
                  {"Annunci online 2"}
                </Text>
                <Stack>
                  <Button
                    fullWidth
                    color="dark"
                    radius="xl"
                    onClick={toggleContactPopup}
                  >
                    Contatta Agenzia
                  </Button>
                  <Link href="/hosts/1231" passHref>
                    <Button fullWidth component="a" variant="default">
                      Annunci del venditore
                    </Button>
                  </Link>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
        <IconHeart />
      </div>
    </>
  );
};

export default View;
