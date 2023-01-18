import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Button, Title} from "@mantine/core";
import ItemCard from "@/shared/search/listing-card";
import Entries from "@/data/entries.json";


const SpotlightListings = () => {

  return (
    <section id="related-listings" className="padding-vertical">
          <Container size="xl">
          <div className="section-title">
          <Group position="apart">
        <Title order={1}>In evidenza</Title>
        </Group>
    </div>
    <Grid>
      {Array.isArray(Entries.data.entries) ? (
         <> 
          {Entries.data.entries.map((item, i) => (
            <Grid.Col md={6} lg={3} xs={6}>
             <ItemCard data={item}/>
             </Grid.Col>
          ))}
        </>
      ) : (
        <Text strong>Nessun dato</Text>
      )}
    </Grid>
    </Container>
    </section>
  );
      
};

export default SpotlightListings;
