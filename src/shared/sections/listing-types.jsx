import React, { useState, useEffect } from "react";
import {  Card, CardBody, Heading, Text, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import data from "@/data/categories.json";

const ListingTypes = () => {
  return (
    <section className="section-content">
      <div className="container">
        <div className="section-head">
          <h1 className="section-title">Sfoglia annunci</h1>
        </div>

        <div className="row">
          {data.categories.map((category, i) => (
            <div className="col" key={i}>
           <Card
           direction={{ base: 'column', sm: 'row' }}
           overflow='hidden'
           variant='outline'
           as={Link}
           href={`/search?category=${category.slug}`}
         >
           <Image
             objectFit='cover'
             maxW={{ base: '100%', sm: '200px' }}
             src='/img/placeholder.png'
             alt={category.title}
           />
         
           <Stack>
             <CardBody>
               <Heading size='md'>{category.title}</Heading>
             </CardBody>
           </Stack>
         </Card>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingTypes;
