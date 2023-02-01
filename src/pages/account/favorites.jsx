import React, { useState, useEffect } from "react";
import {
  Page,
  Button
} from "framework7-react";
import ItemCard from "@/components/Search/ItemCard";
import PageHead from "@/components/Account/PageHead";
import Entries from "@/data/entries.json";


  const Favorites = (props) => {
    

    return (
      <Page>
            <section className="page-heading">
    <div className="container">
    <div className="page-back_btn display-flex justify-content-space-between align-items-center"><Button href="/account" iconF7="arrow_left" color="black" reloadAll={true}>
              Indietro
            </Button>
            </div>
    <div className="display-flex justify-content-space-between align-items-center">
    <div className="">
        <h1 className="page-title">Benvenuto nella tua lista preferiti</h1>
        <p className="page-subtitle">Durante la navigazione nel sito, è sufficiente selezionare il simbolo ♡ per salvare eventuali annunci che ti piacciono.
</p>
</div>
<div className="">
      <Button fill color="theme" href="/search" reloadAll={true} iconF7="search">
      Inizia la tua ricerca
            </Button>
      </div>
      </div>
    </div>
  </section>
  <section id="related-listings">
      <div className="container">
      {Array.isArray(Entries.data.entries) ? (
        <div className="grid">
          {Entries.data.entries.map((item, i) => (
            <div className="col col-md-4 col-lg-3">
             <ItemCard data={item}/>
             </div>
          ))}
        </div>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </div>
    </section>
    </Page>
    );
};

export default Favorites;
