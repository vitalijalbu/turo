import React, { useState, useRef } from "react";
import Link from "framework7-react";
import typeList from '@/data/types.json';


const ListingsType = () => {


  return (
    <section>
    <div className="container">
    <div className="grid">
        {typeList.data.categories.map((data, i) => (
        <div className="col-md-4">
        <div className="card bordered">
        <div className="media">
  <div className="media-img"> <Link href={'/search?type='+data.slug}><img className="mr-3" src={data.image_url} alt={data.title}/></Link></div>
  <div className="media-body">
    <Link href={'/search?type='+data.slug}><h3 className="media-title">{data.title}</h3></Link>
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

export default ListingsType;
