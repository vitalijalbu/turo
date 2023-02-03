import React, { useState, useRef } from "react";
import { Container, Button, AspectRatio, Image, Grid, Accordion } from '@mantine/core';
import faqList from '@/data/faqs.json';
import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';;


const Faqs = () => {


  return (
    <section className="section-content faqs">
    <Container size="xl">
        <Grid>
            <Grid.Col span={6}>
            <AspectRatio ratio={16 / 9}>
      <Image
        src="https://via.placeholder.com/800x533"
        alt="Panda"
      />
    </AspectRatio>
      </Grid.Col>
      <Grid.Col span={6}>
      <h3>Domande più frequenti</h3>
      <Accordion defaultValue="customization">
      {faqList.data.faqs.map((data, i) => (
        <Accordion.Item value={data.id} key={i}>
        <Accordion.Control>{data.title}</Accordion.Control>
        <Accordion.Panel><p>{data.content}</p></Accordion.Panel>
      </Accordion.Item>
      ))} 
      </Accordion>

      <Link href="/help" target="_blank" passHref>
    <Button compact className="mt-1" component="a" target="_blank" rel="noopener noreferrer" variant="outline" rightIcon={<IconArrowUpRight/>}>Vai al centro supporto</Button>
    </Link>
    </Grid.Col>

      </Grid>
      </Container>
    </section>
  );
};

export default Faqs;
