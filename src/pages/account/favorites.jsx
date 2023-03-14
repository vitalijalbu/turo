import React, { useState, useEffect } from "react";
import Link from 'next/link';
import ItemCard from "@/shared/snippets/listing-card";
import PageHead from "@/shared/account/page-head";
import { getUserFavorites } from "@/lib/graphql/queries/favorites";
import {  SimpleGrid } from "@chakra-ui/react";


const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setentries] = useState([]);


  useEffect(() => {
    getUserFavorites()
    .then((data) => {
      setentries(data?.entries);
      //console.log('🐝 API response FAVORITES', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (!entries) return <p>Nessun dato</p>;
  return (
    <div className="page">
    <div className="page-content">
    <section className="page-heading">
  <div className="container">
  
     <div className="row">

            <div className="d-flex">
                <div className="flex-grow-1">
                <h1 className="section-title">I miei Preferiti</h1>
                <p classname="page-subtitle">Gli annunci e le ricerche salvate compariranno qui</p>
              </div>
              </div>

    </div>
    </div>
</section>

      <div className="container">
<div className="row">
{Array.isArray(entries) ? (
   <> 
    {entries.map((item, i) => (
      <div className="col-lg-3 col-md-3 col-sm-6 col-sx-6">
       <ItemCard data={item}/>
       </div>
    ))}
  </>
) : (
  <p strong>Nessun dato</p>
)}
</div>
</div>
</div>
</div>
  );
};

export default Favorites;
