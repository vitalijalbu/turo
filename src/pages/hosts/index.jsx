import React, { useState, useEffect } from "react";
import hostsList from '@/data/hosts.json';
import { Container, Grid, Avatar, Title, Text, Button, Paper } from '@mantine/core';
import { findAction } from "@/lib/graphql/queries/hosts";

const Index = () => {
  const[loading, setLoading] = useState(false);
  const[data, setData] = useState([]);


/* params API here */
 useEffect(() => { 
    (async () => {
      const users = await findAction()
      .then(({ data }) => {
        console.log('✅ received-data')
        setData(data?.data || []);
      })
      .catch((err) => {
        console.log('🐛 BUG'. err);
        setLoading(false);
      });
    })();
  }, []);



  return (
<div className="page">
    <Container size="xl">
      <div className="section-title">
        <Title order={1}>Agenzie</Title>
    </div>
    <Grid>
      {hostsList.data.users.map((data, i) => (
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
      {"Annunci online " + data.totalListings}
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
