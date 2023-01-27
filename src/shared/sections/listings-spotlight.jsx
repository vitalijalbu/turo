import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Button, Title, Text } from "@mantine/core";
import ItemCard from "@/shared/snippets/listing-card";
import graphQLClient from "@/lib/graphql/client";
import { FIND_SPOTLIGHT } from "@/lib/graphql/queries/listings";
import { request, gql } from 'graphql-request'
import { IconAward } from '@tabler/icons-react';


const SpotlightListings = () => {
  const[data, setData] = useState([]);
  console.log('✅ received-listings', data)


useEffect(() => {
  request('https://beta.resthotels.it/api/v1', FIND_SPOTLIGHT).then((data) => setData(data?.entries || []))
}, [])



  return (
    <section id="spotlight-listings" className="padding-vertical">
      <Container size="xl">
        <div className="section-title">
          <Group position="apart">
            <Title order={1}>Annunci in evidenza</Title>
          </Group>
        </div>
        <Grid>
          {data.map((item, i) => (
            <Grid.Col md={6} lg={3} xs={6}>
             <ItemCard data={item} key={i}/>
             </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SpotlightListings;
