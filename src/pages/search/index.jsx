import React, { useState, useEffect } from "react";
import { Page, Link, BlockTitle, Block, Button, f7} from "framework7-react";
import Filters from "@/shared/search/filters";
import ListingItem from "@/shared/snippets/listing-item";
import { GET_LISTINGS } from "@/lib/graphql/queries/search";


const Search = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  //console.log("✅ received-entries", data);

  async function getData() {
    try {
      const response = await graphQLClient.request(GET_LISTINGS);
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

    if (!data.entries) return <Block strong>Nessun dato</Block>;
    

  const alertSave = (e) => {
    e.preventDefault();
    f7.toast.show({
      text: "La ricerca è stata salvata.",
      horizontalPosition: "center",
      closeTimeout: 2000,
    })
  }
  return (
    <Page>
      <div className="container pt-4">
        <div className="grid">
        <div className="col-12">
          <BlockTitle large>Filtri</BlockTitle>
           <div className="medium-only"><Filters/></div>
          </div>
          </div>
          <div className="grid">
          <div className="col-12">
          <BlockTitle large>Risultati ricerca</BlockTitle>
          <Block>
            {Array.isArray(data.entries) ? (
              <div className="list no-chevron no-hairlines no-hairlines-between">
              <ul className="list-properties">
                {data.entries.map((item, i) => (
                  <ListingItem data={item} key={i}/>
                ))}
                </ul>
              </div>
            ) : (
              <Block strong>Nessun dato</Block>
            )}
          </Block>
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
