import React, { useState, useEffect } from "react";
import { Button } from "framework7-react";
import ListingCard from "@/shared/snippets/listing-card";
import graphQLClient from "@/lib/graphql/client";
import { FIND_SPOTLIGHT } from "@/lib/graphql/queries/listings";
import { IconArrowRight } from '@tabler/icons-react';


const ListingsSpotlight = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);

  /*
 async function getData() {
    try {
      const response = await graphQLClient.request(FIND_SPOTLIGHT);
      console.log('RESPONSE FROM GRAPHQL-REQUEST API CALL', response);
      if (response) {
        setData(response.entries);
      }
    }
    catch (err) {
      console.log('ERROR FROM GRAPHQL-REQUEST API CALL', err);
    }
    finally {
      setLoading(false);
    }
  };
*/
async function getData() {
  try {
    const response = await graphQLClient.request(FIND_SPOTLIGHT);
    if (response) {
      setData(response);
    }
  } catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <p strong>Nessun dato</p>;

  return (
    <section id="spotlight-listings" className="padding-vertical">
      <div className="container">
        <div className="section-h1">
          <div position="apart">
            <h1 order={1}>Annunci in evidenza</h1>
            <a href={'/search'}><Button radius={"xl"} rightIcon={<IconArrowRight/>} variant="outline" color="dark">Vedi di più</Button></a>
          </div>
        </div>
        <div className="grid">
          {data.entries.map((item, i) => (
            <div className="col-md-3">
              <ListingCard data={item} key={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsSpotlight;
