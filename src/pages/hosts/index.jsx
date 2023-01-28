import React, { useState, useEffect } from "react";
import { Container, Grid, Title, Text } from '@mantine/core';
import graphQLClient from "@/lib/graphql/client";
import { FIND_ALL } from "@/lib/graphql/queries/hosts";
import HostCard from "@/shared/sections/host-card";

export async function getStaticProps(context) {
  const data = await graphQLClient.request(FIND_ALL)

  return {
    props: { data }
  }
}

const Index = ({data}) => {
  const[loading, setLoading] = useState(false);

  if (!data.users.length) return (<Text strong>Nessun dato</Text>);

  return (
<div className="page">
    <Container size="xl">
      <div className="section-title">
        <Title order={1}>Agenzie</Title>
    </div>
    <Grid>
      {data.users.map((host, i) => (
        <Grid.Col md={6} lg={3} xs={6}>
          <HostCard data={host} key={i}/>
   </Grid.Col>
      ))} 
      </Grid>
      </Container>
    </div>
  );
};

export default Index;
