import React, { useState, useEffect } from "react";
import HostListings from "@/shared/hosts/HostListings";
import {
  Container,
  Grid,
  Title,
  Avatar,
  Text,
  Button,
  Card,
} from "@mantine/core";
import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [loading, setLoading] = useState(false);
  const [popupReach, setReachPopup] = useState(false);
  const [popupShare, setSharePopup] = useState(false);
  const [form, setFormValues] = useState({});

  /* Toggle Item Popup */
  const openReachPopup = () => {
    setReachPopup(true);
  };
  const closeReachPopup = () => {
    setReachPopup(false);
  };
  /* Toggle Item Popup */
  const openSharePopup = () => {
    setSharePopup(true);
  };
  const closeSharePopup = () => {
    setSharePopup(false);
  };

  /* Input change parent state */
  const changeHandler = (e) => {
    e.preventDefault();
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="page">
      <Container size="xl">
        <Grid>
          <Grid.Col span={3}>
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
              <Text size="xs">
              Scopri perché confermare le informazioni dell'account contribuisce a garantire la sicurezza della community di Resthotels.
              </Text>

              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                /*href={"/hosts/"+data.id}*/ variant="default"
                fullWidth
                mt="md"
              >
                Contatta Agenzia
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={9}>
            <div className="section-title">
              <Title order={1}>Annunci</Title>
            </div>
            <HostListings />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default View;
