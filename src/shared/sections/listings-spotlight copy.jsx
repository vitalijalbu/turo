import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Button, Title, Text } from "@mantine/core";
import ItemCard from "@/shared/snippets/listing-card";
import graphQLClient from "@/lib/graphql/client";
import { FIND_SPOTLIGHT } from "@/lib/graphql/queries/listings";


const SpotlightListings = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //console.log('✅ received-entries', entries)
  console.log('✅ received-listings', data)
  //if (!data.length) return (<Text strong>Nessun dato</Text>);

/* params API here */

  const getUserDetailByGraphQLRequestAPICall = async () => {
    try {
      setLoading(true);
      const response = await graphQLClient.request(FIND_SPOTLIGHT);
      console.log('RESPONSE FROM GRAPHQL-REQUEST API CALL', response);
      if (response?.data) {
        setData(response.data || []);
      }
    }
    catch (err) {
      console.log('ERROR FROM GRAPHQL-REQUEST API CALL', err);
    }
    finally {
      setLoading(false);
    }
  };
useEffect(() => { 
  getUserDetailByGraphQLRequestAPICall();
}, []);
 

if (!data.length) return (<Text strong>Nessun dato</Text>);

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <Container size="xl">
        <div className="section-title">
          <Group position="apart">
            <Title order={1}>Annunci in evidenza</Title>
          </Group>
        </div>
        <Grid>
          {/*data.entries.map((item, i) => (
            <Grid.Col md={6} lg={3} xs={6}>
             <ItemCard data={item} key={i}/>
             </Grid.Col>
          ))*/}
        </Grid>
      </Container>
    </section>
  );
};

export default SpotlightListings;
