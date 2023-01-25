import React, { useState, useEffect } from "react";
import { Container, Grid, Avatar, Title, Text, Button, Paper } from '@mantine/core';
import graphQLClient from "@/lib/graphql/client";
import { FIND_ALL } from "@/lib/graphql/queries/hosts";


export async function getStaticProps(context) {
  const data = await graphQLClient.request(FIND_ALL)

  return {
    props: { data }
  }
}

const Index = ({data}) => {

  
  const[loading, setLoading] = useState(false);
  console.log('received-data', {data});


  return (
<div className="page">
    <Container size="xl">
      <div className="section-title">
        <Title order={1}>Agenzie</Title>
    </div>
    <Grid>
      {data.users.map((data, i) => (
        <Grid.Col span={3}>
     <Paper
     radius="md"
     withBorder
     p="lg"
      key={data.id}
   >
     <Avatar src={data.photoUrl} size={120} radius={120} mx="auto" />
     <Text align="center" size="lg" weight={500} mt="md">
       {data.fullName}
     </Text>
     <Text align="center" color="dimmed" size="sm">
      {"Annunci online " + data.id}
     </Text>

     <Button component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={"/hosts/"+data.id} variant="default" fullWidth mt="md" >
       Vedi Agenzia
     </Button>
   </Paper>
   </Grid.Col>
      ))} 
      </Grid>
      </Container>
    </div>
  );
};

export default Index;
