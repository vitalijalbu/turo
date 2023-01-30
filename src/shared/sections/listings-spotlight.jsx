import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Button, Title, Text } from "@mantine/core";
import ItemCard from "@/shared/snippets/listing-card";
import graphQLClient from "@/lib/graphql/client";
import { FIND_SPOTLIGHT } from "@/lib/graphql/queries/listings";
import Link from "next/link";
import { IconArrowRight } from '@tabler/icons-react';


const SpotlightListings = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  /*
 async function getData() {
    try {
      const response = await graphQLClient.request(FIND_SPOTLIGHT);
      console.log('RESPONSE FROM GRAPHQL-REQUEST API CALL', response);
      if (response) {
        setData(response.entries);
      }
    }
    catch (err) {
      console.log('ERROR FROM GRAPHQL-REQUEST API CALL', err);
    }
    finally {
      setLoading(false);
    }
  };
*/
async function getData() {
  try {
    const response = await graphQLClient.request(FIND_SPOTLIGHT);
    if (response) {
      setData(response);
    }
  } catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <Text strong>Nessun dato</Text>;

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <Container size="xl">
        <div className="section-title">
          <Group position="apart">
            <Title order={1}>Annunci in evidenza</Title>
            <Link href={'/search'}><Button radius={"xl"} rightIcon={<IconArrowRight/>} variant="outline" color="dark">Vedi di più</Button></Link>
          </Group>
        </div>
        <Grid>
          {data.entries.map((item, i) => (
            <Grid.Col md={6} lg={3} xs={6}>
              <ItemCard data={item} key={i} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SpotlightListings;
