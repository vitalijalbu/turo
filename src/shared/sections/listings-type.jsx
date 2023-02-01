import React, { useState, useEffect } from "react";
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTING_TYPES } from "@/lib/graphql/queries/categories";
import { Block } from "framework7-react";


const ListingType = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log("✅ received-categories", data);

  async function getData() {
    try {
      const response = await graphQLClient.request(GET_LISTING_TYPES);
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

    if (!data) return <Block strong>Nessun dato</Block>;
    
  return (
    <section className="section-content">
      <div className="container" size="xl">
        <div className="section-title">
          <h1 order={1}>Sfoglia annunci</h1>
        </div>

        <div className="grid">
          {data?.categories?.map((type, i) => (
             <div className="col-md-4">
             <div className="card bordered">
             <div className="media">
       <div className="media-img"> <a href={'/search?type='+type.slug}><img className="mr-3" src={type?.media_url[0]?.url ?? '/img/placeholder.png'} alt={type.title}/></a></div>
       <div className="media-body">
         <a href={'/search?type='+type.slug}><h3 className="media-h1">{type.title}</h3></a>
       </div>
     </div>
           </div>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingType;