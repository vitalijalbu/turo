import React, { useState, useEffect } from "react";
import { Container, Grid, Text, Title} from "@mantine/core";
import ItemCard from "@/shared/search/listing-card";
import Entries from "@/data/entries.json";
import Link from 'next/link';

const RelatedListings = () => {

  return (
    <section id="related-listings" className="padding-vertical">
          <Container size="xl">
          <div className="section-title">
        <Title order={1}>Annunci simili</Title>
        <Text>In base alle tue ricerche, pensiamo possano interessarti anche questi annunci</Text>
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

export default RelatedListings;
