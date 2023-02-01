import React, { useState, useEffect } from "react";
import { Page, Link, BlockTitle, Fab, Button, f7} from "framework7-react";
import Filters from "@/components/Search/Filters";
import SectionList from "@/components/Search/SectionList";

const Search = () => {
  const alertSave = (e) => {
    e.preventDefault();
    f7.toast.show({
      text: "La riceva è stata salvatajn.",
      horizontalPosition: "center",
      closeTimeout: 2500,
    });
  };
  return (
    <Page>
      <div className="container pt-4">
        <div className="grid">
        <div className="col-md-4 col-xs-12">
          <BlockTitle large>Filtri</BlockTitle>
           <div className="medium-only"><Filters/></div>
          </div>
          <div className="col-md-8 col-xs-12">
          <BlockTitle large>Risultati ricerca</BlockTitle>
            <SectionList/>
          </div>
        </div>
        <div id="fab-save_search">
      <Button iconF7="bell" round fill onClick={alertSave}>Salva ricerca</Button>
    </div>
      </div>
    </Page>
  );
};

export default Search;
