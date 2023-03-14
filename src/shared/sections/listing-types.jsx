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
            <div className="col-sx-6 col-md-4 mb-3" key={i}>
           <Card
           direction={{ base: 'column', sm: 'row' }}
           overflow='hidden'
           variant='outline'
           as={Link}
           href={`/search?category=${category.slug}`}
         >
           <Image
             objectFit='cover'
             height="150px"
             maxW="150px"
             src={category.media_url}
             alt={category.title}
           />
         
           <Stack>
             <CardBody alignContent="center">
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
