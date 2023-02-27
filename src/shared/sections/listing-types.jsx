import React, { useState, useEffect } from "react";
import {
  Row,
  Col
} from "reactstrap";
import { Container, Card, CardBody, Heading, Text, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import data from "@/data/categories.json";

const ListingTypes = () => {
  return (
    <section className="section-content">
      <Container maxW="xl">
        <div className="section-head">
          <h1 className="section-title">Sfoglia annunci</h1>
        </div>

        <Row>
          {data.categories.map((category) => (
           <Card
           direction={{ base: 'column', sm: 'row' }}
           overflow='hidden'
           variant='outline'
         >
           <Image
             objectFit='cover'
             maxW={{ base: '100%', sm: '200px' }}
             src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
             alt='Caffe Latte'
           />
         
           <Stack>
             <CardBody>
               <Heading size='md'>The perfect latte</Heading>
         
               <Text py='2'>
                 Caffè latte is a coffee beverage of Italian origin made with espresso
                 and steamed milk.
               </Text>
             </CardBody>
           </Stack>
         </Card>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ListingTypes;
