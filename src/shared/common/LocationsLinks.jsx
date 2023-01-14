import React, { useState, useEffect } from "react";
import { Grid, Container, Group, Button, Title } from '@mantine/core';
import Cities from "@/data/cities.json";
import Link from 'next/link';


const LocationsLinks = () => {

  return (
    <section id="related-listings" className="section-content">
        <Container size="xl">
        <div className="section-title">
        <Title order={1}>Città in primo piano</Title>
    </div>    
      {Array.isArray(Cities.data) ? (
        <Grid>
        <Grid.Col span={12}>
          <Group position="apart">
           {Cities.data.map((item, i) => (
            
                    <Link href={'/search?location='+item.slug} passHref>
                    <Button variant="subtle" radius="xl" size="md" className="mt-1" component="a" target="_blank" rel="noopener noreferrer">{item.title}</Button>
    </Link>
            
            ))}
            </Group>
            </Grid.Col>
            </Grid>

      ) : (
        <Grid strong>Nessun dato</Grid>
      )}
    </Container>
    </section>
  );
      
};

export default LocationsLinks;
