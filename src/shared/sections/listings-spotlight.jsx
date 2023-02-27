import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getSpotlightListings } from "@/lib/graphql/queries/listings";
import ItemCard from "@/shared/snippets/listing-card";
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from "@chakra-ui/react";

const SpotlightListings = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    getSpotlightListings()
    .then((data) => {
      setEntries(data?.entries);
      console.log('🐝 API response SPOTLIGHT', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (!entries) return <p>Nessun dato</p>;

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <div className="container">
      <div className="row">
      <div className="col">
        <div className="section-head d-flex justify-content-between">
            <h1 className="section-title">Annunci in evidenza</h1>
            <Link href={'/search'}><Button variant="outline" rightIcon={<IconArrowRight/>}>Vedi di più</Button></Link>
          </div>
          </div>
          </div>
        <div className="row">
          {entries.map((item) => (
            <div className="col-md-3 col-xs-6" key={item.id}>
              <ItemCard data={item}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightListings;
