import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchForm from "@/shared/form-fields/search-form";
import Faqs from "@/shared/sections/faqs";
import SpotlightListings from "@/shared/sections/listings-spotlight";
import ListingTypes from "@/shared/sections/listing-types";
import Features from "@/shared/sections/features";
//import LocationsLinks from "@/shared/common/LocationsLinks";
import PromoBanner from "@/shared/snippets/hero-banner";
import {  Row } from "reactstrap";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Home = () => {

  return (
    <div className="page">
    <div className="page-content">

    <Flex
      w={'full'}
      h={'40vh'}
      backgroundImage={
        'url(https://chakra-airbnb.vercel.app/images/airbnb-home.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            La piattaforma immobiliare per ristoranti e hotel.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'white'}
              rounded={'full'}
              _hover={{ bg: 'blue.500' }}>
              <Link href="/search">Cerca immobili</Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link href="/business">Sei un professionista?</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>

    <SearchForm/>
      <Features />
      <ListingTypes />
      <SpotlightListings />
      <PromoBanner 
      imageUrl="https://chakra-airbnb.vercel.app/images/airbnb-home.jpg"
      title="Crea un account" 
      subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <Faqs />
    </div>
    </div>
  );
};

export default Home;
