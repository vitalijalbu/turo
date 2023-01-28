import React, { useState, useEffect } from "react";
import SearchForm from "@/shared/form-fields/search-form";
import Services from "@/shared/common/Services";
import Faqs from "@/shared/common/Faqs";
import Features from "@/shared/common/Features";
import SpotlightListings from "@/shared/sections/listings-spotlight";
import ListingTypes from "@/shared/sections/listing-types";
//import LocationsLinks from "@/shared/common/LocationsLinks";
import PromoBanner from "@/shared/snippets/hero-banner";
import { Container, Title, Text, Grid, Card, Image } from "@mantine/core";


import graphQLClient from "@/lib/graphql/client";
import { FIND_ALL } from "@/lib/graphql/queries/listings";


const Home = () => {

  return (
    <div className="page">
      <Container size="xl">
      <section className="hero-wrapper dark overlay" style={{borderRadius: '12px'}}>
        {/* - img*/}
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <div className="img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1585418694458-dc80a5c20294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
                title="titolo immagine"
                alt="descrizione immagine"
              />
            </div>
          </div>
        </div>
        {/* - texts*/}
        <Container size="xl">
          <div className="row">
            <div className="col-12">
              <div className="hero-text-wrapper bg-dark">
                <Title>
                  La piattaforma immobiliare per ristoranti e hotel.
                </Title>
                <SearchForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      </Container>
      <Features />
      <ListingTypes />
      {/*<Services />*/}
      <SpotlightListings />
      <PromoBanner 
      imageUrl="https://content.loft.com.br/_next/static/images/hero-background@3x-24f8cc98fdfcb97739e347ef9a70f6bf.jpg"
      title="Crea un account" 
      subtitle="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
      <Faqs />
    </div>
  );
};

export default Home;
