import React, { useState, useRef } from "react";
import { Container, Grid, Title, Card, Image, Group, Anchor } from '@mantine/core';
import typeList from '@/data/types.json';
import Link from 'next/link';


const ListingTypes = () => {


  return (
    <section className="section-content">
      <Container size="xl">
            <div className="section-title">
        <Title order={1}>Sfoglia annunci</Title>
    </div>
    
       <Grid>
        {typeList.map((data, i) => (
          <Grid.Col span={4}>
         <Card
      shadow="sm"
      component="a"
      href={'/search?type='+data.slug}
      target="_blank">
      <Card.Section>
      <Group>
        <Link href={'/search?type='+data.slug}>
        <Image
           width={120}
           height={100}
           fit="cover"
           src={data.image_url}
           alt={data.title}
        />
        </Link>
        <Link href={'/search?type='+data.slug}>
        <Title order={3}>
       {data.title}
      </Title>

        </Link>
        </Group>
      </Card.Section>
    </Card>
    </Grid.Col>
      ))}  
    </Grid>
      </Container>
    </section>
  );
};

export default ListingTypes;
